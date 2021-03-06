Ext.define('EgoMasks.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            mainPanel: '#mainContainer',
            integrationPanel: '#integration',
            historyPanel: 'history',
            documentationPanel: 'documentation',
            statisticsPanel: 'statistics',
            openOverviewBtn: 'button#openOverview',
            openNewIntegrationBtn: 'button#openNewIntegration',
            openHistoryBtn: 'button#openHistory',
            openDocumentationBtn: 'button#openDocumentation',
            openStatisticsBtn: 'button#openStatistics',
            backFromIntegrationBtn: '#integration button#backHome',
            backFromDocumentationBtn: 'documentation button[ui=back]',
            backFromStatisticsBtn: 'statistics button[ui=back]', 
            backFromHistoryBtn: 'history button[ui=back]', 
            enButton: '#enButton', 
            frButton: '#frButton', 
            esButton: '#esButton'
        },
        control: {
            openNewIntegrationBtn: {
                tap: 'gotoIntegration'
            }, 
            openOverviewBtn: {
                tap: 'gotoOverview'
            }, 
            openHistoryBtn: {
                tap: 'gotoHistory'
            },
            openDocumentationBtn: {
                tap: 'gotoDocumentation'
            }, 
            openStatisticsBtn: {
                tap: 'gotoStatistics'
            }, 
            backFromIntegrationBtn: {
                tap: 'gotoOverview'
            }, 
            backFromHistoryBtn: {
                tap: 'gotoOverview'
            },
            backFromDocumentationBtn: {
                tap: 'gotoOverview'
            }, 
            backFromStatisticsBtn: {
                tap: 'gotoOverview'
            },
            enButton: {
                tap: function() {
                    Ux.locale.Manager.updateLocale('en');
                }
            },
            frButton: {
                tap: function() {
                    Ux.locale.Manager.updateLocale('fr');
                }
            },
            esButton: {
                tap: function() {
                    Ux.locale.Manager.updateLocale('es');
                }
            }
        }
    },

    init: function(){
        // Set the base URL for the server requests
        var baseUrl = 'http://egomasks.herokuapp.com'; //'http://localhost:3000'; //
        
        var maskIntegrationProxy = EgoMasks.model.MaskIntegration.getProxy();
        maskIntegrationProxy.setUrl(
            baseUrl + maskIntegrationProxy.getUrl()
        );

        var integrationProxy = EgoMasks.model.Integration.getProxy();
        integrationProxy.setUrl(
            baseUrl + integrationProxy.getUrl()
        );

        Ext.getStore('Integrations').load();
    },
    
    launch: function(app) {
        EgoMasks.mainCtrl = this;

        this.main = this.getMainPanel();
    }, 

    gotoOverview: function(btn, event, e){
        this.main.setActiveItem(EgoMasks.activeProfile + '-overview');
    },
    
    gotoIntegration: function(btn, event, e){
        this.main.setActiveItem(EgoMasks.activeProfile + '-integration');
    },
    
    gotoHistory: function(btn, event, e){
        this.main.setActiveItem('history');
    },
    
    gotoDocumentation: function(btn, event, e){
        this.main.setActiveItem('documentation');
    },
    
    gotoStatistics: function(btn, event, e){
        this.main.setActiveItem('statistics');
    },
    
    gotoDocument: function(){
        this.main.setActiveItem('document');
    }, 

    // Not yet used but could be useful
    gotoXtype: function(xtype){
        this.main.setActiveItem(xtype);
    }
});