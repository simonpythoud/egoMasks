Ext.define('EgoMasks.view.Options', {
    extend: 'Ext.Panel',
    xtype: 'options',
    requires: [
    ],
    config: {
                 // We give it a left and top property to make it floating by default
        centered: true,

        // Make it modal so you can click the mask to hide the overlay
        modal: true,
        hideOnMaskTap: true,

        // Make it hidden by default
        hidden: true,

        // Set the width and height of the panel
        width: isPhone ? '90%' : 200,
        height: isPhone ? '50%' : 200,
        
        // Style Html to improve styles
        styleHtmlContent: true,

        // Style the content and make it scrollable
        scrollable: false,
        items: [{
            items: [{
                locales: { html: 'Options.defaultLanguage' }
            }, {
                id: 'enButton',
                xtype: 'button', 
                text: 'EN'
            },{
                id: 'frButton',
                xtype: 'button',
                text: 'FR'
            },{
                id: 'esButton',
                xtype: 'button',
                text: 'ES'
            }]
        }, {
            items: [{
                margin: '20px 0',
                locales: { html: 'Options.version' }
            }]
        }]
    }
});
