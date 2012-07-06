Ext.define('EgoMasks.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            mainPanel: 'mainview',
            overviewPanel: 'overview',
            integrationPanel: 'integration',
            documentationPanel: 'documentation',
            statisticsPanel: 'statistics',
            openNewIntegrationBtn: 'overview button#openNewIntegration',
            openDocumentationBtn: 'overview button#openDocumentation',
            openStatisticsBtn: 'overview button#openStatistics',
            backFromIntegrationBtn: 'integration button[ui=back]',
            backFromDocumentationBtn: 'documentation button[ui=back]',
            backFromStatisticsBtn: 'statistics button[ui=back]'
        },
        control: {
            openNewIntegrationBtn: {
                tap: 'gotoIntegration'
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
            backFromDocumentationBtn: {
                tap: 'gotoOverview'
            }, 
            backFromStatisticsBtn: {
                tap: 'gotoOverview'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        this.main = this.getMainPanel();
        this.overview = this.getOverviewPanel();
        this.integration = this.getIntegrationPanel();
        this.documentation = this.getDocumentationPanel();
        this.statistics = this.getStatisticsPanel();
    }, 
    
    gotoOverview: function(btn, event, e){
        this.main.setActiveItem(this.overview);
    },
    
    gotoIntegration: function(btn, event, e){
        this.main.setActiveItem(this.integration);
    },
    
    gotoDocumentation: function(btn, event, e){
        this.main.setActiveItem(this.documentation);
    },
    
    gotoStatistics: function(btn, event, e){
        this.main.setActiveItem(this.statistics);
    }
});