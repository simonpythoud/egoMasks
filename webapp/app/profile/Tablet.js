Ext.define('EgoMasks.profile.Tablet', {
    extend: 'Ext.app.Profile',
    
    //define any additional classes your Profile needs here
    config: {
        views: ['Main'],
        models: [],
        stores: [],
        controllers: []
    },
    
    //this profile will be activated if we detect we're running on a Tablet
    isActive: function(app) {
        var isActive = Ext.os.is.Tablet;
        if(isActive) EgoMasks.activeProfile = 'tablet';
        return isActive;
    }, 

    // Not mandatory to keep the launch function
    launch: function(){
        // Initialize the main view
        Ext.Viewport.add(Ext.create('EgoMasks.view.tablet.Main'));
    }
});