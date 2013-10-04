Ext.define("EgoMasks.view.desktop.Integration", {
    extend: 'Ext.Panel',
    xtype: 'desktop-integration',
    requires: [
    'EgoMasks.view.integration.Information',
    'EgoMasks.view.desktop.integration.Masks',
    'EgoMasks.view.integration.Smile'
    ],
    config: {
        id: 'integration',
        layout: 'card',
        items: [{
            xtype: 'information'
        },{
            xtype: 'desktop-masks'
        },{
            xtype: 'smile'
        }]
    }
});
