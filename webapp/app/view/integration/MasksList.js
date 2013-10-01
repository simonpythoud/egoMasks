Ext.define("EgoMasks.view.integration.MasksList", {
    extend: 'Ext.Panel',
    xtype: 'masksList',
    requires: [
        'Ext.Label'
    ],
    config: {
        layout: 'vbox',
        cls: 'masksList ' + scrollCls,
        scrollable: isMobile

        // Items are dynamically created in Integration Controller
    }
});
