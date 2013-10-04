Ext.define("EgoMasks.view.phone.Integration", {
    extend: 'Ext.Panel',
    xtype: 'phone-integration',
    requires: [
    'EgoMasks.view.integration.Information',
    'EgoMasks.view.phone.integration.Masks',
    'EgoMasks.view.integration.Smile'
    ],
    config: {
        id: 'integration',
        layout: 'card',
        items: [{
            xtype: 'information'
        },{
            xtype: 'phone-masks'
        },{
            xtype: 'smile'
        }]
    }
});
