Ext.define('EgoMasks.model.MaskGroup', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [{
            name: '_id', 
            type: 'int'
        },{
            name: 'group_id', 
            type: 'int'
        },{
            name: 'name', 
            type: 'string'
        },{
            name: 'description', 
            type: 'string'
        }]
    }
});