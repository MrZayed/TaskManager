Ext.define('PriceListApp.view.task.TaskCategoryGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'taskCategoryGrid',
    controller: 'taskcategorycontroller',
    title: 'Task Category List',
    store: { type: 'taskCategoryStore' },
    height: 320,
    layout: 'fit',

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Search',
                    emptyText: 'Search categories...',
                    listeners: {
                        change: function (field, newValue) {
                            const store = this.up('grid').getStore();
                            store.filter({
                                property: 'catName',
                                value: newValue,
                                anyMatch: true,
                                caseSensitive: false
                            });
                        },
                        buffer: 300
                    }
                },
                '->',
                { xtype: 'displayfield', itemId: 'taskCategoryCount', fieldLabel: 'Total Categories', value: '0' }
            ]
        },
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            store: { type: 'taskCategoryStore' }, 
            displayInfo: true
        }
    ],

    plugins: [
        {
            ptype: 'rowediting',
            clicksToEdit: 2,
            listeners: {
                edit: function (editor, context) {
                    Ext.Ajax.request({
                        url: 'http://localhost:8080/task-categories/' + context.record.get('catId'), 
                        method: 'PUT',
                        jsonData: context.record.data,
                        success: function () {
                            Ext.Msg.alert('Success', 'Task Category updated successfully!');
                            context.grid.getStore().reload();
                        },
                        failure: function () {
                            Ext.Msg.alert('Error', 'Failed to update task category.');
                        }
                    });
                }
            }
        }
    ],

    columns: [
        {
            text: 'Category ID',
            dataIndex: 'catId',
            flex: 1
        },
        {
            text: 'Category Name',
            dataIndex: 'catName',
            flex: 1,
            editor: { xtype: 'textfield', allowBlank: false } 
        },
        {
            xtype: 'actioncolumn',
            text: 'Actions',
            width: 100,
            items: [
                {
                    iconCls: 'x-fa fa-trash',
                    tooltip: 'Delete Task Category',
                    handler: 'deleteTaskCategory'
                }
            ]
        }
    ],

    listeners: {
        afterrender: function (grid) {
            const store = grid.getStore();
            const countField = grid.down('#taskCategoryCount');

            const updateCategoryCount = () => {
                countField.setValue(store.getCount());
            };

            store.on({
                load: updateCategoryCount,
                add: updateCategoryCount,
                remove: updateCategoryCount,
                update: updateCategoryCount
            });

            updateCategoryCount();
        }
    }
});
