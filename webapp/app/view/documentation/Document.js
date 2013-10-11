Ext.define("EgoMasks.view.documentation.Document", {
    extend: 'Ext.Panel',
    xtype: 'document',
    requires: [
    'Ext.TitleBar'
    ],
    config: {
        styleHtmlContent: true,
        scrollable: true,

        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'Document',
            items: [{
            //     ui: 'back',
            //     text: 'Back',
            //     align: 'left'
            // },{
                id: 'close',
                text: 'Close',
                align: 'left', 
                ui: 'action'
            },{
                ui: 'action',
                text: 'Download (PDF)',
                id: 'downloadOriginal',
                align: 'right'
            }]
        }]
    }
});
