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
        this.currentIntegrationRecord = null;
        this.currentSelectedMaskRecord = null;
        
        this.integrationInProgress = false;
        
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
        
        // Save the model
        this.currentIntegration.save();
        
        this.integration.setActiveItem(this.smile);
    },
    
    completeIntegration: function(btn, event, e){
        this.mainCtrl.gotoOverview();
        this.integration.setActiveItem(this.information);
    },
    
    selectMask: function(btn, event, e){
        this.stopTimer();
        this.currentSelectedMaskRecord = btn.getRecord();
        
        this.integrationBoxMaskName.setText(this.currentSelectedMaskRecord.get('name'));
        //With tpl: this.integrationBoxMaskName.setRecord(maskRecord);
        
        if(true){ /// If the maskIntegrationRecord exist (same mask id, same integration id), continue with it
            this.elapsedTime = 0; // Set the real elapsed time if exist
        } 
        else{
            // Else, create a new one  
            this.elapsedTime = 0; // Set the real elapsed time if exist
        }  
        
        
        // Set MaskIntegration record to the timer and clicker
        this.integrationBoxMaskClicker.setText('1x');
        
        this.stopTimer();
        this.startTimer();
        
    },
    
    startTimer: function(previousTime){
        this.integrationInProgress = true;
        this.integrationBoxMaskTimer.setIconCls('play');

        this.updateTimer();
        
        var that = this;      
        var start = new Date().getTime() - this.elapsedTime;
        
        this.updateInterval = setInterval(function(){
                that.elapsedTime = (new Date().getTime() - start);  
                that.updateTimer();
        },100);
    },
    
    stopTimer: function(){
        this.integrationInProgress = false;
        this.integrationBoxMaskTimer.setIconCls('pause');
        clearInterval(this.updateInterval);
    },
    
    switchTimer: function(){
        // Can switch Timer only if a mask is selected
        if(this.currentSelectedMaskRecord == null) {return}
        
        if(this.integrationInProgress){
            this.stopTimer();
        } else {
            this.startTimer();
        }
    },
    

        
    updateTimer: function(){
        
        // remove ms from elapsed time
        var e = this.elapsedTime/1000;
        var seconds = Math.round(e % 60);
        
        // remove seconds 
        e /= Math.round(60);
        var minutes = Math.round(e % 60);
        
        // remove minutes
        e /= Math.round(60);
        var hours = Math.round(e % 24);
        
        var timerString = 
                (hours? hours + ":" : '') + 
                ((minutes <= 9) ? '0'+ minutes : minutes) + ":" + 
                ((seconds <= 9) ? '0'+ seconds : seconds) + "\"";
        
        this.integrationBoxMaskTimer.setText('Timer: ' + timerString);
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