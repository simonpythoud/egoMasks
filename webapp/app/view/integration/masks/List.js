Ext.define("EgoMasks.view.integration.masks.List", {
    extend: 'Ext.Panel',
    xtype: 'masksList',
    requires: [
        'Ext.Label'
    ],
    config: {
        layout: 'vbox',
        cls: 'masksList ',
        //scrollable: isMobile

        // Items are dynamically created in Integration Controller
    }
});
