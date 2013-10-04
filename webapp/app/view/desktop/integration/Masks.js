Ext.define("EgoMasks.view.desktop.integration.Masks", {
    extend: 'Ext.Panel',
    xtype: 'masks',
    requires: [
        'Ext.TitleBar',
        'Ext.Label', 
        'EgoMasks.view.desktop.integration.Header',
        'EgoMasks.view.integration.masks.Chart',
        'EgoMasks.view.integration.masks.List',
        'EgoMasks.view.integration.masks.Helper',
        'EgoMasks.view.integration.masks.Note'
    ],
    config: {
        layout: 'vbox',
        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'Integration'
        },{ 
            xtype: 'integrationHeader',
            flex: 1, 
            // docked: 'top'
        },{
            //xtype: 'carousel', 
            //indicator: false,
            xtype: 'panel',
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
