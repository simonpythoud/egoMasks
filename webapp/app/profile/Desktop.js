Ext.define('EgoMasks.profile.Desktop', {
    extend: 'Ext.app.Profile',
    
    //define any additional classes your Profile needs here
    config: {
        views: ['Main'],
        models: [],
        stores: [],
        controllers: ['Menu']
    },
    
    //this profile will be activated if we detect we're running on a Desktop
    isActive: function(app) {
        return Ext.os.is.Desktop;
    }, 

    // Not mandatory to keep the launch function
    launch: function(){

        // Initialize the main desktop view
        Ext.Viewport.add(Ext.create('EgoMasks.view.desktop.Main'));

    }
});