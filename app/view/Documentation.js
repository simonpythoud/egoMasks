Ext.define("EgoMasks.view.Documentation", {
    extend: 'Ext.Panel',
    xtype: 'documentation',
    requires: [
    'Ext.TitleBar'
    ],
    config: {
        styleHtmlContent: true,
        scrollable: true,

        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'Documentation',
            items: [{
                ui: 'back',
                text: 'Back',
                align: 'left'
            }]
        },{
            html: 'Learn how to practice the Emotional Integration'
        },{
            xtype: 'button',
            text: 'Introduction (PDF)'
        },{
            xtype: 'button',
            text: 'Tree of integration (PDF)'
        },{
            xtype: 'button',
            text: 'Manual: Secret of the Ego (PDF)'
        },{
            xtype: 'button',
            text: 'Video: EGO Roadmap (Youtube)'
        }]
    }
});
