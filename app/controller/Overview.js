Ext.define('EgoMasks.controller.Overview', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            overviewList: 'overview list',
            overviewDetailInner: 'overview detail #htmlArea'
        },
        control: {
            overviewList: {
                itemtap: 'showIntegrationDetails'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        this.list = this.getOverviewList();
        
        this.store = Ext.create('EgoMasks.store.Integrations');
        
        this.list.setStore(this.store);
    }, 

    showIntegrationDetails: function(list, index, node, record){
        if(!this.detail)this.detail = Ext.Viewport.add({xtype:'detail'});
        
        var integrationDetails = [
        '<b>Title</b>: ' + record.get('title'),
        '<b>Description</b>: ' + record.get('description'),
        '<b>Date</b>: ' + Ext.Date.format(new Date(record.get('timestamp')), 'j/d/Y')
        ].join('<br />');
        
        this.detail.down('#htmlArea').setHtml(integrationDetails);
        
        this.detail.showBy(node, "cc-c?");
    }
});