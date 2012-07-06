Ext.define('EgoMasks.controller.Integration', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            integrationPanel: 'integration',
            informationPanel: 'integration information',
            masksPanel: 'integration masks',
            smilePanel: 'integration smile',
            startIntegrationBtn: 'integration information button#startIntegration',
            enjoyIntegrationBtn: 'integration masks button#enjoyIntegration',
            completeIntegrationBtn: 'integration smile button#completeIntegration'
        },
        control: {
            startIntegrationBtn: {
                tap: 'startIntegration'
            }, 
            enjoyIntegrationBtn: {
                tap: 'enjoyIntegration'
            }, 
            completeIntegrationBtn: {
                tap: 'completeIntegration'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        this.mainCtrl = app.getController('Main');
        this.integration = this.getIntegrationPanel();
        this.information = this.getInformationPanel();
        this.masks = this.getMasksPanel();
        this.smile = this.getSmilePanel();
    },
    
    startIntegration: function(btn, event, e){
        this.integration.setActiveItem(this.masks);
    },
    
    enjoyIntegration: function(btn, event, e){
        this.integration.setActiveItem(this.smile);
    },
    
    completeIntegration: function(btn, event, e){
        this.mainCtrl.gotoOverview();
        this.integration.setActiveItem(this.information);
    },
    
    validateData: function(record) {
        var errors = record.validate();
        if(errors.isValid()){
            return true;
        }
        var errorMsg = '';
        
        errors.each(function(){
            errorMsg += this.getMessage() + '. ';
        });
        
        Ext.Msg.alert('Data Error', errorMsg, Ext.emptyFn);
        
        return false;
    }
});