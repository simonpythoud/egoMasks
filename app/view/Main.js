Ext.define("EgoMasks.view.Main", {
    extend: 'Ext.Panel',
    requires: [
    'Ext.TitleBar',
    ],
    config: {
        layout: 'card',
        items: [{
            xtype: 'overview' 
        },{
            xtype: 'integration'
        }]
    }
});
