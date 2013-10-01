Ext.define("EgoMasks.view.integration.Masks", {
    extend: 'Ext.Panel',
    xtype: 'masks',
    requires: [
        'Ext.TitleBar',
        'Ext.Label', 
        'EgoMasks.view.integration.IntegrationBox',
        'EgoMasks.view.integration.MasksList'
    ],
    config: {
        layout: 'vbox',
        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'Integration'
        },{ 
            xtype: 'integrationBox',
            flex: 1, 
            // docked: 'top'
        },{
            xtype: 'carousel', 
            indicator: false,
            //xtype: 'panel',
            layout: 'card',
            activeItem: 1,
            flex: 2,
            items: [{
            //     layout: 'vbox',
            //     items: [{
            //         docked: 'top',
            //         xtype: 'titlebar',
            //         title: 'Chart of the current integration',
            //         items: {
            //             ui: 'back',
            //             text: 'Back',
            //             align: 'left'
            //         }
            //     },{
            //         flex: 1,
            //         xtype: 'button', 
            //         iconCls: 'chart2'
            //     }]
            // },{
                xtype: 'masksList'
            },{
                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Help about the current mask',
                    items: [{
                        ui: 'back',
                        text: 'Back',
                        align: 'left'
                    }]
                },{
                    html: '<h1>MaskName</h1><p><b>def:</b> Here is the defintion of that mask</p><ul><li>Is it ... ?</li><li>Is it ... ?</li></p>'
                }]
            // },{
            //     items: [{
            //         docked: 'top',
            //         xtype: 'titlebar',
            //         title: 'Note about this integration',
            //         items: [{
            //             ui: 'back',
            //             text: 'Back',
            //             align: 'left'
            //         }]
            //     },{
            //         html: '"Add a note" goes here'
            //     }]
            }]
        }]
    }
});
