Ext.define("EgoMasks.view.LoginBox", {
    extend: 'Ext.Panel',
    xtype: 'loginBox',
    config: {
         // We give it a left and top property to make it floating by default
        centered: true,

        // Make it modal so you can click the mask to hide the overlay
        modal: true,
        hideOnMaskTap: true,

        // Make it hidden by default
        hidden: true,

        // Set the width and height of the panel
        width: 250, //isPhone ? '90%' : 250,
        height: 100, //isPhone ? '40%' : 100,
        
        // Style Html to improve styles
        styleHtmlContent: true,

        // Style the content and make it scrollable
        scrollable: false,
        layout: 'vbox',
        items: [{
            xtype: 'button',
            ui: 'decline',
            text: 'G+ Signin',
            id: 'gPlusSignin'
        },{
            xtype: 'button',
            ui: 'action',
            text: 'Facebook Signin',
            align: 'left',
            id: 'fbSignin'
        },{
            xtype: 'button',
            ui: 'action',
            hidden: true,
            text: 'Logout',
            id: 'logout'
        }]
    }
});
