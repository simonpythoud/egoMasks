Ext.define('Ux.locale.Manager', {
    singleton : true,

    requires : [
        'Ext.ComponentQuery',
        'Ext.Ajax'
    ],

    uses : [
        'Ext.data.Store'
    ],

    _ajaxConfig : {},
    _beforeLoad : Ext.emptyFn,
    _language   : navigator.language? navigator.language.split('-')[0] : navigator.userLanguage.split('-')[0],
    _loaded     : true,
    _loadingInd : true,
    _locale     : {},
    _locales    : [
        { abbr : 'en', text : 'English' },
        { abbr : 'fr', text : 'French'  }
    ],
    _tpl        : '',
    _type       : 'script',

    _decoder : function(options, success, response) {
        var text = response.responseText;

        return Ext.decode(text);
    },

    _callback : function() {
        this.applyLocales();
    },

    init : function(callback) {
        var me         = this,
            type       = me._type,
            lmCallback = me._callback,
            method     = type === 'script' ? 'loadScriptTag' : 'loadAjaxRequest';

        if (typeof callback !== 'function') {
            callback = Ext.emptyFn;
        }

        callback = Ext.Function.createInterceptor(callback, lmCallback, me);

        me[method](callback);
    },

    loadAjaxRequest: function(callback) {
        var me = this;

        me._loaded = false;

        me._beforeLoad();

        var ajaxConfig = Ext.apply({}, me._ajaxConfig),
            language   = me._language,
            path       = me._tpl.replace('{locale}', language),
            decoder    = me._decoder,
            params     = ajaxConfig.params || {},
            json;

        params.language = language;

        Ext.apply(ajaxConfig, {
            params   : params,
            url      : path,
            callback : function(options, success, response) {
                json       = decoder(options, success, response);
                me._locale = json;
                me._loaded = true;

                if (typeof callback == 'function') {
                    Ext.Function.bind(callback, me, [me, options, success, response])();
                }
            }
        });

        Ext.Ajax.request(ajaxConfig);
    },

    loadScriptTag : function() {
        console.log('<script/> support coming');
    },

    setConfig : function(config) {
        Ext.Object.each(config, function(key, value) {
            this['_' + key] = value;
        }, this);

        return this;
    },

    applyLocales : function() {
        var cmps     = Ext.ComponentQuery.query('component[enableLocale]'),
            c        = 0,
            cNum     = cmps.length,
            language = this._language,
            cmp;

        for (; c < cNum; c++) {
            cmp = cmps[c];

            if (typeof cmp.setLocale == 'function') {
                cmp.setLocale(language);
            }
        }
    },

    isLoaded : function() {
        return this._loaded;
    },

    get : function(key, defaultText) {
        var me     = this,
            locale = me._locale,
            plural = key.indexOf('p:') == 0,
            keys   = (plural ? key.substr(2) : key).split('.'),
            k      = 0,
            kNum   = keys.length,
            res;

        if (!me.isLoaded()) {
            return defaultText;
        }

        for (; k < kNum; k++) {
            key = keys[k];

            if (locale) {
                locale = locale[key];
            }
        }

        res = locale || defaultText;

        if (plural) {
            return Ext.util.Inflector.pluralize(res);
        } else {
            return res;
        }
    },

    getAvailable : function(simple) {
        var locales = this._locales;

        if (simple) {
            return locales;
        } else {
            return new Ext.data.Store({
                fields : ['abbr', 'text'],
                data   : locales
            });
        }
    },

    updateLocale : function(locale) {
        var me = this;

        me._language = locale;

        if (me._loadingInd && Ext.Viewport.setMasked) {
            Ext.Viewport.setMasked({
                xtype     : 'loadmask',
                indicator : true,
                message   : me.get('misc.loadingLocaleMsg', 'Loading...')
             });
        }

        me.init(function(mngr) {
            if (me._loadingInd && Ext.Viewport.setMasked) {
                Ext.Viewport.setMasked(false);
            }
        });
    }, 
    
    getLanguage : function() {
        return this._language;
    },

    isLocalable : function(me, config) {
        if (!config) {
            config = {};
        }

        if (Ext.isObject(me.config.locales)) {
            config.locales = me.config.locales;
        }

        var locales      = config.locales      || me.locales      || ( me.getLocales      && me.getLocales()      ),
            enableLocale = config.enableLocale || me.enableLocale || ( me.getEnableLocale && me.getEnableLocale() );

        if (Ext.isObject(locales) || enableLocale) {
            Ext.apply(me, {
                enableLocale : true,
                locale       : this
            });
        }

        return config;
    }
});


