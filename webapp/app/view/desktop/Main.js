Ext.define("EgoMasks.view.desktop.Main", {
    extend: 'Ext.Panel',
    xtype: 'mainview', 
    requires: [
        'EgoMasks.view.desktop.Menu',
        'EgoMasks.view.desktop.Overview',
        'EgoMasks.view.desktop.TitleBar',
        'EgoMasks.view.desktop.Integration',
        'EgoMasks.view.History',
        'EgoMasks.view.Documentation', 
        'EgoMasks.view.Statistics', 
        'EgoMasks.view.LoginPanel',
        'EgoMasks.view.LoginBox',
        'EgoMasks.view.Options'
    ],
    config: {
        layout: 'hbox',
        cls: 'desktopMain',
        minWidth: '800px',
        items: [{
            docked: 'top',
            xtype: 'desktopTitleBar'
        },{
            xtype: 'desktopMenu'
        },{
            layout: 'card',
            id: 'mainContainer',
            flex: 1,
            items: [{
                xtype: 'overview'
            },{
                xtype: 'integration'
            },{
                xtype: 'history'
            },{
                xtype: 'documentation'
            },{
                xtype: 'statistics'
            }]
        }]
    }
});
