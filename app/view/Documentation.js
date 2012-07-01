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
            title: 'Documentation'
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
