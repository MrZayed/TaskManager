Ext.define('PriceListApp.view.Employee.EmployeeGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'employeeGrid',
    title: 'Employee List',
    store: { type: 'employeeStore' },
    controller: 'employeeController',

    // Toolbar for displaying total employee count and search functionality
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Search',
                    emptyText: 'Search employees...',
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
                { xtype: 'displayfield', itemId: 'employeeCount', fieldLabel: 'Total Employees', value: '0' }
            ]
        },
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            store: { type: 'employeeStore' }, 
            displayInfo: true
        },
    ],

    plugins: [
        {
            ptype: 'rowediting',
            clicksToEdit: 2,
            listeners: {
                edit: function (editor, context) {
                    Ext.Ajax.request({
                        url: 'http://localhost:8080/employee/' + context.record.get('emp_id'),
                        method: 'PUT',
                        jsonData: context.record.data,
                        success: function () {
                            Ext.Msg.alert('Success', 'Employee updated successfully!');
                            context.grid.getStore().reload();
                        },
                        failure: function () {
                            Ext.Msg.alert('Error', 'Failed to update employee.');
                        }
                    });
                }
            }
        }
    ],

    columns: [
        { text: 'ID', dataIndex: 'emp_id', flex: 1, editor: { xtype: 'textfield', readOnly: true } },
        { text: 'Name', dataIndex: 'emp_name', flex: 1, editor: { xtype: 'textfield', allowBlank: false } },
        { 
            text: 'Gender', 
            dataIndex: 'gender', 
            flex: 1, 
            editor: {
                xtype: 'combo',
                store: ['MALE', 'FEMALE'],
                forceSelection: true
            }
        },
        { text: 'DOB', dataIndex: 'dob', flex: 1, editor: { xtype: 'datefield', format: 'Y-m-d' } },
        {
            xtype: 'actioncolumn',
            text: 'Actions',
            width: 100,
            items: [
                {
                    iconCls: 'x-fa fa-trash',
                    tooltip: 'Delete Employee',
                    handler: function (grid, rowIndex, colIndex, item, event, record, row) {
                        const controller = grid.up('grid').getController();
                        if (controller) {
                            controller.deleteEmployee(grid, rowIndex, colIndex, item, event, record, row);
                        } else {
                            Ext.Msg.alert('Error', 'Controller not found.');
                        }
                    }
                }
            ]
        }
        
    ],

    listeners: {
        afterrender: function (grid) {
            const store = grid.getStore();
            const countField = grid.down('#employeeCount'); // use employeeCount

            const updateEmployeeCount = () => {
                countField.setValue(store.getCount()); // Update employee count
            };

            // Event listeners for store changes
            store.on({
                load: updateEmployeeCount,
                add: updateEmployeeCount,
                remove: updateEmployeeCount,
                update: updateEmployeeCount
            });

            // Initial count update
            updateEmployeeCount();
        }
    }
});
