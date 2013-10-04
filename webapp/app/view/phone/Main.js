Ext.define("EgoMasks.view.phone.Main", {
    extend: 'Ext.Panel',
    xtype: 'mainview', 
    requires: [
    'EgoMasks.view.phone.Overview',
    'EgoMasks.view.phone.Integration',
    'EgoMasks.view.History',
    'EgoMasks.view.Documentation', 
    'EgoMasks.view.Statistics'
    ],
    config: {
        layout: 'card',
        id: 'mainContainer',
        cls: 'phoneMain',
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
