Ext.define("EgoMasks.view.Main", {
    extend: 'Ext.Panel',
    xtype: 'mainview', 
    requires: [
    'EgoMasks.view.Overview',
    'EgoMasks.view.Integration',
    'EgoMasks.view.History',
    'EgoMasks.view.Documentation', 
    'EgoMasks.view.Statistics'
    ],
    config: {
        layout: 'card',
        items: [{
            xtype: 'overview' 
        },{
            xtype: 'integration'
        },{
            xtype: 'history'
        },{
            xtype: 'documentation'
        },{
            xtype: 'statistics'
        }]
    }
});
