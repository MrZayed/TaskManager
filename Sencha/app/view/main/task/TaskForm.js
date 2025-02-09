Ext.define('PriceListApp.view.task.TaskForm', {
    extend: 'Ext.form.Panel',
    xtype: 'taskForm',
    controller: "taskController",
    title: 'Task Info',
    layout: 'vbox',
    reference: 'taskForm',

    items: [
        {
            xtype: 'fieldset',
            title: 'Task Information',
            layout: 'hbox',
            width: 650,
            items: [
                {
                    xtype: 'panel',
                    layout: 'anchor',
                    margin: '5 20',
                    defaults: { anchor: '100%', xtype: 'textfield', margin: '5' },
                    items: [
                        { fieldLabel: 'Task Name', name: 'tsk_name', allowBlank: false },
                        { xtype: 'textarea', fieldLabel: 'Description', name: 'description', height: 50 },
                        {
                            xtype: 'combo',
                            fieldLabel: 'Category',
                            name: 'cat_id',  
                            displayField: 'catName',
                            valueField: 'catId',
                            store: { type: 'taskCategoryStore' },
                            queryMode: 'local',
                            forceSelection: true,
                            allowBlank: false
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'anchor',
                    defaults: { anchor: '100%', xtype: 'textfield', margin: '5' },
                    items: [
                        {
                            xtype: 'combo',
                            fieldLabel: 'Employee',
                            name: 'emp_id',
                            store: { type: 'employeeStore' },
                            displayField: 'emp_name',
                            valueField: 'emp_id',
                            queryMode: 'local',
                            allowBlank: false
                        },
                        { xtype: 'datefield', fieldLabel: 'Start Date', name: 'start_date', format: 'Y-m-d' },
                        { xtype: 'datefield', fieldLabel: 'End Date', name: 'end_date', format: 'Y-m-d', allowBlank: false },
                        { xtype: 'datefield', fieldLabel: 'Due Date', name: 'due_date', format: 'Y-m-d' }
                    ]
                }
            ]
        }
    ],

    buttons: [
        {
            text: 'Save Task',
            handler: 'saveTask' 
        }
    ]
});
