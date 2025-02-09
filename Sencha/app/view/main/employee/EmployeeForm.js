Ext.define('PriceListApp.view.Employee.EmployeeForm', {
    extend: 'Ext.form.Panel',
    xtype: 'employeeForm',
    controller:'employeeController',
    title: 'Employee Info',
    layout: 'vbox',
    items: [
        {
            xtype: 'fieldset',
            title: 'Employee Information',
            margin: '5 20',
            items: [
                { xtype: 'textfield', fieldLabel: 'Employee ID', name: 'emp_id' },
                { xtype: 'textfield', fieldLabel: 'Employee Name', name: 'emp_name' },
                { xtype: 'combo', fieldLabel: 'Gender', name: 'gender', store: ['MALE', 'FEMALE'] },
                { xtype: 'datefield', fieldLabel: 'Date of Birth', name: 'dob' }
            ]
        }
    ],
    buttons: [
        {
            text: 'Save Employee',
            formBind: true,
            handler: 'saveEmployee'  
        }
    ]
});
