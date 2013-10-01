Ext.define('EgoMasks.model.Document', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [{
            name: 'id', 
            type: 'int'
        },{
            name: 'title', 
            type: 'string'
        },{
            name: 'filetype', 
            type: 'string'
        },{
            name: 'html', 
            type: 'string'
        },{
            name: 'filename',
            type: 'string'
        }]
    }
});