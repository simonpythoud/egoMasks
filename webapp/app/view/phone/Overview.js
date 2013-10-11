Ext.define("EgoMasks.view.phone.Overview", {
    //extend: 'Ext.Panel',
    extend: 'Ext.Carousel',
    xtype: 'phone-overview',
    requires: [
    'EgoMasks.view.overview.List',
    'EgoMasks.view.overview.Detail',
    'EgoMasks.view.LoginPanel',
    'EgoMasks.view.LoginBox',
    'EgoMasks.view.Options',
    'Ext.TitleBar'
    ],
    config: {
        
        items: [{
            id: 'overview',
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
                    xtype: 'button',
                    text: 'New Integration',
                    id: 'openNewIntegration',
                    flex: 1
                },{
                    xtype: 'button',
                    text: 'History',
                    id: 'openHistory',
                    flex: 1
                }]
            },{
                layout: 'vbox',
                flex: 1,
                items:  [{
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

        }, {

            // New design from GuruCitta :)

            layout: 'vbox',
            style: 'color: white',
            items: [{
                // Top part (titlebar)
                flex: 2,
                html: 'Icon + Title + 3 icons social', 
                style: 'background: gray'
            },{
                // Middle part (large image)
                flex: 6,
                html: 'ABOUT EI', 
                style: 'background: black'
            },{
                // Bottom part (kind of menu)
                flex: 4,
                layout: 'hbox',
                items: [{
                    // Left bottom part
                    flex: 1,
                    layout: 'vbox',
                    items: [{
                        flex: 1,
                        html: 'Guided Integration', 
                        style: 'background: turquoise'
                    },{
                        flex: 1,
                        html: 'Advanced Integration',
                        style: 'background: darkblue'
                    }]
                }, {
                    // middle and right bottom part
                    flex: 2, 
                    layout: 'vbox',
                    items: [{
                        // top of the middle and right bottom part
                        flex: 1,
                        html: 'Free Stuff', 
                        style: 'background: violet'
                    },{
                        // bottom of the middle and right bottom part
                        flex: 2,
                        layout: 'hbox',
                        items: [{
                            flex: 2,
                            layout: 'vbox',
                            items: [{
                                flex: 1,
                                html: 'Contact', 
                                style: 'background: beige'
                            },{
                                flex: 1,
                                html: 'Help', 
                                style: 'background: turquoise'
                            }]
                        },{
                            flex: 3,
                            html: 'Videos', 
                            style: 'background: darkblue'
                        }]
                    }]
                }]
            }]
        }]
    }
});
