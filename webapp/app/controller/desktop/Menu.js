Ext.define('EgoMasks.controller.desktop.Menu', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            menuButton: '#titleBar button#showMenu',
            desktopMenu: '#menu', 
            optionsButton: 'button#options'
        },
        control: {
            menuButton: {
                tap: 'toggleMenu'
            },
            optionsButton: {
                tap: 'showOptionsMenu'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
    }, 

    toggleMenu: function(btn, e){
        var menu = this.getDesktopMenu();
        menu.toggleCls('reduced');
    }, 

    showOptionsMenu: function(btn, e){
        if(!this.optionsPanel)this.optionsPanel = Ext.Viewport.add({xtype:'options'});
        this.optionsPanel.showBy(btn);   
    }
});