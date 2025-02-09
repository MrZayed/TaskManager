Ext.application({
    name: 'PriceListApp',

    requires: [
        'PriceListApp.view.CollapsibleHeader',
        'PriceListApp.controller.taskCategory.TaskCategoryController',
        'PriceListApp.controller.EmployeeController',
        'PriceListApp.controller.TaskController'
    ],

    launch: function () {
        Ext.create('Ext.window.Window', {
            title: '<i class="x-fa fa-paragraph" style="margin-right: 5px;"></i> Task Management',
            width: 1700,
            height: 800,
            layout: 'vbox',
            items: [
                { xtype: 'collapsibleheader' },
            ],
            buttons: [
                {
                    text: 'Close',
                    cls: 'closeBtn',
                    handler: function (btn) { btn.up('window').close(); }
                }
            ]
        }).show();
    }
});
