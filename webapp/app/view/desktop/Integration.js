Ext.define("EgoMasks.view.desktop.Integration", {
    extend: 'Ext.Panel',
    xtype: 'integration',
    requires: [
    'EgoMasks.view.integration.Information',
    'EgoMasks.view.desktop.integration.Masks',
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