Ext.define('Ux.locale.override.st.Component', {
    override : 'Ext.Component',

    requires : [
        'Ux.locale.Manager'
    ],

    enableLocale : false,
    locale       : null,
    locales      : null,

    constructor : function(config) {
        var me = this;

        config = Ux.locale.Manager.isLocalable(me, config);

        me.callParent([config]);

        if (me.enableLocale) {
            me.setLocale(Ux.locale.Manager.getLanguage());
        }
    },

    setLocale : function(locale) {
        var me          = this,
            locales     = me.locales || me.getInitialConfig().locales,
            html        = locales.html,
            manager     = me.locale,
            defaultText = '';

        if (html) {
            if (Ext.isObject(html)) {
                defaultText = html.defaultText;
                html        = html.key;
            }

            html = manager.get(html, defaultText);

            if (Ext.isString(html)) {
                me.setHtml(html);
            }
        }
    }
});


Ext.define('Ux.locale.override.st.Button', {
    override : 'Ext.Button',

    requires : [
        'Ux.locale.override.st.Component'
    ],

    constructor : function() {
        this.callSuper(arguments);
    },

    setLocale : function(locale) {
        var me          = this,
            locales     = me.locales || me.getInitialConfig().locales,
            text        = locales.text,
            manager     = me.locale,
            defaultText = '';

        if (text) {
            if (Ext.isObject(text)) {
                defaultText = text.defaultText;
                text        = text.key;
            }

            text = manager.get(text, defaultText);

            if (Ext.isString(text)) {
                me.setText(text);
                me.refreshIconAlign();
            }
        }

        me.callParent(arguments);
    }
});

Ext.define('Ux.locale.override.st.Container', {
    override : 'Ext.Container',

    requires : [
        'Ux.locale.override.st.Component'
    ],

    setLocale : function(locale) {
        var me          = this,
            tab         = me.getTab(),
            locales     = me.locales || me.getInitialConfig().locales,
            title       = locales.title,
            manager     = me.locale,
            defaultText = '';
    		
        if (title) {
            if (Ext.isObject(title)) {
                defaultText = title.defaultText;
                title       = title.key;
            }

            title = manager.get(title, defaultText);

            if (Ext.isString(title)) {
                /**
                 * Would like a setTitle on a container to do this
                 */
                me.title = title;
				
				if(tab){
               	 	tab.setTitle(title);
			 	}
            }
        }

        this.callParent(arguments);
    },

    getTab : function () {
        var me = this,
            tabpanel, tabBar, items, index;

        if (me.tab) {
            return me.tab;
        }

        /**
         * As of 2.0.0 PR3, there is no method or property to get the associated Ext.tab.Tab instance
         */

        tabpanel = me.up('tabpanel');

        if (!tabpanel) {
            return;
        }

        tabBar = tabpanel.getTabBar();
        items = tabpanel.getInnerItems();
        index = Ext.Array.indexOf(items, me);

        return tabBar.getComponent(index);
    }
});

Ext.define('Ux.locale.override.st.TitleBar', {
    override : 'Ext.TitleBar',

    requires : [
        'Ux.locale.override.st.Component'
    ],

    setLocale : function(locale) {
        var me          = this,
            locales     = me.locales || me.getInitialConfig().locales,
            title       = locales.title,
            manager     = me.locale,
            defaultText = '';

        if (title) {
            if (Ext.isObject(title)) {
                defaultText = title.defaultText;
                title       = title.key;
            }

            title = manager.get(title, defaultText);

            if (Ext.isString(title)) {
                me.setTitle(title);
            }
        }

        this.callParent(arguments);
    }
});

