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
            text: 'Introduction to the Ego',
            id: 'openIntroductionToEgo'
        },{
            xtype: 'button',
            text: 'Tree of integration',
            id: 'openTreeOfIntegration'
        },{
            xtype: 'button',
            text: 'Emotional Integration',
            id: 'openEmotionalIntegration'
        },{
            xtype: 'button',
            text: 'Video: EGO Roadmap (Youtube)',
            id: 'openEgoVideo'
        }]
    }
});
