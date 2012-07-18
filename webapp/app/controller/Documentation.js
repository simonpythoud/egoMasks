Ext.define('EgoMasks.controller.Documentation', {
    extend: 'Ext.app.Controller',
    requires: [
    'EgoMasks.store.Documents',
    'EgoMasks.view.documentation.Document'
    ],
    
    config: {
        refs: {
            documentationPanel: 'documentation',
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
            }, 
            'document button#downloadOriginal': {
                tap: 'downloadOriginal'
            }, 
            'document button[ui=back]': {
                tap: 'closeDocument'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        this.documentation = this.getDocumentationPanel();
        this.document = Ext.create('EgoMasks.view.documentation.Document');
        this.documentsStore = Ext.create('EgoMasks.store.Documents');
    },
    
    openIntroductionToEgo: function(btn, event, e){
        this.openDocument(0);
    },
    
    openTreeOfIntegration: function(btn, event, e){
        this.openDocument(1);
    },
    
    openEmotionalIntegration: function(btn, event, e){
        this.openDocument(2);
    },
    
    openEgoVideo: function(btn, event, e){
        this.openYoutube('tV3bYKHV3Eo');
    },
    
    openDocument: function(documentID){
        this.selectedDocument = this.documentsStore.getById(documentID);
        this.document.down('titlebar').setTitle(this.selectedDocument.get('title'));
        this.document.setHtml(this.selectedDocument.get('html'));
        this.document.show();
    },
    
    closeDocument: function(){
        this.selectedDocument = null;
        this.document.hide();
    },
    
    downloadOriginal: function(){
        var filename = this.selectedDocument.get('filename');
        var filetype = this.selectedDocument.get('filetype');
        window.open('resources/docs/'+filename+'.'+filetype);
    },
    
    openYoutube: function(videoID){
        window.open('http://www.youtube.com/watch?v=' + videoID);
    }
  
});