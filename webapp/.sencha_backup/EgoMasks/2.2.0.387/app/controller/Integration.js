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
            integrationBoxGlobalTimer: 'integrationBox #globalTimer',
            integrationBoxMaskClicker: 'integrationBox #maskClicker',
            masksList: 'masksList', 
            masksListBtns: 'masksList button', // all buttons in the masks list
            masksBackBtn: 'masks button[ui=back]',
            masksCarousel: 'masks carousel', 
            showHelpBtn: 'integrationBox #showHelpBtn', 
            showAddNoteBtn: 'integrationBox #showAddNoteBtn'
            
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
            }, 
            masksBackBtn: {
                tap: 'backToMasksList'
            }, 
            showHelpBtn: {
                tap: 'showMaskHelp'
            },
            showAddNoteBtn: {
                tap: 'showAddNote'
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
        this.integrationBoxGlobalTimer = this.getIntegrationBoxGlobalTimer();
        this.integrationBoxMaskTimer = this.getIntegrationBoxMaskTimer();
        this.integrationBoxMaskClicker = this.getIntegrationBoxMaskClicker();
        
        this.masksList = this.getMasksList();
        this.masksCarousel = this.getMasksCarousel();
        
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
        
        this.integrationBoxGlobalTimer.setRecord(this.currentIntegration);
        
        this.integrationBoxMaskName.setText('>> Select a mask below <<');
        this.integrationBoxMaskName.setIconCls('');

        var emptyMiModel = Ext.create('EgoMasks.model.MaskIntegration');
        this.integrationBoxMaskClicker.setRecord(emptyMiModel);
        this.integrationBoxMaskTimer.setRecord(emptyMiModel);
    },
    
    enjoyIntegration: function(btn, event, e){
        
        // Save the integration and maskIntegration models
        this.currentIntegration.save();
        if(this.miRecord){
            this.miRecord.save();
        }
        this.stopTimer();
        
        this.integration.setActiveItem(this.smile);
    },
    
    completeIntegration: function(btn, event, e){
        this.mainCtrl.gotoOverview();
        this.integration.setActiveItem(this.information);
    },
    
    showBigChart: function(){
        this.masksCarousel.setActiveItem(0);
    },
    
    backToMasksList: function(){
        this.masksCarousel.setActiveItem(1);
    },
    
    showMaskHelp: function(){
        this.masksCarousel.setActiveItem(2);
    },
    
    showAddNote: function(){
        this.masksCarousel.setActiveItem(3);
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
        this.integrationBoxMaskName.setIconCls('play');

        var that = this;   
        var start = new Date().getTime() - this.currentIntegration.get('duration');
        var miStart = new Date().getTime() - this.miRecord.get('duration');
        
        this.updateInterval = setInterval(function(){
                var currentTime = (new Date().getTime());
                that.currentIntegration.set('duration', currentTime - start);
                that.miRecord.set('duration', currentTime - miStart);
        },100);
    },
    
    stopTimer: function(){
        this.integrationInProgress = false;
        this.integrationBoxMaskName.setIconCls('pause');
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