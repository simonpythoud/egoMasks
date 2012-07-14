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
        width: (Ext.os.deviceType == 'Phone') ? '95%' : 300,
        height: (Ext.os.deviceType == 'Phone') ? '70%' : 200,
        
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
