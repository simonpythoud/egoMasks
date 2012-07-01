Ext.define('EgoMasks.view.overview.List', {
    extend: 'Ext.List',
    xtype: 'overviewlist',
    requires: [
    ],

    config: {
        cls: 'overview-list',

        store: null,
        
        itemTpl: [
        '<div class="integration_title ellipsis">{title}</div>',
        '<div class="integration_time">{elapsedTime}</div>',
        ].join('')
    }
});
