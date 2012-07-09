Ext.define('EgoMasks.controller.Documentation', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            documentationPanel: 'documentation'
        },
        control: {
            'documentation button#openIntroductionToEgo': {
                tap: 'openIntroductionToEgo'
            }, 
            'documentation button#openTreeOfIntegration': {
                tap: 'openTreeOfIntegration'
            }, 
            'documentation button#openEmotionalIntegration': {
                tap: 'openEmotionalIntegration'
            }, 
            'documentation button#openEgoVideo': {
                tap: 'openEgoVideo'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        this.documentation = this.getDocumentationPanel();
        
        //TODO: Can be used as to open inner panel with pdf and video
    },
    
    openIntroductionToEgo: function(btn, event, e){
        this.openPDF('21 Masks of the Ego');
    },
    
    openTreeOfIntegration: function(btn, event, e){
        this.openPDF('Ego_Masks');
    },
    
    openEmotionalIntegration: function(btn, event, e){
        this.openPDF('Emotional Integration');
    },
    
    openEgoVideo: function(btn, event, e){
        this.openYoutube('tV3bYKHV3Eo');
    },
    
    openPDF: function(filename){
        window.open('resources/docs/'+filename+'.pdf');
    },
    
    openYoutube: function(videoID){
        window.open('http://www.youtube.com/watch?v=' + videoID);
    }
  
});