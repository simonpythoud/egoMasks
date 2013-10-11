Ext.define("EgoMasks.view.phone.integration.masks.List", {
    extend: 'Ext.Panel',
    xtype: 'phone-masksList',
    requires: [
        'Ext.Label'
    ],
    config: {
        id: 'masksList',
        layout: 'vbox',
        cls: 'masksList ',
        scrollable: true

        // Items are dynamically created in Integration Controller
    }
});
