Ext.define('EgoMasks.model.MaskIntegration', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [{
            name: 'id', 
            type: 'string'
        },{
            name: 'integration_id', 
            type: 'string'
        },{
            name: 'mask_id', 
            type: 'int'
        },{
            name: 'maskName', 
            type: 'string'
        },{
            name: 'comment', 
            type: 'string', 
            defaultValue: ''
        },{
            name: 'duration', //ms
            type: 'int',
            defaultValue: 0
        },{
            name: 'click', //x (1x, 2x, 3x, ...)
            type: 'int',
            defaultValue: 0
        }],
        proxy: {
            type: 'rest',
            url: baseUrl + '/maskintegrations',
            reader: {
                type: 'json', 
                rootProperty: 'maskintegrations'
            }, 
            withCredentials: true
        }
    }
});