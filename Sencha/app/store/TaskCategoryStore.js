Ext.define('PriceListApp.store.TaskCategories', {
    extend: 'Ext.data.Store',
    model: 'PriceListApp.model.TaskCategory',
    alias: "store.taskCategoryStore",
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/TaskCategorie',
        reader: {
            type: 'json',
            rootProperty: 'taskCategories'
        }
    },
    autoLoad: true
});
