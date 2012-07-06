Ext.define('EgoMasks.store.Integrations', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'EgoMasks.model.Integration', 
        // Example data for integration
        data: [{
            id: 1,
            title: 'Rejected by my friends',
            description: 'I was at the cinema and my best friend said he didn\'t want to the movie with me... I felt sad about it....',
            timestamp: (new Date().valueOf() - 7000000) ,
            duration: 234567
        },{
            id: 2,
            title: 'Abandon by my parents',
            description: '',
            timestamp: (new Date().valueOf() - 3200000) ,
            duration: 33344
        },{
            id: 3,
            title: 'Motorcycle is crashed',
            description: 'I am attached to it and I cannot use it anymore. Need to look at it to free of my attachement.',
            timestamp: (new Date().valueOf() - 1600000) ,
            duration: 60000
        }]
    }
});