Ext.define('Ux.locale.override.st.field.Field', {
    override : 'Ext.field.Field',

    requires : [
        'Ux.locale.override.st.Component'
    ],

    setLocale : function(locale) {
        var me                 = this,
            locales            = me.locales || me.getInitialConfig().locales,
            label              = locales.label,
            placeholder        = locales.placeHolder,
            manager            = me.locale,
            defaultPlaceholder = '',
            defaultLabel       = '';

        if (label) {
            if (Ext.isObject(label)) {
                defaultLabel = label.defaultLabel;
                label        = label.key;
            }

            label = manager.get(label, defaultLabel);

            if (Ext.isString(label)) {
                me.setLabel(label);
            }
        }

        if (placeholder) {
            if (Ext.isObject(placeholder)) {
                defaultPlaceholder = label.defaultPlaceholder;
                placeholder        = placeholder.key;
            }

            placeholder = manager.get(placeholder, defaultPlaceholder);

            if (Ext.isString(placeholder)) {
                me.setPlaceHolder(placeholder);
            }
        }

        me.callParent(arguments);
    }
});

Ext.define('Ux.locale.override.st.field.DatePicker', {
    override : 'Ext.field.DatePicker',

    getPicker : function() {
        var picker     = this._picker,
            needLocale = picker && !picker.isPicker;

        picker = this.callParent(arguments);

        if (needLocale && picker.enableLocale) {
            picker.setLocale(Ux.locale.Manager.getLanguage());
        }

        return picker;
    }
});

Ext.define('Ux.locale.override.st.form.FieldSet', {
    override : 'Ext.form.FieldSet',

    requires : [
        'Ux.locale.override.st.Component'
    ],

    setLocale : function(locale) {
        var me                  = this,
            locales             = me.locales || me.getInitialConfig().locales,
            title               = locales.title,
            instructions        = locales.instructions,
            manager             = me.locale,
            defaultText         = '',
            defaultInstructions = '';

        if (title) {
            if (Ext.isObject(title)) {
                defaultText = title.defaultText;
                title       = title.key;
            }

            title = manager.get(title, defaultText);

            if (Ext.isString(title)) {
                me.setTitle(title);
            }
        }

        if (instructions) {
            if (Ext.isObject(instructions)) {
                defaultInstructions = instructions.defaultText;
                instructions        = instructions.key;
            }
            instructions = manager.get(instructions, defaultInstructions);

            if (Ext.isString(instructions)) {
                me.setInstructions(instructions);
            }
        }

        me.callParent(arguments);
    }
});

Ext.define('Ux.locale.override.st.picker.Picker', {
    override : 'Ext.picker.Picker',

    config : {
        doneButton   : {
            locales   : {
                text   : 'buttons.done'
            }
        },
        cancelButton : {
            locales   : {
                text   : 'buttons.cancel'
            }
        }
    }
});

