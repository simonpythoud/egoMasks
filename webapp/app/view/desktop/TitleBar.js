Ext.define("EgoMasks.view.desktop.TitleBar", {
    extend: 'Ext.TitleBar',
    xtype: 'desktopTitleBar', 
    requires: [
    ],
    config: {
        ui: 'neutral',
        locales: {title: 'General.emotionalIntegration'},
        items: [{
            align: 'left',
            text: 'Menu',
            id: 'menu', 
            iconCls: 'list'
        },{
            align: 'right',
            disabled: true,
            text: 'Not logged',
            id: 'userinfo'
        }, {
            align: 'right',
            ui: 'action',
            text: 'Login',
            id: 'login'
        // }, {
        //     align: 'right',
        //     ui: 'neutral',
        //     iconCls: 'settings',
        //     id: 'options'
        }]
    }
});
