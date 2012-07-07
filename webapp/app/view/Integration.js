Ext.define("EgoMasks.view.Integration", {
    extend: 'Ext.Panel',
    xtype: 'integration',
    requires: [
    'EgoMasks.view.integration.Information',
    'EgoMasks.view.integration.Masks',
    'EgoMasks.view.integration.Smile',
    'Ext.TitleBar'
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
