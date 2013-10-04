Ext.define("EgoMasks.view.desktop.Overview", {
    extend: 'Ext.Panel',
    xtype: 'desktop-overview', 
    requires: [
    'EgoMasks.view.overview.List',
    'EgoMasks.view.overview.Detail'
    ],
    config: {
        id: 'overview',
        //styleHtmlContent: true,
        //scrollable: false,
        layout: 'vbox',
        items:  [{
            xtype: 'titlebar',
            locales: {title: 'Menu.overview'},
            docked: ''
        },{
            flex: 1,
            layout: 'vbox',
            items: [{
                html: '<h1>Integration waiting list</h1>'
            },{
                flex: 1,
                html: 'The waiting list items comes here... '
            }]
        },{
            flex: 1,  
            layout: 'vbox',  
            items: [{
                html: '<h1>Previous integration</h1>'
            },{
                xtype: 'overviewlist', 
            }]
            
        }]
    }
});
