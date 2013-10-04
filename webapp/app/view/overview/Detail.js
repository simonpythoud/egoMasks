Ext.define('EgoMasks.view.overview.Detail', {
    extend: 'Ext.Panel',
    xtype: 'detail',
    requires: [],

    config: {
        // Make it modal so you can click the mask to hide the overlay
        modal: true,
        hideOnMaskTap: true,
        centered: true,

        // Set the width and height of the panel
        width: 400, //isPhone ? '95%' : 400,
        height: 300, //isPhone ? '70%' : 300,
        
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        
        items: [{
                xtype: 'titlebar',
                title: 'Detail of the integration',
                docked: 'top'
            },{
                id: 'htmlArea',
                setStyleHtmlContent: true
            }]
    }
});
