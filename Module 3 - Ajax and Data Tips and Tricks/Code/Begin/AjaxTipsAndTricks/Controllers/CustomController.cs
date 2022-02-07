using AjaxTipsAndTricks.Models;
using AjaxTipsAndTricks.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;

namespace AjaxTipsAndTricks.Controllers
{
    public class CustomController : ApiController
    {
        ICustomerRepository _Repository;

        public CustomController()
        {
            _Repository = new CustomerRepository();
        }

        public object Get()
        {
            var custs = _Repository.GetCustomers();
            if (custs == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return new { d = custs };
        }
    }
}