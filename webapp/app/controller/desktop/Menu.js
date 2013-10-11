Ext.define('EgoMasks.controller.desktop.Menu', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            menuButton: '#titleBar button#showMenu',
            menuButtons: '#menu button',
            desktopMenu: '#menu', 
            optionsButton: 'button#options'
        },
        control: {
            menuButton: {
                tap: 'toggleMenu'
            },
            menuButtons: {
                tap: 'setActiveButton'
            },
            optionsButton: {
                tap: 'showOptionsMenu'
            }
        }
    },

    toggleMenu: function(btn, e){
        var menu = this.getDesktopMenu();
        menu.toggleCls('reduced');
    }, 

    showOptionsMenu: function(btn, e){
        if(!this.optionsPanel)this.optionsPanel = Ext.Viewport.add({xtype:'options'});
        this.optionsPanel.showBy(btn);   
    }, 

    setActiveButton: function(btn, e){
        // remove cls on previous selected button
        if(this.activeButton){
            this.activeButton.removeCls('active');
        }

        // set the new active button
        (this.activeButton = btn).addCls('active');
    }
});