Ext.define('EgoMasks.controller.Overview', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            overviewList: 'overview list',
            historyList: 'history list',
            overviewDetailInner: 'overview detail #htmlArea', 
            loginButton: 'overview button#login'
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
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        this.list = this.getOverviewList();
        this.historyList = this.getHistoryList();
        
        this.store = Ext.getStore('Integrations');
        
        this.list.setStore(this.store);
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
        
        isPhone?
            this.loginBox.show():
            this.loginBox.showBy(btn);
        
    },
    
    showLoginPanel: function(btn, e){
        
        if(!this.loginPanel)this.loginPanel = Ext.Viewport.add({xtype:'loginPanel'});
        
        this.loginPanel.show();
    }
});