Ext.define('EgoMasks.controller.Integration', {
    extend: 'Ext.app.Controller',
    requires: [
        'EgoMasks.store.Masks'
    ],
    
    config: {
        refs: {
            integrationPanel: 'integration',
            informationPanel: 'integration information',
            masksPanel: 'integration masks',
            smilePanel: 'integration smile',
            startIntegrationBtn: 'integration information button#startIntegration',
            enjoyIntegrationBtn: 'integration masks button#enjoyIntegration',
            completeIntegrationBtn: 'integration smile button#completeIntegration',
            integrationBox: 'integrationBox',
            integrationBoxMaskName: 'integrationBox #maskName',
            integrationBoxMaskTimer: 'integrationBox #maskTimer',
            integrationBoxMaskClicker: 'integrationBox #maskClicker',
            masksList: 'masksList', 
            masksListBtns: 'masksList button' // all buttons in the masks list
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
            }, 
            integrationBoxMaskName: {
                tap: 'switchTimer'
            },
            masksListBtns: {
                tap: 'selectMask'
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
        
        this.integrationBoxMaskName = this.getIntegrationBoxMaskName();
        this.integrationBoxMaskTimer = this.getIntegrationBoxMaskTimer();
        this.integrationBoxMaskClicker = this.getIntegrationBoxMaskClicker();
        
        this.masksList = this.getMasksList();
        
        this.maskGroupsStore = Ext.getStore('MaskGroups');
        this.masksStore = Ext.getStore('Masks');

        
        this.maskGroupsStore.on('load', this.createMasksList, this);
        this.masksStore.on('load', this.createMasksList, this);
    },
    
    createMasksList: function(){
        // Control that both stores are loaded 
        if(!this.maskGroupsStore.isLoaded() || !this.masksStore.isLoaded())return;
        
        var that = this;
        this.maskGroupsStore.each(function (groupRecord, groupIndex, groupLength) {

            // get all the masks in this group
            var maskRecords = that.masksStore.getGroups(groupRecord.get('id')).children;

            var groupPanel = Ext.create('Ext.Panel', {
                cls: 'masksGroup',
                layout: 'hbox',
                items: [{ 
                    xtype: 'label', 
                    html: groupRecord.get('name'),
                    cls: 'verticalGroupName', 
                    record: groupRecord
                },{
                    layout: 'hbox',
                    flex: 1,
                    items: [
                        that.createMask(maskRecords[0]), 
                        that.createMask(maskRecords[1]), 
                        that.createMask(maskRecords[2])
                    ]
                }]
            });
            
            that.masksList.add(groupPanel);
        });
    },
    
    createMask: function(record){
        return Ext.create('Ext.Button', {        
            text: record.get('name'),
            record: record, 
            flex: 1
        });
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
        
        // Save the integration and maskIntegration models
        this.currentIntegration.save();
        this.miRecord.save();
        
        this.integration.setActiveItem(this.smile);
    },
    
    completeIntegration: function(btn, event, e){
        this.mainCtrl.gotoOverview();
        this.integration.setActiveItem(this.information);
    },
    
    selectMask: function(btn, event, e){
        this.stopTimer();
        
        // Save previous record if exist
        if(this.miRecord){this.miRecord.save()}
        
        var maskRecord = btn.getRecord();
        
        var miStore = this.currentIntegration.maskIntegration();
        
        // Try to find a mask integration record. If not exist, create it
        var existingMiRecordIndex = miStore.find('mask_id', maskRecord.get('id'));
        
        if(existingMiRecordIndex >= 0){
            this.miRecord = miStore.getAt(existingMiRecordIndex);
            // Set elapsed time from record
            this.elapsedTime = this.miRecord.get('duration'); 
            this.miRecord.set('click', this.miRecord.get('click')+1);
        
        } else{
            // Create a mask integration record
            this.miRecord = miStore.add({
                mask_id: maskRecord.get('id'),
                comment: '...',
                duration: 0,
                click: 1
            })[0];
            
            this.elapsedTime = 0;
        }  
        
        // Save the model
        this.miRecord.save();
        
        this.integrationBoxMaskName.setText(maskRecord.get('name'));

        this.integrationBoxMaskClicker.setRecord(this.miRecord);
        this.integrationBoxMaskTimer.setRecord(this.miRecord);
        

        this.startTimer();
        
    },
    
    startTimer: function(){
        this.integrationInProgress = true;
        this.integrationBoxMaskTimer.setIconCls('play');

        var that = this;      
        var start = new Date().getTime() - this.miRecord.get('duration');
        
        this.updateInterval = setInterval(function(){
                that.miRecord.set('duration', (new Date().getTime() - start));
        },100);
    },
    
    stopTimer: function(){
        this.integrationInProgress = false;
        this.integrationBoxMaskTimer.setIconCls('pause');
        clearInterval(this.updateInterval);
    },
    
    switchTimer: function(){
        // Can switch Timer only if a mask is selected
        if(this.integrationInProgress == null) {return}
        
        if(this.integrationInProgress){
            this.stopTimer();
        } else {
            this.startTimer();
        }
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