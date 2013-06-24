Ext.define("EgoMasks.view.integration.IntegrationBox", {
    extend: 'Ext.Panel',
    xtype: 'integrationBox',
    config: {
        layout: 'hbox',
        id: 'integrationBox',
        items: [{
                layout: 'vbox',
                flex: 1, 
                items: [{
                    flex: 1, 
                    xtype: 'button', 
                    iconCls: 'chart2'
                }, {
                    xtype: 'button', 
                    height: 50,
                    id: 'globalTimer', 
                    disabled: true,
                    html: 'Global Timer: --:--"' , 
                    tpl: new Ext.XTemplate('<span class="x-button-label">Global Timer: {[this.formatedDuration(values.duration)]}"</span>', {
                        formatedDuration: function(duration){
                            var e = duration/1000; // remove ms from elapsed time
                            var seconds = Math.floor(e % 60);

                            e /= 60; // remove seconds 
                            var minutes = Math.floor(e % 60);

                            e /= 60; // remove minutes
                            var hours = Math.floor(e % 24);

                            var timerString = 
                                    (hours? hours + ":" : '') + 
                                    ((minutes <= 9) ? '0'+ minutes : minutes) + ":" + 
                                    ((seconds <= 9) ? '0'+ seconds : seconds);

                            return timerString;
                       }
                    })
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
                    height: 50,
                    items: [{
                            xtype: 'button', 
                            flex: 3,
                            id: 'maskTimer', 
                            disabled: true,
                            html: 'Mask Timer: --:--"' , 
                            tpl: new Ext.XTemplate('<span class="x-button-label">Mask Timer: {[this.formatedDuration(values.duration)]}"</span>', {
                                formatedDuration: function(duration){
                                    var e = duration/1000; // remove ms from elapsed time
                                    var seconds = Math.floor(e % 60);
                                    
                                    e /= 60; // remove seconds 
                                    var minutes = Math.floor(e % 60);

                                    e /= 60; // remove minutes
                                    var hours = Math.floor(e % 24);

                                    var timerString = 
                                            (hours? hours + ":" : '') + 
                                            ((minutes <= 9) ? '0'+ minutes : minutes) + ":" + 
                                            ((seconds <= 9) ? '0'+ seconds : seconds);

                                    return timerString;
                               }
                            })
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
