Ext.define("EgoMasks.view.phone.integration.masks.List", {
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
