Ext.define("EgoMasks.view.phone.Main", {
    extend: 'Ext.Panel',
    xtype: 'phone-mainview', 
    requires: [
    'EgoMasks.view.phone.Overview',
    'EgoMasks.view.phone.Integration',
    'EgoMasks.view.History',
    'EgoMasks.view.Documentation', 
    'EgoMasks.view.Statistics'
    ],
    config: {
        layout: 'card',
        id: 'mainContainer', // mainview
        cls: 'phoneMain',
        items: [{
            xtype: 'phone-overview' 
        },{
            xtype: 'phone-integration'
        },{
            xtype: 'history'
        },{
            xtype: 'documentation'
        },{
            xtype: 'statistics'
        }]
    }
});
