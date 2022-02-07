using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AjaxTipsAndTricks
{
    public class OperationStatus
    {
        public bool Status { get; set; }
        public string StackTrace { get; set; }
        public string Message { get; set; }
        public int InsertedID { get; set; }
    }
}