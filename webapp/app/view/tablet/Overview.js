Ext.define("EgoMasks.view.tablet.Overview", {
    extend: 'Ext.Panel',
    xtype: 'overview',
    requires: [
    'EgoMasks.view.overview.List',
    'EgoMasks.view.overview.Detail',
    'EgoMasks.view.LoginPanel',
    'EgoMasks.view.LoginBox',
    'EgoMasks.view.Options',
    'Ext.TitleBar'
    ],
    config: {
        styleHtmlContent: true,
        //scrollable: false,
        layout: 'vbox',
        flex: 1,
        items: [{
                docked: 'top',
                xtype: 'titlebar',
                locales: {title: 'General.emotionalIntegration'},
                items: [{
                    align: 'right',
                    disabled: true,
                    text: 'Not logged',
                    id: 'userinfo'
                }, {
                    align: 'right',
                    ui: 'action',
                    text: 'Login',
                    id: 'login'
                }, {
                    align: 'right',
                    ui: 'gray',
                    iconCls: 'settings',
                    id: 'options'
                }]
            },{

            layout: 'vbox',
            flex: 1,
            items:  [{
                xtype: 'overviewlist', 
                flex: 2,
            },{
                xtype: 'button',
                text: 'New Integration',
                id: 'openNewIntegration',
                flex: 1
            },{
                xtype: 'button',
                text: 'History',
                id: 'openHistory',
                flex: 1
            },{
                xtype: 'button',
                text: 'Statistics',
                id: 'openStatistics',
                flex: 1
            },{
                xtype: 'button',
                text: 'Documentation',
                id: 'openDocumentation',
                flex: 1
            }]
        }]
    }
});
