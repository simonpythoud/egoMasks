Ext.define("EgoMasks.view.Contemplation", {
    extend: 'Ext.tab.Panel',
    xtype: 'contemplation',
    requires: [
    'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [{   
            docked: 'top',
            xtype: 'titlebar',
            title: 'Contemplation',
            items: [{
                ui: 'back',
                text: 'Back',
                align: 'left'
            }]
        },{
            html: 'Contemplate the 21 Masks, one by one. <br />Then contemplate Joy, Love, Happiness'
        }]
    }
});
