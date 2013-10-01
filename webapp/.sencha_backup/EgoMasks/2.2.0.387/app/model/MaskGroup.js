Ext.define('EgoMasks.model.MaskGroup', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [{
            name: 'id', 
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