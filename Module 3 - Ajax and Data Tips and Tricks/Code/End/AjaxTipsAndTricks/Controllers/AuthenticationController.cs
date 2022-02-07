using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace AjaxTipsAndTricks.Controllers
{
    public class AuthenticationController : ApiController
    {
        // POST api/authentication
        public HttpResponseMessage Post()
        {
            //Simulate storing authToken
            var authToken = Request.Headers.GetValues("AuthToken");
            var msg = new HttpResponseMessage(HttpStatusCode.OK);
            msg.Headers.Add("AuthToken", authToken);
            return msg;
        }
    }
}