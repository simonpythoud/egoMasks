Ext.define('EgoMasks.store.Masks', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'EgoMasks.model.Mask', 
        proxy: {
            type: 'ajax',
            url : 'resources/data/masks.json',
            reader: {
                type: 'json',
                rootProperty: 'masks'
            }
        },
        grouper: {
            groupFn: function(record) {
                return record.get('group_id'); // Replace by group name
            }
        },
        filters: [{
            filterFn: function(record) {
                return record.get('group_id'); // Take only the basics masks (those with a group id)
            }
        }],
        autoLoad: true
    }
});