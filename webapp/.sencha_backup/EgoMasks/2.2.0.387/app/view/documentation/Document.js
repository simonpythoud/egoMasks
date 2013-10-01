Ext.define("EgoMasks.view.documentation.Document", {
    extend: 'Ext.Panel',
    xtype: 'document',
    requires: [
    'Ext.TitleBar'
    ],
    config: {
        styleHtmlContent: true,
        scrollable: true,

        // Make it hidden by default
        hidden: true,

        // Set the width and height of the panel
        fullscreen: true,

        layout: 'fit',

        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'Document',
            items: [{
                ui: 'back',
                text: 'Back',
                align: 'left'
            },{
                ui: 'action',
                text: 'Download (PDF)',
                id: 'downloadOriginal',
                align: 'right'
            }]
        }]
    }
});
