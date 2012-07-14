Ext.define('EgoMasks.store.Integrations', {
    extend: 'Ext.data.Store',
    
    config: {
        autoLoad: true,
        model: 'EgoMasks.model.Integration'
    }
});