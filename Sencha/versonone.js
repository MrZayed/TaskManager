Ext.application({
    name: 'PriceListApp',
    launch: function () {
        Ext.create('Ext.window.Window', {
            title: 'Price List',
            width: 1800,
            height: 800,
            layout: 'vbox',
            border: false, 
            closable: true,
            items: [
              
                {
                    xtype: 'toolbar',
                    border: false, 
                    margin: '10 10 0 10',
                    items: [
                        { text: 'Copy', iconCls: 'x-fa fa-copy' ,width:150},
                        { xtype: 'tbfill' }, 
                        { text: 'Approve', iconCls: 'x-fa fa-check' ,width:150},
                        { xtype: 'tbfill' },
                        { text: 'Adjust', iconCls: 'x-fa fa-pencil',width:150 },
                        { xtype: 'tbfill', width: 900 },
                        { text: 'Approval List', iconCls: 'x-fa fa-list' ,width:150},
                        { xtype: 'tbfill' },
                        { text: 'Print', iconCls: 'x-fa fa-print' ,width:150}
                    ]
                },
                {
                    xtype:'panel',
                    layout: 'vbox',
                    margin:'10 10 10 10',
                    items:[
                        {
                    xtype:'panel',
                    layout: 'hbox',
                    margin:'10 10 10 10',
                    items: [
                        {
                            xtype: 'panel',
                            width: 1400,
                            border: false,
                            layout: { type: 'vbox', align: 'stretch' }, 
                            margin: '10 10 0 10',
                            xtype: 'fieldset',
                            border: false, 
                            items: [
                                {
                                    xtype: 'container',
                                    layout: { type: 'hbox', align: 'stretch' }, 
                                    margin: '10 10 0 10',
                                    xtype: 'fieldset',
                                    width: 1400,
                                    items: [
                                        {
                                            margin: '10 ',
                                            layout: 'anchor',
                                            width: 400,
                                            defaults: { anchor: '100%', xtype: 'textfield', margin: '5' },
                                            items: [
                                                { xtype: 'combo', fieldLabel: 'Channel', name: 'channel' },
                                                { fieldLabel: 'Name', name: 'name' },
                                                { xtype: 'datefield', fieldLabel: 'Active from', name: 'activeFrom' },
                                            ]
                                        },
                                        {
                                            margin: '10 10 10 200', 
                                            width: 400,
                                            layout: 'anchor',
                                            defaults: { anchor: '100%', xtype: 'textfield', margin: '5' },
                                            items: [
                                                { fieldLabel: 'Number',  xtype: 'textfield',name: 'number'},
                                                { fieldLabel: 'Currency', name: 'currency', value: 'Egyptian Pound', readOnly: true },
                                                { xtype: 'datefield', fieldLabel: 'Active to', name: 'activeTo' },
                                            ],
                                        }
                                    ],
                                    
                                }
                                
                                ,{
                                    title: 'Description',
                                    name: 'description',
                                    width: 1400,
                                    margin: '5',
                                    xtype: 'fieldset',  
                                    items: [
                                        {
                                            xtype: 'textarea',  
                                            name: 'descriptionText', 
                                            width: '100%',  
                                            height: 50,  
                                            margin: '5',  
                                         labelAlign: 'top'                                          
                                        }
                                    ]
                                },
                               

                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Status',
                            width: 300, 
                            height:220,
                            margin: '10 10 10 10', 
                            layout: {
                                type: 'vbox', 
                                align: 'stretch'
                            },
                            defaults: {
                                xtype: 'container', 
                                layout: 'hbox',
                                margin: '5 0'
                            },
                            items: [
                                {
                                    items: [
                                        { 
                                            xtype: 'label',
                                            text: 'Auto:', 
                                            width: 100,
                                            margin: '0 10 0 0'
                                        },
                                        { 
                                            xtype: 'textfield', 
                                            value: 'NO', 
                                            readOnly: true, 
                                            cls: 'value-field',
                                            flex: 1 
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { 
                                            xtype: 'label',
                                            text: 'Status:',
                                            width: 100,
                                            margin: '0 10 0 0'
                                        },
                                        { 
                                            xtype: 'textfield',
                                            value: 'DRAFT',
                                            readOnly: true,
                                            cls: 'value-field',
                                            flex: 1
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        { 
                                            xtype: 'label',
                                            text: 'Last Approval By:',
                                            width: 100,
                                            margin: '0 10 0 0'
                                        },
                                        { 
                                            xtype: 'textfield',
                                            value: '', 
                                            readOnly: true,
                                            cls: 'value-field',
                                            flex: 1
                                        }
                                    ]
                                }
                            ]
                        }
                        
                       
                       
                    ]
                },
                

                        {
                            xtype: 'container',
                            layout: {  type: 'vbox', pack: 'end', align: 'end'}, 
                            margin: '10 10 10 10',
                            items: [
                                {
                                    xtype: 'button',
                                    text: 'Save',
                                    iconCls: 'x-fa fa-save',
                                    width: 100,
                                    margin: '0 10 0 0',
                                    handler: function () { alert('Saved'); } 
                                }
                            ]
                        }
                    ]
                },
                
                

                // (Grid)
                {
                    xtype: 'gridpanel',
                    title: 'Lines',
                    width: 1800,
                    margin: '10',
                    flex: 1,
                    columns: [
                        { text: "Unit Price", dataIndex: "unitPrice", flex: 1 },
                        { text: "Discount", dataIndex: "discount", flex: 1 },
                        { text: "Incentive", dataIndex: "incentive", flex: 1 },
                        { text: "Auto", dataIndex: "auto", flex: 1 },
                        { text: "From Date", dataIndex: "fromDate", flex: 1 },
                        { text: "To Date", dataIndex: "toDate", flex: 1 },
                        { text: "Status", dataIndex: "status", flex: 1 },
                        { text: "Remark", dataIndex: "remark", flex: 1 },
                      ],
                      tbar: [
                        { iconCls: "x-fa fa-plus", flex: 0.25 },
                        { iconCls: "x-fa fa-minus", flex: 0.25 },
                    
                        { text: "Create", iconCls: "x-fa fa-plus", flex: 1 },
                        { text: "Edit", iconCls: "x-fa fa-edit", flex: 1 },
                        { text: "Delete", iconCls: "x-fa fa-trash", flex: 1 },
                        { xtype: "textfield", emptyText: "%", flex: 1 },
                        { xtype: "textfield", emptyText: "Size", flex: 1 },
                        { xtype: "combo", emptyText: "Shape..", flex: 2 },
                        { xtype: "combo", emptyText: "Grade..", flex: 2 },
                        { xtype: "combo", emptyText: "Length..", flex: 2 },
                    
                        { text: "Extend Date", iconCls: "x-fa fa-calendar", flex: 1 },
                        { text: "Copy", iconCls: "x-fa fa-copy", flex: 1 },
                        { xtype: "splitbutton", iconCls: "x-fa fa-download", flex: 0.25 },
                      ],
                }



            ],
            buttons: [
                { text: 'Close',
                handler: function (btn) { btn.up('window').close(); } }
            ]
        }).show();
    }
});
