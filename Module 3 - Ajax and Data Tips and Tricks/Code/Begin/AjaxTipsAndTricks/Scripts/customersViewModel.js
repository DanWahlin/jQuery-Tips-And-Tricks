function CustomersViewModel() {
    var self = this;
    self.status = ko.observable();
    self.customers = ko.observableArray([]);
    self.orders = ko.observableArray([]);

    self.getCustomers = function () {
        dataService.getCustomers().done(function (custs) {
            //var mappedCusts = $.map(custs, function (cust) { return new Customer(cust) });
            //alert(mappedCusts);
            self.customers(custs);
        });
    };

    self.updateCustomer = function (cust) {
        dataService.updateCustomer(cust)
          .done(function () {
              self.status('Updated Customer! Refreshing customer list.');
              self.getCustomers();
          })
          .fail(function (jqXHR, textStatus, err) {
              alert('Unable to update customer: ' + textStatus);
          });

    },

    self.insertCustomer = function () {
        //Fake customer data
        var cust = {
            ID: 10,
            FirstName: 'JoJo',
            LastName: 'Pikidily'
        };
        dataService.insertCustomer(cust)
            .done(function () {
                self.status('Inserted Customer! Refreshing customer list.');
                self.getCustomers();
            }).
            fail(function (jqXHR, textStatus, err) {
                alert('Unable to insert customer: ' + textStatus);
            });
    },

    self.deleteCustomer = function (cust) {
        dataService.deleteCustomer(cust.ID)
        .done(function () {
            self.status('Deleted Customer! Refreshing customer list.');
            self.getCustomers();
        })
        .fail(function (jqXHR, textStatus, err) {
            alert('Unable to delete customer: ' + textStatus);
        });
    },

    self.getCustomerOrders = function (cust) {
        dataService.getOrders(cust.ID)
        .done(function (orders) {
            self.status('Retrieved orders!');
            self.orders(orders);
        })
        .fail(function (jqXHR, textStatus, err) {
            self.status('Retrieved orders!');
        });
    };
};