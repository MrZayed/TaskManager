Ext.define('PriceListApp.view.CollapsibleHeader', {
    extend: 'Ext.tab.Panel',
    xtype: 'collapsibleheader',
    width: '100%',
    height: '100% ',
    items: [
        {
            xtype:'panel',
            title:"Task Info",
            items:[
                {
                    xtype:'taskForm'
                },
                {
                    xtype: 'taskGrid'
                }
               
            ]
        },
        {
            xtype:'panel',
            title:"Employee Info",
            items:[
                {
                    xtype:'employeeForm',
                },      
                {
                    xtype: 'employeeGrid',
                },
            ]
        }
       ,
        {
            xtype: 'panel',
            title: 'Task Category Info',
            items: [
                {
                    xtype:'taskCategoryForm'
                },
                {
                    xtype:'taskCategoryGrid'
                }
           
            ]
        },
    ]
});



     // {
                //     xtype: 'form',
                //     layout: 'vbox',
                //     margin: '0 20',
                //     items: [
                        // {
                        //     xtype: 'fieldset',
                        //     title: 'Task Information',
                        //     layout: 'hbox',
                        //     width: 650,
                        //     height: 250,
                        //     items: [
                        //         {
                        //             xtype: 'panel',
                        //             layout: 'anchor',
                        //             margin: '0 20',
                        //             defaults: { anchor: '100%', xtype: 'textfield', margin: '5' },
                        //             items: [
                        //                 { fieldLabel: 'Task ID', name: 'tsk_id' },
                        //                 { fieldLabel: 'Task Name', name: 'tsk_name' },
                        //                 { xtype: 'textarea', fieldLabel: 'Description', name: 'description', height: 50 }
                        //             ]
                        //         },
                        //         {
                        //             xtype: 'panel',
                        //             layout: 'anchor',
                        //             defaults: { anchor: '100%', xtype: 'textfield', margin: '5' },
                        //             items: [
                        //                 { xtype: 'datefield', fieldLabel: 'Start Date', name: 'start_date' },
                        //                 { xtype: 'datefield', fieldLabel: 'End Date', name: 'end_date' },
                        //                 { xtype: 'datefield', fieldLabel: 'Due Date', name: 'due_date' }
                        //             ]
                        //         }
                        //     ]
                        // }
                //     ],
                //     buttons: [
                //         {
                //             text: 'Save Task',
                //             handler: function () {
                //                 const form = this.up('form').getForm();
                //                 if (form.isValid()) {
                //                     const formData = form.getValues();
                //                     formData.start_date = Ext.Date.format(new Date(formData.start_date), 'Y-m-d');
                //                     formData.end_date = Ext.Date.format(new Date(formData.end_date), 'Y-m-d');
                //                     formData.due_date = Ext.Date.format(new Date(formData.due_date), 'Y-m-d');
        
                //                     Ext.Ajax.request({
                //                         url: 'http://localhost:8080/task',
                //                         method: 'POST',
                //                         jsonData: formData,
                //                         success: function (response) {
                //                             Ext.Msg.alert('Success', 'Task saved successfully!');
                //                             Ext.ComponentQuery.query('grid[title="Task List"]')[0].getStore().reload();
                //                             form.reset();
                //                         },
                //                         failure: function () {
                //                             Ext.Msg.alert('Error', 'Failed to save task.');
                //                         }
                //                     });
                //                 }
                //             }
                //         }
                //     ]
                // }, 
                // {
                //     xtype: 'grid',
                //     title: 'Task List',
                //     store: {
                //         fields: ['tsk_id', 'tsk_name', 'description', 'start_date', 'end_date', 'due_date'],
                //         proxy: {
                //             type: 'ajax',
                //             url: 'http://localhost:8080/task',
                //             reader: {
                //                 type: 'json',
                //                 rootProperty: 'tasks'
                //             }
                //         },
                //         autoLoad: true,
                //     },
                //     plugins: [
                //         {
                //             ptype: 'rowediting',
                //             clicksToEdit: 2,
                //             listeners: {
                //                 edit: function (editor, context) {
                //                     Ext.Ajax.request({
                //                         url: 'http://localhost:8080/task/' + context.record.get('tsk_id'),
                //                         method: 'PUT',
                //                         jsonData: context.record.data,
                //                         success: function () {
                //                             Ext.Msg.alert('Success', 'Task updated successfully!');
                //                             Ext.ComponentQuery.query('grid[title="Task List"]')[0].getStore().reload();
                //                         },
                //                         failure: function () {
                //                             Ext.Msg.alert('Error', 'Failed to update task.');
                //                         }
                //                     });
                //                 }
                //             }
                //         }
                //     ],
                    // columns: [
                    //     { text: 'Task ID', dataIndex: 'tsk_id', flex: 1, editor: { xtype: 'textfield', disabled: true } },
                    //     { text: 'Task Name', dataIndex: 'tsk_name', flex: 1, editor: { xtype: 'textfield' } },
                    //     { text: 'Description', dataIndex: 'description', flex: 2, editor: { xtype: 'textarea' } },
                    //     { text: 'Start Date', dataIndex: 'start_date', flex: 1, editor: { xtype: 'datefield' } },
                    //     { text: 'End Date', dataIndex: 'end_date', flex: 1, editor: { xtype: 'datefield' } },
                    //     { text: 'Due Date', dataIndex: 'due_date', flex: 1, editor: { xtype: 'datefield' } },
                //         {
                //             xtype: 'actioncolumn',
                //             text: 'Delete',
                //             width: 100,
                //             items: [{
                //                 icon: 'delete-icon.png',
                //                 tooltip: 'Delete Task',
                //                 handler: function (grid, rowIndex) {
                //                     var taskId = grid.getStore().getAt(rowIndex).get('tsk_id');
                //                     Ext.Msg.confirm('Delete Task', 'Are you sure you want to delete this task?', function (btn) {
                //                         if (btn === 'yes') {
                //                             Ext.Ajax.request({
                //                                 url: 'http://localhost:8080/task/' + taskId,
                //                                 method: 'DELETE',
                //                                 success: function () {
                //                                     Ext.Msg.alert('Success', 'Task deleted successfully!');
                //                                     grid.getStore().reload();
                //                                 },
                //                                 failure: function () {
                //                                     Ext.Msg.alert('Error', 'Failed to delete task.');
                //                                 }
                //                             });
                //                         }
                //                     });
                //                 }
                //             }]
                //         }
                //     ]
                // },








 // {
            //     xtype:'taskCategoryForm'
            // },
            // {
            //     xtype:'taskCategoryGrid'
            // }
            // {
            //     xtype: 'form',
            //     // title: 'Task Category',
            //     layout: 'vbox',
            //     margin: '0 20',
            //     items: [
            //         {
            //             xtype: 'fieldset',
            //             title: 'Task Category Information',
            //             layout: 'hbox',
            //             width: 650,
            //             height: 230,
            //             items: [
            //                 {
            //                     xtype: 'panel',
            //                     layout: 'anchor',
            //                     margin: '0 20',
            //                     defaults: { anchor: '100%', xtype: 'textfield', margin: '5' },
                                // items: [
                                    // { fieldLabel: 'Category ID', name: 'catId' },
                                    // { fieldLabel: 'Category Name', name: 'catName' }
                                // ]
            //                 }
            //             ]
            //         }
            //     ],
            //     buttons: [
            //         {
            //             text: 'Save Task Category',
            //             handler: function () {
            //                 const form = this.up('form').getForm();
            //                 if (form.isValid()) {
            //                     const formData = form.getValues();
            //                     formData.catId = parseInt(formData.catId, 10);
            //                     if (!formData.catName || formData.catName.trim() === '') {
            //                         Ext.Msg.alert('Error', 'Category Name cannot be empty');
            //                         return;
            //                     }
            //                     Ext.Ajax.request({
            //                         url: 'http://localhost:8080/TaskCategorie',
            //                         method: 'POST',
            //                         jsonData: formData,
            //                         success: function (response) {
            //                             Ext.Msg.alert('Success', 'Task Category saved successfully!');
            //                             Ext.ComponentQuery.query('grid[title="Task Category List"]')[0].getStore().reload();
            //                             form.reset();
            //                         },
            //                         failure: function () {
            //                             Ext.Msg.alert('Error', 'Failed to save Task Category.');
            //                         }
            //                     });
            //                 }
            //             }
            //         }
            //     ]
            // },
            // {
            //     xtype: 'grid',
            //     title: 'Task Category List',
            //     store: {
            //         fields: ['catId', 'catName'],
            //         proxy: {
            //             type: 'ajax',
            //             url: 'http://localhost:8080/TaskCategorie',
            //             reader: {
            //                 type: 'json',
            //                 rootProperty: 'taskCategories'
            //             }
            //         },
            //         autoLoad: true
            //     },
            //     plugins: [
            //         {
            //             ptype: 'rowediting',
            //             clicksToEdit: 2,
            //             listeners: {
            //                 edit: function (editor, context) {
            //                     Ext.Ajax.request({
            //                         url: 'http://localhost:8080/TaskCategorie/' + context.record.get('catId'),
            //                         method: 'PUT',
            //                         jsonData: context.record.data,
            //                         success: function () {
            //                             Ext.Msg.alert('Success', 'Task Category updated successfully!');
            //                             Ext.ComponentQuery.query('grid[title="Task Category List"]')[0].getStore().reload();
            //                         },
            //                         failure: function () {
            //                             Ext.Msg.alert('Error', 'Failed to update Task Category.');
            //                         }
            //                     });
            //                 }
            //             }
            //         }
            //     ],
            //     columns: [
            //         { text: 'Category ID', dataIndex: 'catId', flex: 1, editor: { xtype: 'textfield', readOnly: true } },
            //         { text: 'Category Name', dataIndex: 'catName', flex: 1, editor: { xtype: 'textfield' } },
            //         {
            //             xtype: 'actioncolumn',
            //             text: 'Delete',
            //             width: 100,
            //             items: [
            //                 {
            //                     icon: 'delete-icon.png',
            //                     tooltip: 'Delete Task Category',
            //                     handler: function (grid, rowIndex) {
            //                         var catId = grid.getStore().getAt(rowIndex).get('catId');
            //                         Ext.Msg.confirm('Delete Task Category', 'Are you sure you want to delete this task category?', function (btn) {
            //                             if (btn === 'yes') {
            //                                 Ext.Ajax.request({
            //                                     url: 'http://localhost:8080/TaskCategorie/' + catId,
            //                                     method: 'DELETE',
            //                                     success: function () {
            //                                         Ext.Msg.alert('Success', 'Task Category deleted successfully!');
            //                                         grid.getStore().reload();
            //                                     },
            //                                     failure: function () {
            //                                         Ext.Msg.alert('Error', 'Failed to delete Task Category.');
            //                                     }
            //                                 });
            //                             }
            //                         });
            //                     }
            //                 }
            //             ]
            //         }
            //     ]
            // }