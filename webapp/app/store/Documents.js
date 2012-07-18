Ext.define('EgoMasks.store.Documents', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'EgoMasks.model.Document', 
        proxy: {
            type: 'ajax',
            url : 'resources/data/documents.json',
            reader: {
                type: 'json',
                rootProperty: 'documents'
            }
        },
        autoLoad: true
    }
});