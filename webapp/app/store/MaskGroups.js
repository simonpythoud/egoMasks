Ext.define('EgoMasks.store.MaskGroups', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'EgoMasks.model.MaskGroup', 
        proxy: {
            type: 'ajax',
            url : 'resources/data/groups.json',
            reader: {
                type: 'json',
                rootProperty: 'groups'
            }
        },
        autoLoad: true
    }
});