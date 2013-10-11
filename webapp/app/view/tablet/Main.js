Ext.define("EgoMasks.view.tablet.Main", {
    extend: 'Ext.Panel',
    xtype: 'tablet-mainview', 
    requires: [
    'EgoMasks.view.tablet.Overview',
    'EgoMasks.view.tablet.Integration',
    'EgoMasks.view.History',
    'EgoMasks.view.Documentation', 
    'EgoMasks.view.documentation.Document', 
    'EgoMasks.view.Statistics'
    ],
    config: {
        layout: 'card',
        id: 'mainContainer', //mainview
        items: [{
            xtype: 'tablet-overview' 
        },{
            xtype: 'tablet-integration'
        },{
            xtype: 'history'
        },{
            xtype: 'documentation'
        },{
            xtype: 'statistics'
        },{
            xtype: 'document'
        }]
    }
});