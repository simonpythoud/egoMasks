Ext.define("EgoMasks.view.integration.IntegrationBox", {
    extend: 'Ext.Panel',
    xtype: 'integrationBox',
    config: {
        layout: 'hbox',
        id: 'integrationBox',
        items: [{
                layout: 'vbox', //Mask + timer + click counter
                flex: 3,
                items: [{
                    flex: 4,
                    xtype: 'button', 
                    text: '>> Select a mask below <<',
                    id: 'maskName'
                }, {
                    layout: 'hbox',  // Timer + click counter
                    flex: 1, 
                    items: [{
                            xtype: 'button', 
                            flex: 3,
                            html: 'Timer: --:--"' , 
                            //tpl: new Ext.XTemplate('Timer: {time}', { }),
                            id: 'maskTimer', 
                            disabled: true
                    },{
                            xtype: 'button', 
                            flex: 1,
                            html: 'Clicked: 1x',
                            //tpl: new Ext.XTemplate('Timer: {click}', { }),
                            id: 'maskClicker', 
                            disabled: true
                    }]
                }]
            },{ 
                layout: 'vbox',
                flex: 1,
                items: [{
                            xtype: 'button', 
                            flex: 1,
                            text: 'Help ?' 
                    },{
                            xtype: 'button', 
                            flex: 1,
                            text: '+ note' 
                    },{ 
                            flex: 1,
                            xtype: 'button',
                            text: 'Finish Integration -> Go in Happinees',
                            ui: 'action',
                            id: 'enjoyIntegration'
                    }
                ]

            }]
    }
});
