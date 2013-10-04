Ext.define("EgoMasks.view.integration.masks.Chart", {
    extend: 'Ext.Panel',
    xtype: 'masksChart',
    requires: [
        'Ext.Label'
    ],
    config: {
        layout: 'vbox',
        cls: 'masksChart',
        layout: 'vbox',
        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'Chart of the current integration',
            items: {
                ui: 'back',
                text: 'Back',
                align: 'left'
            }
        },{
            flex: 1,
            xtype: 'button', 
            iconCls: 'chart2'
        }]
    }
});
