//@require Ux/locale/Manager.js
//@require Ux/locale/override/st/Component.js
//@require Ux/locale/override/st/Button.js
//@require Ux/locale/override/st/Container.js
//@require Ux/locale/override/st/TitleBar.js
//@require Ux/locale/override/st/field/Field.js
//@require Ux/locale/override/st/field/DatePicker.js
//@require Ux/locale/override/st/form/FieldSet.js
//@require Ux/locale/override/st/picker/Picker.js
//@require Ux/locale/override/st/picker/Date.js
//@require Ux/locale/override/st/navigation/Bar.js
//@require Ux/locale/override/st/navigation/View.js

//Add hacks variable used within the app
//urlParams = Ext.Object.fromQueryString(window.location.search.substring(1));
//isPhone = (urlParams.isPhone != null)?(urlParams.isPhone === '1'):(Ext.os.deviceType == 'Phone') // Define a variable used for sizing purpose
//isMobile= (urlParams.isMobile != null)?(urlParams.isMobile === '1'):('ontouchstart' in window); // For scroll purpose. true if mobile, false if browser
//scrollCls = isMobile? ' ': ' browserScroll';
// Test if vertical or horizontal and then arrange the first page with it

Ext.application({
    name: 'EgoMasks',

    requires: [
        'Ext.DateExtras',
        'Ext.MessageBox'
    ],
    
    controllers: [
        'Overview', 
        'Integration', 
        'Main', 
        'Documentation'
    ],
    
    stores: [
        'Integrations', 
        'Masks', 
        'MaskGroups'
    ],
       
    models: [
        'Integration', 
        'MaskGroup', 
        'Mask', 
        'MaskIntegration',
        'Document'
    ],

    profiles: [
        'Phone', 
        'Tablet', 
        'Desktop'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        //Load the Ux.locale lib
        Ux.locale.Manager.setConfig({
            ajaxConfig: {method: 'GET'},
            language: 'en',
            tpl: 'resources/locales/{locale}.json',
            type: 'ajax'
        });
        Ux.locale.Manager.init();

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
