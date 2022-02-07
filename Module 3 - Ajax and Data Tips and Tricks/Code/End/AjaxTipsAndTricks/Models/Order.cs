using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AjaxTipsAndTricks.Models
{
    public class Order
    {
        public int ID { get; set; }
        public decimal Total { get; set; }
        public string ProductTitle { get; set; }
    }
}