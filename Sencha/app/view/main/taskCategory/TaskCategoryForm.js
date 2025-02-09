Ext.define('PriceListApp.view.taskCategory.TaskCategoryForm', {
    extend: 'Ext.form.Panel',
    controller: 'taskcategorycontroller',
    xtype: 'taskCategoryForm',
    title: 'Task Category Info',
    layout: 'vbox',
    items: [
        {
            xtype: 'form',
            layout: 'vbox',
            margin: '5 20',
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Task Category Information',
                    layout: 'hbox',
                    width: 650,
                    height: 230,
                    items: [
                        {
                            xtype: 'panel',
                            layout: 'anchor',
                            margin: '5 20',
                            defaults: { anchor: '100%', xtype: 'textfield',},
                            items: [
                                { fieldLabel: 'Category ID', name: 'catId' },
                                { fieldLabel: 'Category Name', name: 'catName' }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    buttons: [
        {
            text: 'Save Task Category',
            formBind: true,
            handler: 'saveTaskCategory'  // Use handler instead of action
        }
    ]
});