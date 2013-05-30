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
                            id: 'maskTimer', 
                            disabled: true,
                            html: 'Timer: --:--"' , 
                            tpl: new Ext.XTemplate('<span class="x-button-label">Timer: {[this.formatedDuration(values.duration)]}"</span>', {
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
