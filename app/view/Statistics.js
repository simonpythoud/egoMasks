Ext.define("EgoMasks.view.Statistics", {
    extend: 'Ext.Panel',
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
