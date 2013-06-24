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
                id: 'backHome',
                text: 'Back',
                align: 'left'
            }]
        },{
            xtype: 'fieldset', 
            title: 'Integration information',
            instructions: 'Normal mode provide a list of the 21 mask that you can select. <br/>Guided mode provide a step by step integration of the mask per category.',
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
            },        {
            xtype: 'radiofield',
            name : 'mode',
            value: 'normal',
            label: 'Normal Integration',
            checked: true
        },        {
            xtype: 'radiofield',
            name : 'mode',
            value: 'guided',
            label: 'Guided Integration'
        }]
        },{
            xtype: 'button',
            ui: 'action',
            text: 'Start the integration',
            id: 'startIntegration'
        }]
    }
});
