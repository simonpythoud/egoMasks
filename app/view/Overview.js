Ext.define("EgoMasks.view.Overview", {
    extend: 'Ext.Panel',
    xtype: 'overview',
    requires: [
    'EgoMasks.view.overview.List',
    'EgoMasks.view.overview.Detail',
    'Ext.TitleBar'
    ],
    config: {
        styleHtmlContent: true,
        scrollable: false,
        layout: 'vbox',
        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'Emotional Integration',
            flex: 1
        },{
            xtype: 'button',
            text: 'New Integration',
            id: 'openNewIntegration',
            flex: 1
        },{
            xtype: 'overviewlist', 
            flex: 2
        },{
            xtype: 'button',
            text: 'Statistics',
            id: 'openStatistics',
            flex: 1
        },{
            xtype: 'button',
            text: 'Documentation',
            id: 'openDocumentation',
            flex: 1
        }]
    }
});
