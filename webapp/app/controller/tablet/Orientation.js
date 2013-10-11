Ext.define('EgoMasks.controller.tablet.Orientation', {
    extend: 'EgoMasks.controller.Orientation',
    
    config: {
        refs: {
            overview: '#overview'
        }
    },

    launch: function(app) {
        this.callParent();
    }
});