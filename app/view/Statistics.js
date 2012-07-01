Ext.define("EgoMasks.view.Statistics", {
    extend: 'Ext.Panel',
    xtype: 'statistics',
    requires: [
    'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'Statistics'
        }]
    }
});
