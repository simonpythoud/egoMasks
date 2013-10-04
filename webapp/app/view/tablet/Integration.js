Ext.define("EgoMasks.view.tablet.Integration", {
    extend: 'Ext.Panel',
    xtype: 'integration',
    requires: [
    'EgoMasks.view.integration.Information',
    'EgoMasks.view.tablet.integration.Masks',
    'EgoMasks.view.integration.Smile'
    ],
    config: {
        layout: 'card',
        items: [{
            xtype: 'information'
        },{
            xtype: 'masks'
        },{
            xtype: 'smile'
        }]
    }
});
