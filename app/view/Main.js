Ext.define("EgoMasks.view.Main", {
    extend: 'Ext.Carousel', //'Ext.Panel',
    requires: [
    'EgoMasks.view.Overview',
    'EgoMasks.view.Integration', 
    'EgoMasks.view.Documentation'
    ],
    config: {
        direction: 'vertical',
        items: [{
            xtype: 'overview' 
        },{
            xtype: 'integration'
        },{
            xtype: 'documentation'
        }]
    }
});
