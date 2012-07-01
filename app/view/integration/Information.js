Ext.define("EgoMasks.view.integration.Information", {
    extend: 'Ext.Panel',
    xtype: 'integrationinfo',
    requires: [
    'Ext.TitleBar',
    ],
    config: {
        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'New integration'
        }, {
            html: 'Give title and description'
        }]
    }
});
