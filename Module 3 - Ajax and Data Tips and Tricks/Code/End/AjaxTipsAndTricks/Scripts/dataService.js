var dataService = function () {
    var urlBase = '/api/customers',

    authenticate = function (authToken) {
        return $.ajax({
                    url: "/api/authentication",
                    type: "POST",
                    beforeSend: function (request) {
                        request.setRequestHeader("AuthToken", authToken);
                    }
                });
    },

    getCustomers = function () {
        return $.getJSON(urlBase);
    },

    getCustomer = function (id) {
        return $.getJSON(urlBase + '/' + id);
    },

    getCustomerAndOrders = function (id) {
        var promises = [getCustomer(custID), getOrders(custID)];
        return $.when.apply($, promises);
    },

    getCustomerJSONP = function (id) {
        return $.getJSON(urlBase + '/' + id + '?callback=?');
    },

    insertCustomer = function (cust) {
        return $.ajax({
            url: urlBase,
            data: cust,
            type: 'POST'
        });
    },

    updateCustomer = function (cust) {
        return $.ajax({
            url: urlBase + '/' + cust.ID,
            data: cust,
            type: 'PUT'
        });
    },

    deleteCustomer = function (id) {
        return $.ajax({
            url: urlBase + '/' + id,
            type: 'DELETE'
        });
    },

    getOrders = function (id) {
        return $.getJSON(urlBase + '/' + id + '/orders');
    };

    return {
        authenticate: authenticate,
        getCustomers: getCustomers,
        getCustomer: getCustomer,
        getCustomerJSONP: getCustomerJSONP,
        updateCustomer: updateCustomer,
        insertCustomer: insertCustomer,
        deleteCustomer: deleteCustomer,
        getOrders: getOrders,
        getCustomerAndOrders: getCustomerAndOrders
    };
}();