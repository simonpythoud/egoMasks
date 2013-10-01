Ext.define('EgoMasks.model.Mask', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [{
            name: 'id', 
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
        }], 
    
        associations: { type: 'hasOne', model: 'EgoMasks.model.MaskGroup'}
    }
});