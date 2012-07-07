Ext.define('EgoMasks.model.Integration', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [{
            name: 'id', 
            type: 'int'
        },{
            name: 'title', 
            type: 'string'
        },{
            name: 'description', 
            type: 'string'
        },{
            name: 'timestamp', 
            type: 'int',
            defaultValue: 0
        },{
            name: 'duration', 
            type: 'int',
            defaultValue: 0
        }]
    }
});