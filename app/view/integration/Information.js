Ext.define("EgoMasks.view.integration.Information", {
    xtype: 'integrationinformation',
    extend: 'Ext.Panel',
    requires: [
    'Ext.TitleBar',
    ],
    config: {
        items: [{
            title: 'Welcome',
            iconCls: 'home',
            styleHtmlContent: true,
            scrollable: true,
            docked: 'top',
            xtype: 'titlebar',
            html: [
            "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
            "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
            "and refresh to change what's rendered here."
            ].join("")
        },{
            title: 'Get Started',
            iconCls: 'action',
            docked: 'top',
            xtype: 'titlebar'
        }]
    }
});
