var dataService = function () {
    var urlBase = 'http://localhost:38129/api/customers',

    authenticate = function (authToken) {

    },

    getCustomer = function (id) {
        return $.getJSON(urlBase + '/' + id);
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
        getCustomer: getCustomer,
        getCustomerJSONP: getCustomerJSONP,
        insertCustomer: insertCustomer,
        deleteCustomer: deleteCustomer,
        getOrders: getOrders
    };
}();