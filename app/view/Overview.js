Ext.define("EgoMasks.view.Overview", {
    extend: 'Ext.Panel',
    xtype: 'overview',
    requires: [
    'Ext.TitleBar'
    ],
    config: {
        styleHtmlContent: true,
        scrollable: true,

        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'Emotional Integration'
        },{
            xtype: 'button',
            title: 'New Integration'
        },{
            xtype: 'overviewlist'
        }]
    }
});
