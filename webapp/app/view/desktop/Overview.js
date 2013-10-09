Ext.define("EgoMasks.view.desktop.Overview", {
    extend: 'Ext.Panel',
    xtype: 'desktop-overview', 
    requires: [
    'EgoMasks.view.overview.List',
    'EgoMasks.view.overview.Detail'
    ],
    config: {
        id: 'overview',
        //styleHtmlContent: true,
        //scrollable: false,
        layout: 'vbox',
        items:  [{
            flex: 1,
            layout: 'vbox',
            items: [{
                xtype: 'titlebar',
                locales: {title: 'Overview.waitingList'}
            },{
                flex: 1,
                html: 'The waiting list items comes here... '
            }]
        },{
            flex: 2,  
            layout: 'vbox',  
            items: [{
                xtype: 'titlebar',
                locales: {title: 'Overview.previousIntegration'}
            },{
                flex: 1,
                xtype: 'overviewlist', 
            }]
            
        }]
    }
});
