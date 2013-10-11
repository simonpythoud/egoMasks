Ext.define('EgoMasks.controller.Orientation', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {},
        control: {
            'viewport': {
                orientationchange: function(viewport, orientation, width, height){
                    console.log('orientationchange: ' + orientation + '  w: ' + width + '  h: ' + height);
                    this.changeOrientation(orientation);
                }
            }
        }
    },

    launch: function(app) {
        this.changeOrientation(Ext.Viewport.getOrientation());
    },

    changeOrientation: function(orientation){
        if(orientation == 'portrait'){
            this.setPortraitOrientation();
        } else {
            this.setLandscapeOrientation();
        }
    }, 

    setPortraitOrientation: function(){
        var overviewInnerPanel = this.getOverviewInnerPanel();
        if(!overviewInnerPanel.hasCls('x-vertical')){
            overviewInnerPanel.addCls('x-vertical');
        }
    },
    setLandscapeOrientation: function(){
        var overviewInnerPanel = this.getOverviewInnerPanel();
        if(overviewInnerPanel.hasCls('x-vertical')){
            overviewInnerPanel.removeCls('x-vertical');
        }
    },

    getOverviewInnerPanel: function(){
        return this.getOverview().element.down('.x-dock-body .x-inner');
    }
});