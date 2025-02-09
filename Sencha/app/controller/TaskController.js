Ext.define('PriceListApp.controller.TaskController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.taskController',

    // Double-click to edit task
    onGridItemDblClick: function (grid, record) {
        let formWindow = Ext.getCmp('taskFormWindow');

        // Create the window if it doesn't exist
        if (!formWindow) {
            formWindow = Ext.create('Ext.window.Window', {
                id: 'taskFormWindow',
                title: 'Edit Task',
                modal: true,
                layout: 'fit',
                width: 400,
                items: [{
                    xtype: 'form',
                    id: 'taskForm',
                    bodyPadding: 10,
                    defaults: {
                        anchor: '100%',
                        allowBlank: false
                    },
                    items: [
                        { xtype: 'textfield', name: 'tsk_name', fieldLabel: 'Task Name' },
                        { xtype: 'textfield', name: 'description', fieldLabel: 'Description' },
                        { xtype: 'datefield', name: 'start_date', fieldLabel: 'Start Date', format: 'Y-m-d' },
                        { xtype: 'datefield', name: 'end_date', fieldLabel: 'End Date', format: 'Y-m-d' },
                        { xtype: 'datefield', name: 'due_date', fieldLabel: 'Due Date', format: 'Y-m-d' },
                        {
                            xtype: 'combo',
                            fieldLabel: 'Category',
                            name: 'catId',
                            displayField: 'catName',
                            valueField: 'catId',
                            store: { type: 'taskCategoryStore' },
                            queryMode: 'local',
                            forceSelection: true,
                            value: record.get('cat_id') // Set the selected category
                        }
                    ],
                    buttons: [
                        {
                            text: 'Save',
                            formBind: true,
                            handler: function () {
                                const form = this.up('form').getForm();
                                if (form.isValid()) {
                                    const taskData = form.getValues();
                                    Ext.Ajax.request({
                                        url: 'http://localhost:8080/task-details/' + record.get('tsk_id'),
                                        method: 'PUT',
                                        jsonData: taskData,
                                        success: function () {
                                            Ext.Msg.alert('Success', 'Task updated successfully.');
                                            formWindow.close();
                                            grid.getStore().reload();
                                        },
                                        failure: function () {
                                            Ext.Msg.alert('Error', 'Failed to update task.');
                                        }
                                    });
                                }
                            }
                        }
                    ]
                }]
            });
        }

        formWindow.show();
        const formComponent = Ext.getCmp('taskForm');

        if (formComponent) {
            formComponent.getForm().loadRecord(record);
        } else {
            Ext.Msg.alert('Error', 'Task form not found.');
        }
    },

    saveTask: function (btn) {
        const form = btn.up('form').getForm();
        if (form.isValid()) {
            let formData = form.getValues();
    
            // Ensure correct date format
            formData.start_date = Ext.Date.format(new Date(formData.start_date), 'Y-m-d');
            formData.end_date = Ext.Date.format(new Date(formData.end_date), 'Y-m-d');
            formData.due_date = Ext.Date.format(new Date(formData.due_date), 'Y-m-d');
    
            // Convert category name to category ID if needed
            if (formData.cat_name) {
                formData.cat_id = formData.cat_name;
                delete formData.cat_name;  // Remove unnecessary field
            }
    
            Ext.Ajax.request({
                url: 'http://localhost:8080/task-details',
                method: 'POST',
                jsonData: formData,
                success: function () {
                    Ext.Msg.alert('Success', 'Task saved successfully!');
                    form.reset();
                },
                failure: function () {
                    Ext.Msg.alert('Error', 'Failed to save task.');
                }
            });
        }
    }
    ,

    deleteTask: function (grid, rowIndex, colIndex) {
    const store = grid.getStore();
    const record = store.getAt(rowIndex);

    Ext.Msg.confirm('Confirm Deletion', 'Are you sure you want to delete this task?', function (btn) {
        if (btn === 'yes') {
            Ext.Ajax.request({
                url: `http://localhost:8080/task-details/${record.get('tsk_id')}`,
                method: 'DELETE',
                success: function () {
                    Ext.Msg.alert('Success', 'Task deleted successfully.');
                    store.reload(); // Reload the grid store to reflect changes
                },
                failure: function () {
                    Ext.Msg.alert('Error', 'Failed to delete task.');
                }
            });
        }
    });
}

});