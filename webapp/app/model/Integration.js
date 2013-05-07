Ext.define('EgoMasks.model.Integration', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [{
            name: 'id', 
            type: 'string'
        },{
            name: 'title', 
            type: 'string'
        },{
            name: 'description', 
            type: 'string'
        },{
            name: 'comment', 
            type: 'string'
        },{
            name: 'feedback', 
            type: 'string'
        },{
            name: 'timestamp', 
            type: 'int',
            defaultValue: 0
        },{
            name: 'duration', 
            type: 'int',
            defaultValue: 0
        }],
        proxy: {
            type: 'rest',
            url: baseUrl + '/integrations',
            reader: {
                type: 'json', 
                rootProperty: 'integrations'
            }, 
            withCredentials: true
        }
    // Contient les categories de masks, qui eux contiennent les masks 
    // Integration -n n- Masks afficher la duree et ce qu'il faut pour les stats
    // Utiliser DB: http://www.mongodb.org/
    // mongo staff.mongohq.com:10045/app5749441 -u heroku -p PremaShanti
    }
});