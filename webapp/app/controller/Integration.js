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
            integrationPanel: {
                activate: 'newIntegration'
            },
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
        this.overviewCtrl = app.getController('Overview');
        this.integration = this.getIntegrationPanel();
        this.information = this.getInformationPanel();
        this.masks = this.getMasksPanel();
        this.smile = this.getSmilePanel();
        
    },
    
    newIntegration: function(){
        // Reset fields
        this.information.setValues({
            title: '',
            description: '',
            timestamp: new Date()
        });
    },
    
    startIntegration: function(btn, event, e){
        // Get value from the form
        var values = this.information.getValues();
        values.timestamp = (new Date()).valueOf();
        
        // Create a model of integration
        this.currentIntegration = Ext.create('EgoMasks.model.Integration', values);
        
        if(this.validateData(this.currentIntegration)){
            // Save the model
            this.currentIntegration.save();
        
            // Add the model to the overview list store
            this.overviewCtrl.store.add(this.currentIntegration);
        
            this.integration.setActiveItem(this.masks);
        }
    },
    
    enjoyIntegration: function(btn, event, e){
        // Set the duration of the integration
        var duration = (new Date()).valueOf() - this.currentIntegration.get('timestamp');
        this.currentIntegration.set('duration', duration);
        
        // Save the model
        this.currentIntegration.save();
        
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