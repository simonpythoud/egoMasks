Ext.define("EgoMasks.view.integration.Smile", {
    extend: 'Ext.Panel',
    xtype: 'smile',
    requires: [
    'Ext.TitleBar',
    'Ext.Img'
    ],
    config: {
        layout: 'vbox',
        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'Happy Faces'
        },{
            xtype: 'image',
            src: 'http://www.actionpodcast.com/wp-content/uploads/2011/09/Happiness.jpg',
            flex: 1
        },{
            xtype: 'button',
            ui: 'action',
            text: 'I am happy. Go on the main screen',
            id: 'completeIntegration'
        }]
    }
});
