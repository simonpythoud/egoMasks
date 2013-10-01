Ext.define("EgoMasks.view.History", {
    extend: 'Ext.Panel',
    xtype: 'history',
    requires: [
    'Ext.TitleBar'
    ],
    config: {
        layout: 'fit',
        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'History',
            items: [{
                ui: 'back',
                text: 'Back',
                align: 'left'
            }]
        },{
            xtype: 'overviewlist', 
            flex: 1
        }]
    }
});
