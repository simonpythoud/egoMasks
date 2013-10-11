Ext.define("EgoMasks.view.tablet.integration.Masks", {
    extend: 'Ext.Panel',
    xtype: 'tablet-masks',
    requires: [
        'Ext.TitleBar',
        'Ext.Label', 
        'EgoMasks.view.tablet.integration.Header',
        'EgoMasks.view.integration.masks.Chart',
        'EgoMasks.view.integration.masks.List',
        'EgoMasks.view.integration.masks.Helper',
        'EgoMasks.view.integration.masks.Note'
    ],
    config: {
        id: 'masks',
        layout: 'vbox',
        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'Integration'
        },{
            xtype: 'tablet-integrationHeader',
            flex: 1
        },{
            xtype: 'carousel', 
            indicator: false,
            layout: 'card',
            activeItem: 1,
            flex: 2,
            items: [{
                xtype: 'masksChart'
            },{
                xtype: 'masksList'
            },{
                xtype: 'masksHelper'
            },{
                xtype: 'masksNote'
            }]
        }]
    }
});
