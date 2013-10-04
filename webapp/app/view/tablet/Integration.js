Ext.define("EgoMasks.view.tablet.Integration", {
    extend: 'Ext.Panel',
    xtype: 'tablet-integration',
    requires: [
    'EgoMasks.view.integration.Information',
    'EgoMasks.view.tablet.integration.Masks',
    'EgoMasks.view.integration.Smile'
    ],
    config: {
        id: 'integration',
        layout: 'card',
        items: [{
            xtype: 'information'
        },{
            xtype: 'tablet-masks'
        },{
            xtype: 'smile'
        }]
    }
});
