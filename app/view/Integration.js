Ext.define("EgoMasks.view.Integration", {
    extend: 'Ext.Carousel', //'Ext.Panel',
    xtype: 'integration',
    requires: [
    'EgoMasks.view.integration.Information',
    'EgoMasks.view.integration.Masks',
    'EgoMasks.view.integration.Smile',
    'Ext.TitleBar'
    ],
    config: {
        items: [{
            xtype: 'integrationinfo'
        },{
            xtype: 'integrationmasks'
        },{
            xtype: 'integrationsmile'
        }]
    }
});
