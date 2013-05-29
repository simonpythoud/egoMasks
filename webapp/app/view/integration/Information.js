Ext.define("EgoMasks.view.integration.Information", {
    extend: 'Ext.form.Panel',
    xtype: 'information',
    requires: [
    'Ext.TitleBar',
    'Ext.form.FieldSet', 
    'Ext.field.DatePicker'
    ],
    config: {
        items: [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'New integration',
            items: [{
                ui: 'back',
                text: 'Back',
                align: 'left'
            }]
        },{
            xtype: 'fieldset', 
            title: 'Integration information',
            instructions: 'Please enter the information above.',
            items: [{
                xtype: 'textfield',
                name: 'title',
                label: 'Title',
                placeHolder: 'Enter the title',
                autoCapitalize: true, 
                required: true
            },{
                xtype: 'textareafield',
                name: 'description',
                label: 'Description',
                placeHolder: 'Enter the description of what you want to integrate (optional)',
                autoCapitalize: true
            },{
                xtype: 'datepickerfield',
                name: 'timestamp',
                label: 'Date',
                value: new Date()
            }]
        },{
            xtype: 'button',
            ui: 'action',
            text: 'Start the integration',
            id: 'startIntegration'
        }]
    }
});
