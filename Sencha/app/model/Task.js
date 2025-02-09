Ext.define('PriceListApp.model.Task', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'tsk_id', type: 'int' },
        { name: 'tsk_name', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'start_date', type: 'date', dateFormat: 'Y-m-d' },
        { name: 'end_date', type: 'date', dateFormat: 'Y-m-d' },
        { name: 'due_date', type: 'date', dateFormat: 'Y-m-d' },
        { name: 'emp_id', type: 'int' },       
        { name: 'emp_name', type: 'string' },
        { name: 'cat_id', type: 'int' },       
        { name: 'cat_name', type: 'string' }
    ]
});
