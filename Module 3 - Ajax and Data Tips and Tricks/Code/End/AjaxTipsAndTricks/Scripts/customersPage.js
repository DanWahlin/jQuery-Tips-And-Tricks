var customersPage = function () {
    var init = function () {
        $('#GetCustomers').click(function () {
            getCustomers();
        });

        $('#UpdateCustomer').click(function () {
            updateCustomer();
        });

        $('#InsertCustomer').click(function () {
            insertCustomer();
        });

        $('#DeleteCustomer').click(function () {
            deleteCustomer();
        });

        $('#GetCustomerOrders').click(function () {
            getCustomerOrders(1);
        });

        $('#GetCustomerJSONP').click(function () {
            getCustomerJSONP(1);
        });
    },

    getCustomers = function () {
        dataService.getCustomers()
            .then(function (custs) {
                var custsHtml = ''
                for (var i = 0; i < custs.length; i++) {
                    custsHtml += '<li>' + custs[i].FirstName + ' ' + custs[i].LastName + '&nbsp;</li>';
                }
                $('#CustomersContainer').html(custsHtml);
            },
            function(jqXHR, textStatus, err) {
                alert('Unable to get the customers: ' + textStatus);
            });
    },

    updateCustomer = function () {
        //Fake customer data
        var cust = {
            ID: 2,
            FirstName: 'Michelle',
            LastName: 'Smith'
        };
        dataService.updateCustomer(cust)
          .then(function () {
              updateStatus('Updated Customer! Refreshing customer list.');
              getCustomers();
          },
          function (jqXHR, textStatus, err) {
              alert('Unable to update customer: ' + textStatus);
          });

    },

    insertCustomer = function () {
        //Fake customer data
        var cust = {
            ID: 10,
            FirstName: 'JoJo',
            LastName: 'Pikidily'
        };
        dataService.insertCustomer(cust)
            .done(function () {
                updateStatus('Inserted Customer! Refreshing customer list.');
                getCustomers();
            }).
            fail(function (jqXHR, textStatus, err) {
                alert('Unable to insert customer: ' + textStatus);
            });
    },

    deleteCustomer = function () {
        dataService.deleteCustomer(10)
        .done(function () {
            updateStatus('Deleted Customer! Refreshing customer list.');
            getCustomers();
        })
        .fail(function (jqXHR, textStatus, err) {
            alert('Unable to delete customer: ' + textStatus);
        });
    },

    updateStatus = function (msg) {
        $('#OutputDiv').html(msg);
    },

        getCustomerOrders = function (custID) {
            dataService.getOrders(custID)
                .done(function (orders) {
                    var ordersHtml = ''
                    for (var i = 0; i < orders.length; i++) {
                        ordersHtml += '<li>' + orders[i].ProductTitle + '</li>';
                    }
                    $('#OrdersContainer').html(ordersHtml);
                })
                .fail(function (jqXHR, textStatus, err) {
                    alert('Unable to get customer orders: ' + textStatus);
                });
        },

    getCustomerJSONP = function (id) {
        dataService.getCustomerJSONP(id)
            .done(function (cust) {
                alert('Customer retrieved using JSONP: ' + cust.FirstName + ' ' + cust.LastName);
            })
            .fail(function(jqXHR, textStatus, err) {
                alert('Unable to get customer orders: ' + textStatus);
            });
    };

    return {
        init: init
    };

}();