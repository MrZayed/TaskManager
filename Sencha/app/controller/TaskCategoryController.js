Ext.define('PriceListApp.controller.taskCategory.TaskCategoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.taskcategorycontroller', 

    init: function () { 
        console.log('TaskCategoryController initialized.');
    },

    saveTaskCategory: function (btn) {
        var form = btn.up('form').getForm();

        if (form.isValid()) {
            var formData = form.getValues();

            Ext.Ajax.request({
                url: 'http://localhost:8080/TaskCategorie',
                method: 'POST',
                jsonData: formData,
                success: function (response) {
                    Ext.Msg.alert('Success', 'Task Category saved successfully!');
                    form.reset();
                    grid.getStore().reload(); 
                    var grid = Ext.ComponentQuery.query('taskCategoryGrid')[0];
                    if (grid) {
                        grid.getStore().reload();
                    }
                },
                failure: function (response) {
                    Ext.Msg.alert('Error', 'Failed to save Task Category.');
                }
            });
        } else {
            Ext.Msg.alert('Validation Error', 'Please fill in all required fields.');
        }
    },
    deleteTaskCategory: function (grid, rowIndex) {
        const record = grid.getStore().getAt(rowIndex);
        const catId = record.get('cat_id');  
    
        Ext.Msg.confirm('Confirm', 'Are you sure you want to delete this task category?', function (choice) {
            if (choice === 'yes') {
                Ext.Ajax.request({
                    url: 'http://localhost:8080/TaskCategorie/' + catId,
                    method: 'DELETE',
                    success: function () {
                        Ext.Msg.alert('Success', 'Task Category deleted successfully!');
                        grid.getStore().remove(record);  
                    },
                    failure: function () {
                        Ext.Msg.alert('Error', 'Failed to delete task category.');
                    }
                });
            }
        });
    }
    
});
