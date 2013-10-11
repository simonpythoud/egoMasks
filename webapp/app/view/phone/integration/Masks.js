Ext.define("EgoMasks.view.phone.integration.Masks", {
    extend: 'Ext.Panel',
    xtype: 'phone-masks',
    requires: [
        'Ext.TitleBar',
        'Ext.Label',
        'EgoMasks.view.phone.integration.Header',
        'EgoMasks.view.integration.masks.Chart',
        'EgoMasks.view.phone.integration.masks.List',
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
            xtype: 'phone-integrationHeader',
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
