Ext.define("EgoMasks.view.integration.masks.Helper", {
    extend: 'Ext.Panel',
    xtype: 'masksHelper',
    requires: [
        'Ext.Label'
    ],
    config: {
        layout: 'vbox',
        cls: 'masksHelper',
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
    }
});
