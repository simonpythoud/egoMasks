Ext.define("EgoMasks.view.tablet.integration.Header", {
    extend: 'Ext.Panel',
    xtype: 'integrationHeader',
    requires: [
    'EgoMasks.view.integration.box.MaskTimer', 
    'EgoMasks.view.integration.box.GlobalTimer'
    ],
    config: {
        layout: 'hbox', 
        id: 'integrationHeader',
        items: [{
                layout: 'vbox',
                flex: 1, 
                items: [{
                    flex: 1, 
                    xtype: 'button', 
                    iconCls: 'chart2'
                }, {
                    xtype: 'globalTimer'
                }]
            }, {
                layout: 'vbox', //Mask + timer + click counter
                flex: 3,
                items: [{
                    flex: 1,
                    xtype: 'button', 
                    text: '',
                    id: 'maskName'
                }, {
                    layout: 'hbox',  // Timer + click counter
                    items: [{
                            xtype: 'maskTimer', 
                            flex: 3
                    },{
                            xtype: 'button', 
                            flex: 1,
                            tpl: new Ext.XTemplate('Click: {click}x'),
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
                            id: 'showHelpBtn',
                            text: 'Help ?' 
                    },{
                            xtype: 'button', 
                            flex: 1,
                            id: 'showAddNoteBtn',
                            text: 'Add note' 
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
