Ext.define('EgoMasks.view.overview.List', {
    extend: 'Ext.List',
    xtype: 'overviewlist',
    requires: [
    ],

    config: {
        cls: 'overview-list',

        store: null,
        
        emptyText: 'The list of your integration will be displayed here.',
        deferEmptyText: false,
        
        itemTpl: [
        '<div class="integration_title ellipsis">{title}</div>',
        '<div class="integration_time">{elapsedTime}</div>',
        ].join('')
    }
});