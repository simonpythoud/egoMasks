Ext.define('EgoMasks.store.MaskGroups', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'EgoMasks.model.MaskGroup', 
        data: [{
            id: 0,
            name: 'Denials',
            description: ''
        },{
            id: 1,
            name: 'Emotions',
            description: ''
        },{
            id: 2,
            name: 'Roles',
            description: ''
        },{
            id: 3,
            name: 'Tools',
            description: ''
        },{
            id: 4,
            name: 'Expectations',
            description: ''
        },{
            id: 5,
            name: 'Needs',
            description: ''
        },{
            id: 6,
            name: 'Attachements',
            description: ''
        }]
    }
});