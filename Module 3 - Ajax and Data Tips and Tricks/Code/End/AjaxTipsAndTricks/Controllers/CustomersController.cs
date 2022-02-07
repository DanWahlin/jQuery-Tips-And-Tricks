using AjaxTipsAndTricks.Models;
using AjaxTipsAndTricks.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.ModelBinding;

namespace AjaxTipsAndTricks.Controllers
{
    public class CustomersController : ApiController
    {
        ICustomerRepository _Repository;

        public CustomersController()
        {
            _Repository = new CustomerRepository();
        }

        // GET api/customers
        public IEnumerable<Customer> Get()
        {
            var custs = _Repository.GetCustomers();
            if (custs == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return custs;
            //Call if method return type is HttpResponseMessage
            //else
            //{
            //    return Request.CreateResponse<IEnumerable<Customer>>(HttpStatusCode.OK, custs);
            //}
        }

        // GET api/customers/5
        public Customer Get(int id)
        {
            var cust = _Repository.GetCustomer(id);
            if (cust == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return cust;
            //Call if method return type is HttpResponseMessage
            //else
            //{
            //    return Request.CreateResponse<Customer>(HttpStatusCode.OK, cust);
            //}
        }

        // POST api/customers
        public HttpResponseMessage Post([FromBody]Customer cust)
        {
            var newCust = _Repository.InsertCustomer(cust);
            if (newCust != null)
            {
                var msg = new HttpResponseMessage(HttpStatusCode.Created);
                msg.Headers.Location = new Uri(Request.RequestUri + newCust.ID.ToString());
                return msg;
            }
            else
            {
                throw new HttpResponseException(HttpStatusCode.Conflict);
            }
        }

        // PUT api/customers/5
        public HttpResponseMessage Put(int id, [FromBody]Customer cust)
        {
            var status = _Repository.UpdateCustomer(cust);
            if (status)
            {
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }

        // DELETE api/customers/5
        public HttpResponseMessage Delete(int id)
        {
            var status = _Repository.DeleteCustomer(id);
            if (status)
            {
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }

        [HttpGet]
        public List<Order> Orders(int custID)
        {
            var orders = _Repository.GetOrders(custID);
            if (orders == null)
            {
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.NotFound));
            }
            return orders;
        }
    }
}