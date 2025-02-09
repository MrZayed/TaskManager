Ext.define('PriceListApp.store.EmployeeStore', {
    extend: 'Ext.data.Store',
    model: 'PriceListApp.model.Employee',
    alias: "store.employeeStore",
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/employee',
        reader: {
            type: 'json',
            rootProperty: 'employees'
        }
    },
    autoLoad: true
});