Ext.define('Ux.locale.override.st.picker.Date', {
    override : 'Ext.picker.Date',

    setLocale : function(locale) {
        var me = this,
            locales = me.locales || me.getInitialConfig().locales,
            months = locales.months,
            day = locales.dayText,
            month = locales.monthText,
            year = locales.yearText,
            slotOrder = locales.slotOrder,
            manager = me.locale,
            defaultText = '',
            defaultDay = 'Day',
            defaultMonth = 'Month',
            defaultYear = 'Year',
            defaultSlotOrder = ['month', 'day', 'year'],
            slot, store, value;

        if(months) {
            if(Ext.isObject(months)) {
                defaultText = months.defaultText;
                months = months.key;
            }

            months = manager.get(months, defaultText);

            if(Ext.isObject(months)) {
                slot = this.down('pickerslot[name=month]');
                store = slot && slot.getStore();
                if(store) {
                    store.each(function(rec) {
                        value = rec.get('value');
                        rec.set('text', months[value]);
                    });
                }
            }
        }

        if(day) {
            if(Ext.isObject(day)) {
                defaultDay = day.defaultDay;
                day = day.key;
            }

            day = manager.get(day, defaultDay);

            if(Ext.isString(day)) {
                me.setDayText(day);
            }
        }

        if(month) {
            if(Ext.isObject(month)) {
                defaultMonth = month.defaultMonth;
                month = month.key;
            }

            month = manager.get(month, defaultMonth);

            if(Ext.isString(month)) {
                me.setMonthText(month);
            }
        }

        if(year) {
            if(Ext.isObject(year)) {
                defaultYear = year.defaultYear;
                year = year.key;
            }

            year = manager.get(year, defaultYear);

            if(Ext.isString(year)) {
                me.setYearText(year);
            }
        }

        if(slotOrder) {
            if(Ext.isObject(slotOrder)) {
                defaultSlotOrder = slotOrder.defaultSlotOrder;
                slotOrder = slotOrder.key;
            }

            slotOrder = Ext.JSON.decode(manager.get(slotOrder, defaultSlotOrder));

            if(Ext.isArray(slotOrder)) {
                me.setSlotOrder(slotOrder);
            }
        }

        me.callParent(arguments);
    }
});


Ext.define('Ux.locale.override.st.navigation.Bar', {
    override: 'Ext.navigation.Bar',

    requires: [
        'Ux.locale.Manager'
    ],

    enableLocale: false,
    locale: null,
    locales: null,

    constructor : function(config) {

        var me = this;

        Ux.locale.Manager.isLocalable(me, config.view.config);

        me.callParent([config]);

        if (me.enableLocale) {
            me.setLocale(Ux.locale.Manager.getLanguage());
        }
    },

    onViewAdd : function(view, item) {

        var me              = this,
            backButtonStack = me.backButtonStack,
            hasPrevious, title;

        me.endAnimation();

        if (item.enableLocale) {
            title = (item.getTitle) ? item.getTitle() : item.title || item.config.title;
        }
        else {
            title = (item.getTitle) ? item.getTitle() : item.config.title;
        }

        backButtonStack.push(title || '&nbsp;');
        hasPrevious = backButtonStack.length > 1;

        me.doChangeView(view, hasPrevious, false);
    },

    setLocale : function(locale) {
        var me = this,
            navView = me.config.view,
            items = navView.getInnerItems();

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.enableLocale) {
                item.setLocale(locale);
                var title = (item.getTitle) ? item.getTitle() : item.title;

                me.backButtonStack[i] = title;
            }
        }

        me.setTitle(me.getTitleText());

        var backButton = me.getBackButton();
        var backButtonText = me.getBackButtonText();
        if (backButton && backButtonText) {
            backButton.setText(backButtonText);
        }
    }
});

Ext.define('Ux.locale.override.st.navigation.View', {
    override: 'Ext.navigation.View',

    requires: [
        'Ux.locale.Manager'
    ],

    enableLocale: false,
    locale: null,
    locales: null,

    constructor : function(config) {
        var me = this;

        config = Ux.locale.Manager.isLocalable(me, config);

        me.callParent([config]);

        if (me.enableLocale) {
            me.setLocale(Ux.locale.Manager.getLanguage());
        }
    },

    setLocale : function(locale) {
        var me                    = this,
            locales               = me.locales || me.getInitialConfig().locales,
            defaultBackButtonText = locales.defaultBackButtonText,
            defaultText           = '',
            manager               = me.locale;

        if (defaultBackButtonText) {
            if (Ext.isObject(defaultBackButtonText)) {
                defaultText = defaultBackButtonText.defaultText;
                defaultBackButtonText = defaultBackButtonText.key;
            }

            defaultBackButtonText = manager.get(defaultBackButtonText, defaultText);

            if (Ext.isString(defaultBackButtonText)) {
                me.setDefaultBackButtonText(defaultBackButtonText);
            }
        }
    }
});