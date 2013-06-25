Ext.define("EgoMasks.view.integration.box.MaskTimer", {
    extend: 'Ext.Button',
    xtype: 'maskTimer',
    config: {
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
    }
});
