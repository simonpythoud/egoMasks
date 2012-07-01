Ext.define("EgoMasks.view.integration.Masks", {
    extend: 'Ext.Panel',
    xtype: 'integrationmasks',
    requires: [
    'Ext.TitleBar'
    ],
    config: {
        layout: 'vbox',
        defaults: {
            xtype: 'button',
            flex: 1,
            defaults: {
                xtype: 'button',
                flex: 1
            }
        },
        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'Integration'
        },{ 
            xtype: 'label', 
            html: 'Denials'
        },{
            xtype: 'container', 
            layout: 'hbox',
            items: [{ 
                text: 'Fear'
            }, { 
                text: 'Shame'
            },{ 
                text: 'Pride'
            }]
        },{ 
            text: 'Go to Emotions'
        },{ 
            xtype: 'label', 
            html: 'Emotions'
        },{
            xtype: 'container', 
            layout: 'hbox',
            items: [{  
                text: 'Abandonment'
            }, { 
                text: 'Rejection'
            },{ 
                text: 'Guilt'
            }]
        },{ 
            text: 'Go to Roles'
        },{ 
            xtype: 'label', 
            html: 'Roles'
        },{
            xtype: 'container', 
            layout: 'hbox',
            items: [{ 
                text: 'Persecutor'
            }, { 
                text: 'Savior'
            },{ 
                text: 'Victim'
            }]
        },{ 
            text: 'Go to Tools'
        },{ 
            xtype: 'label', 
            html: 'Tools'
        },{
            xtype: 'container', 
            layout: 'hbox',
            items: [{ 
                text: 'Power'
            }, { 
                text: 'Control'
            },{ 
                text: 'Manipulation'
            }]
        },{ 
            text: 'Go to Expectations'
        },{ 
            xtype: 'label', 
            html: 'Expectations'
        },{
            xtype: 'container', 
            layout: 'hbox',
            items: [{ 
                text: 'Egocentrism'
            }, { 
                text: 'False Hope'
            },{ 
                text: 'Over Certainty'
            }]
        },{ 
            text: 'Go to Needs'
        },{ 
            xtype: 'label', 
            html: 'Needs'
        },{
            xtype: 'container', 
            layout: 'hbox',
            items: [{ 
                text: 'Obtain'
            }, { 
                text: 'Accumulate'
            },{ 
                text: 'Attain'
            }]
        },{ 
            text: 'Go to Attachements'
        },{ 
            xtype: 'label', 
            html: 'Attachements'
        },{
            xtype: 'container', 
            layout: 'hbox',
            items: [{ 
                text: 'Physical'
            }, { 
                text: 'Emotional'
            },{ 
                text: 'Mental'
            }]
        },{ 
            text: 'Go to Happy Faces'
        }]
    }
});
