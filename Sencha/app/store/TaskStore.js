Ext.define('PriceListApp.store.TaskStore', {
    extend: 'Ext.data.Store',
    alias: 'store.taskStore',
    model: 'PriceListApp.model.Task',
    remoteFilter: true,
    remoteSort: true,
    pageSize: 10, 

    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/task-details',
        enablePagingParams: true, 
        reader: {
            type: 'json',
            rootProperty: 'tasks',
            totalProperty: 'total'
        }
    },
    autoLoad: true
});
