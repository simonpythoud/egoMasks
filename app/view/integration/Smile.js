Ext.define("EgoMasks.view.integration.Smile", {
    extend: 'Ext.Panel',
    xtype: 'integrationsmile',
    requires: [
    'Ext.TitleBar',
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
        {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Happy Faces'
        },
        {
            xtype: 'image', 
            src: 'http://www.actionpodcast.com/wp-content/uploads/2011/09/Happiness.jpg', 
            flex: 1
        }
        ]
    }
});
