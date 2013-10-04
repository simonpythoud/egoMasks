Ext.define("EgoMasks.view.desktop.Overview", {
    extend: 'Ext.Panel',
    xtype: 'overview', 
    requires: [
    'EgoMasks.view.overview.List',
    'EgoMasks.view.overview.Detail'
    ],
    config: {
        //styleHtmlContent: true,
        //scrollable: false,
        layout: 'vbox',
        items:  [{
            xtype: 'titlebar',
            locales: {title: 'Menu.overview'},
        },{
            xtype: 'overviewlist', 
            flex: 1
        // },{
        //     html: 'Something else ...',
        //     flex: .3, 
        //     style: 'background: gray;'
        }]
    }
});
