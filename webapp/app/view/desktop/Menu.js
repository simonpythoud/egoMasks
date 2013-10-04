Ext.define("EgoMasks.view.desktop.Menu", {
    extend: 'Ext.Panel',
    xtype: 'desktopMenu', 
    requires: [
    'Ext.TitleBar'
    ],
    config: {
        cls: 'desktopMenu',
        layout: 'vbox',
        items:  [{
            xtype: 'button',
            locales: {text: 'Menu.overview'},
            id: 'openOverview'
        },{
            xtype: 'button',
            locales: {text: 'Menu.newIntegration'},
            id: 'openNewIntegration'
        },{
            xtype: 'button',
            locales: {text: 'Menu.history'},
            id: 'openHistory'
        },{
            xtype: 'button',
            locales: {text: 'Menu.statistics'},
            id: 'openStatistics'
        },{
            xtype: 'button',
            locales: {text: 'Menu.documentation'},
            id: 'openDocumentation'
        },{
            xtype: 'button',
            locales: {text: 'Menu.options'},
            id: 'openOptions', 
            iconCls: 'settings', 
            docked: 'bottom'
        }]
    }
});