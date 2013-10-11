Ext.define("EgoMasks.view.desktop.Main", {
    extend: 'Ext.Panel',
    xtype: 'desktop-mainview', 
    requires: [
        'EgoMasks.view.desktop.Menu',
        'EgoMasks.view.desktop.Overview',
        'EgoMasks.view.desktop.TitleBar',
        'EgoMasks.view.desktop.Integration',
        'EgoMasks.view.History',
        'EgoMasks.view.Documentation', 
        'EgoMasks.view.documentation.Document', 
        'EgoMasks.view.Statistics', 
        'EgoMasks.view.LoginPanel',
        'EgoMasks.view.LoginBox',
        'EgoMasks.view.Options'
    ],
    config: {
        id: 'mainview',
        layout: 'hbox',
        cls: 'desktopMain',
        minWidth: '800px',
        items: [{
            docked: 'top',
            xtype: 'desktop-titleBar'
        },{
            xtype: 'desktop-menu'
        },{
            layout: 'card',
            id: 'mainContainer',
            flex: 1,
            items: [{
                xtype: 'desktop-overview'
            },{
                xtype: 'desktop-integration'
            },{
                xtype: 'history'
            },{
                xtype: 'documentation'
            },{
                xtype: 'statistics'
            },{
                xtype: 'document'
            }]
        }]
    }
});
