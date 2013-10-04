Ext.define('EgoMasks.profile.Phone', {
    extend: 'Ext.app.Profile',
    
    //define any additional classes your Profile needs here
    config: {
        views: ['Main'],
        models: [],
        stores: [],
        controllers: []
    },
    
    //this profile will be activated if we detect we're running on a Phone
    isActive: function(app) {
        return Ext.os.is.Phone;
    }, 

    // Not mandatory to keep the launch function
    launch: function(){
        // Initialize the main view
        Ext.Viewport.add(Ext.create('EgoMasks.view.phone.Main'));
    }
});