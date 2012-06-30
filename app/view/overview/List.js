Ext.define('EgoMasks.view.overview.List', {
    extend: 'Ext.List',
    xtype: 'overviewlist',
    requires: [
    'Ext.field.Search',
    'Ext.plugin.PullRefreshFull'
    ],

    config: {
        title: 'Projects',
        cls: 'x-project-list',
        
        items: [{
            xtype: 'toolbar',
            ui: 'neutral',
            items: [{
                xtype: 'searchfield',
                flex: 1,
                placeHolder:'Search Projects',
                id: 'listProjectSearch'
            },{
                xtype: 'button',
                id: 'sortProjectButton',
                iconCls: 'sign_updown',
                iconMask: true
            },{
                xtype: 'button',
                id: 'showRestoreProjectButton',
                iconCls: 'time_repeat',
                iconMask: true
            }]
        }],

        store: null,
        
        plugins: [{
            xclass: 'Ext.plugin.PullRefreshFull',
            pullRefreshText: 'Pull down to update projects list'
        }],
              
        itemTpl: [
        '<div class="project_title ellipsis">{title}</div> <div class="project_updated">{elapsedTime}</div>',
        '<div class="deleteable"></div>',
        '<div class="project_flag flag_{flag}"></div>' //add the class for the flag (flag_red)
        ].join('')
    }
});
