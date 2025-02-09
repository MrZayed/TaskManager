Ext.define('PriceListApp.view.task.TaskGrid', {
    extend: 'Ext.grid.Panel',
    controller: "taskController",
    xtype: 'taskGrid',
    title: 'Task List',
    store: { type: 'taskStore' },
    height: 350,
    layout: 'fit',

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Search',
                    emptyText: 'Search tasks...',
                    listeners: {
                        change: function (field, newValue) {
                            const store = this.up('grid').getStore();
                            store.getProxy().setExtraParam('search', newValue);
                            store.loadPage(1);
                        },
                        buffer: 300,
                    },
                },
                '->',
                { xtype: 'displayfield', itemId: 'taskCount', fieldLabel: 'Total Tasks', value: '0' }
            ]
        },
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            store: { type: 'taskStore' },
            displayInfo: true
        },
    ],

    plugins: [
        {
            ptype: 'rowediting',
            clicksToEdit: 2,
            listeners: {
                edit: function (editor, context) {
                    const taskData = context.record.data;

                    taskData.start_date = Ext.Date.format(new Date(taskData.start_date), 'Y-m-d');
                    taskData.end_date = Ext.Date.format(new Date(taskData.end_date), 'Y-m-d');
                    taskData.due_date = Ext.Date.format(new Date(taskData.due_date), 'Y-m-d');

                    Ext.Ajax.request({
                        url: `http://localhost:8080/task-details/${context.record.get('tsk_id')}`,
                        method: 'PUT',
                        jsonData: taskData,
                        success: function () {
                            context.store.reload();
                        },
                        failure: function () {
                            Ext.Msg.alert('Error', 'Failed to update task.');
                        }
                    });
                }
            }
        }
    ],

    columns: [
        { text: 'Task ID', dataIndex: 'tsk_id', flex: 1, editor: 'textfield' },
        { text: 'Task Name', dataIndex: 'tsk_name', flex: 1, editor: 'textfield' },
        { text: 'Employee', dataIndex: 'emp_name', flex: 1, editor: 'textfield' },
        { text: 'Description', dataIndex: 'description', flex: 2, editor: 'textfield' },
        { text: 'Start Date', dataIndex: 'start_date', flex: 1, editor: 'datefield' },
        { text: 'End Date', dataIndex: 'end_date', flex: 1, editor: 'datefield' },
        { text: 'Due Date', dataIndex: 'due_date', flex: 1, editor: 'datefield' },
        { text: 'Category', dataIndex: 'cat_name', flex: 1, editor: 'textfield' },
        {
            xtype: 'actioncolumn',
            text: 'Actions',
            width: 100,
            items: [
                {
                    iconCls: 'x-fa fa-trash',
                    tooltip: 'Delete Task',
                    handler: 'deleteTask'
                }
            ]
        }
    ],

    listeners: {
        afterrender: function (grid) {
            grid.getStore().on('load', function (store) {
                grid.down('#taskCount').setValue(store.getCount());
            });
        },
    }
});