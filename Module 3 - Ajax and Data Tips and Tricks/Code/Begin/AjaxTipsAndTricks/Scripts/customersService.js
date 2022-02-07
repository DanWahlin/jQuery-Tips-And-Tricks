var customersService = function () {
    var urlBase = '/api/customers',

    getCustomers = function () {
        return $.getJSON(urlBase);
    };

 
    return {
        getCustomers: getCustomers
    };
}();