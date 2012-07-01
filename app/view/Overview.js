Ext.define("EgoMasks.view.Overview", {
    extend: 'Ext.Panel',
    xtype: 'overview',
    requires: [
    'EgoMasks.view.overview.List',
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
            flex: 1
        },{
            xtype: 'button',
            text: 'Statistics', 
            flex: 1
        },{
            xtype: 'overviewlist', 
            flex: 1
        },{
            xtype: 'button',
            text: 'Documentation', 
            flex: 1
        }]
    }
});
