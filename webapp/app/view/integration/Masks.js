Ext.define("EgoMasks.view.integration.Masks", {
    extend: 'Ext.Panel',
    xtype: 'masks',
    requires: [
        'Ext.TitleBar',
        'Ext.Label', 
        'EgoMasks.view.integration.IntegrationBox',
        'EgoMasks.view.integration.MasksList',
    ],
    config: {
        layout: 'vbox',
        items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Integration'
            },{ 
                xtype: 'integrationBox',
                flex: 1, 
                docked: 'top'
            },{
                xtype: 'masksList',
                flex: 2
            }]
    }
});
