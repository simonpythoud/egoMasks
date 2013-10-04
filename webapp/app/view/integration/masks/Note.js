Ext.define("EgoMasks.view.integration.masks.Note", {
    extend: 'Ext.Panel',
    xtype: 'masksNote',
    requires: [
        'Ext.Label'
    ],
    config: {
        layout: 'vbox',
        cls: 'masksNote',
        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'Note about this integration',
            items: [{
                ui: 'back',
                text: 'Back',
                align: 'left'
            }]
        },{
            html: '"Add a note" goes here'
        }]
    }
});
