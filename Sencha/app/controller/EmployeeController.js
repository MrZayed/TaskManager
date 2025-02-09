Ext.define('PriceListApp.controller.EmployeeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employeeController',

    saveEmployee: function (btn) {
        const form = btn.up('form').getForm();
        if (form.isValid()) {
            const formData = form.getValues();
            formData.dob = Ext.Date.format(new Date(formData.dob), 'Y-m-d');

            Ext.Ajax.request({
                url: 'http://localhost:8080/employee',
                method: 'POST',
                jsonData: formData,
                success: function () {
                    Ext.Msg.alert('Success', 'Employee saved successfully!');
                    form.reset();
                    Ext.ComponentQuery.query('employeeGrid')[0].getStore().reload();
                },
                failure: function () {
                    Ext.Msg.alert('Error', 'Failed to save employee.');
                }
            });
        }
    },

    deleteEmployee: function (grid, rowIndex, colIndex, item, event, record, row) {
        const empId = record.get('emp_id'); // Get employee ID
        const store = grid.getStore(); // Get store reference

        Ext.Msg.confirm('Confirm', 'Are you sure you want to delete this employee?', function (choice) {
            if (choice === 'yes') {
                Ext.Ajax.request({
                    url: 'http://localhost:8080/employee/' + empId,
                    method: 'DELETE',
                    success: function () {
                        Ext.Msg.alert('Success', 'Employee deleted successfully!');
                        store.remove(record); // Remove record from store
                    },
                    failure: function () {
                        Ext.Msg.alert('Error', 'Failed to delete employee.');
                    }
                });
            }
        });
    }
});
