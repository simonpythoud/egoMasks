Ext.define("EgoMasks.view.integration.Masks", {
    extend: 'Ext.Panel',
    xtype: 'masks',
    requires: [
        'Ext.TitleBar',
        'Ext.Label'
    ],
    config: {
        layout: 'vbox',
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        defaults: {
            defaults: {
                defaults: {
                    xtype: 'button',
                    flex: 1
                }
            }
        },
        items: [{
                docked: 'top',
                xtype: 'titlebar',
                title: 'Integration'
            },{ 
                cls: 'masksGroup',
                items: [{ 
                        xtype: 'label', 
                        html: 'Denials'
                    },{
                        layout: 'hbox',
                        items: [{ 
                                text: 'Fear'
                            }, { 
                                text: 'Shame'
                            },{ 
                                text: 'Pride'
                            }]
                    },{ 
                        xtype: 'button',
                        text: 'Go to Emotions'
                    }]
            },{ 
                cls: 'masksGroup',
                items: [{ 
                        xtype: 'label', 
                        html: 'Emotions'
                    },{
                        layout: 'hbox',
                        items: [{  
                                text: 'Abandonment'
                            }, { 
                                text: 'Rejection'
                            },{ 
                                text: 'Guilt'
                            }]
                    },{ 
                        xtype: 'button',
                        text: 'Go to Roles'
                    }]
            },{ 
                cls: 'masksGroup',
                items: [{ 
                        xtype: 'label', 
                        html: 'Roles'
                    },{
                        layout: 'hbox',
                        items: [{ 
                                text: 'Persecutor'
                            }, { 
                                text: 'Savior'
                            },{ 
                                text: 'Victim'
                            }]
                    },{ 
                        xtype: 'button',
                        text: 'Go to Tools'
                    }]
            },{ 
                cls: 'masksGroup',
                items: [{ 
                        xtype: 'label', 
                        html: 'Tools'
                    },{
                        layout: 'hbox',
                        items: [{ 
                                text: 'Power'
                            }, { 
                                text: 'Control'
                            },{ 
                                text: 'Manipulation'
                            }]
                    },{ 
                        xtype: 'button',
                        text: 'Go to Expectations'
                    }]
            },{ 
                cls: 'masksGroup',
                items: [{ 
                        xtype: 'label', 
                        html: 'Expectations'
                    },{
                        layout: 'hbox',
                        items: [{ 
                                text: 'Egocentrism'
                            }, { 
                                text: 'False Hope'
                            },{ 
                                text: 'Over Certainty'
                            }]
                    },{ 
                        xtype: 'button',
                        text: 'Go to Needs'
                    }]
            },{ 
                cls: 'masksGroup',
                items: [{ 
                        xtype: 'label', 
                        html: 'Needs'
                    },{
                        layout: 'hbox',
                        items: [{ 
                                text: 'Obtain'
                            }, { 
                                text: 'Accumulate'
                            },{ 
                                text: 'Attain'
                            }]
                    },{ 
                        xtype: 'button',
                        text: 'Go to Attachements'
                    }]
            },{ 
                cls: 'masksGroup',
                items: [{ 
                        xtype: 'label', 
                        html: 'Attachements'
                    },{
                        layout: 'hbox',
                        items: [{ 
                                text: 'Physical'
                            }, { 
                                text: 'Emotional'
                            },{ 
                                text: 'Mental'
                            }]
                    }]
            },{ 
                xtype: 'button',
                text: 'Go to Happy Faces',
                ui: 'action',
                id: 'enjoyIntegration', 
                docked: 'bottom'
            }]
    }
});
