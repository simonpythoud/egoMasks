Ext.define('EgoMasks.controller.Overview', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            overviewList: 'overview list',
            historyList: 'history list',
            overviewDetailInner: 'detail #htmlArea', 
            loginButton: 'button#login',
            optionsButton: 'button#options', 
            openOptionsButton: 'button#openOptions'
        },
        control: {
            overviewList: {
                itemtap: 'showIntegrationDetails'
            }, 
            historyList: {
                itemtap: 'showIntegrationDetails'
            }, 
            loginButton: {
                tap: 'showLoginBox'
            }, 
            optionsButton: {
                tap: 'showOptions'
            }, 
            openOptionsButton: {
                tap: 'showOptions'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        EgoMasks.overviewCtrl = this;

        this.list = this.getOverviewList();
        this.historyList = this.getHistoryList();
        
        this.store = Ext.getStore('Integrations');
        if (this.list) this.list.setStore(this.store);
        
        this.historyList.setStore(this.store);
    }, 

    showIntegrationDetails: function(list, index, node, record){
        list.deselectAll();
        
        if(!this.detail)this.detail = Ext.Viewport.add({xtype:'detail'});
        
        var integrationDetails = [
        '<b>Title</b>: ' + record.get('title'),
        '<b>Description</b>: ' + record.get('description'),
        '<b>Date</b>: ' + Ext.Date.format(new Date(record.get('timestamp')), 'j/m/Y'),
         '<b>Duration</b>: ' + Math.floor(record.get('duration')/60000) + 'min'
        ].join('<br />');
        
        this.detail.down('#htmlArea').setHtml(integrationDetails);
        
        this.detail.showBy(node, "cc-c?");
    }, 
    
    showLoginBox: function(btn, e){
        
        if(!this.loginBox)this.loginBox = Ext.Viewport.add({xtype:'loginBox'});
        
        //isPhone?
        //    this.loginBox.show():
            this.loginBox.showBy(btn);
    },
    
    showLoginPanel: function(btn, e){
        
        if(!this.loginPanel)this.loginPanel = Ext.Viewport.add({xtype:'loginPanel'});
        
        this.loginPanel.show();
    }, 

    showOptions: function(btn, e){
        
        if(!this.optionsPanel)this.optionsPanel = Ext.Viewport.add({xtype:'options'});
        
        //isPhone?
        //    this.optionsPanel.show():
            this.optionsPanel.showBy(btn);   
    }
});