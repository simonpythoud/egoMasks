Ext.define("EgoMasks.view.documentation.Document", {
    extend: 'Ext.Panel',
    xtype: 'document',
    requires: [
    'Ext.TitleBar'
    ],
    config: {
        styleHtmlContent: true,
        scrollable: true,

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
