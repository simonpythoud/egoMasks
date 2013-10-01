Ext.define("EgoMasks.view.LoginPanel", {
    extend: 'Ext.Panel',
    xtype: 'loginPanel',
    requires: [
    'Ext.TitleBar'
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
        width: isPhone ? '90%' : 550,
        height: isPhone ? '80%' : 300,

        // Style the content and make it scrollable
        scrollable: true,
        layout: 'vbox',
        items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Login'
            },{
            xtype: 'formpanel',
            flex: 1,
            items: [{
                xtype: 'fieldset', 
                instructions: 'Enter your login information from unified path or click on create new account',
                items: [{
                    xtype: 'textfield',
                    name: 'username',
                    label: 'Username',
                    placeHolder: 'Your username',
                    required: true
                },{
                    xtype: 'passwordfield',
                    name: 'password',
                    label: 'Password',
                    placeHolder: 'Password goes here',
                    required: true
                }]
            }]}, {
            docked: 'bottom',
            layout: 'hbox',
            items: [{
                flex: 1, 
                xtype: 'button',
                ui: 'confirm',
                text: 'Create Account',
                id: 'createAccount'
            },{
                flex: 1,
                xtype: 'button',
                ui: 'action',
                text: 'Sign in',
                id: 'signin'
            }]
        }]
    }
});
