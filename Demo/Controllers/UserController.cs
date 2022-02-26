using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public IEnumerable<tbl_Subscribers> Get()
        {
            List<tbl_Subscribers> _lst_tbl_Subscribers = new List<tbl_Subscribers>();
            for (int i = 0; i < 6; i++)
            {
                tbl_Subscribers _tbl_Subscribers = new tbl_Subscribers();
                _tbl_Subscribers.id = (i + 1);
                switch (i + 1)
                {
                    case 1:
                        _tbl_Subscribers.fName = "Hege";
                        _tbl_Subscribers.lName = "Pege";
                        break;
                    case 2:
                        _tbl_Subscribers.fName = "Kim";
                        _tbl_Subscribers.lName = "Pin";
                        break;
                    case 3:
                        _tbl_Subscribers.fName = "Sal";
                        _tbl_Subscribers.lName = "Smith";
                        break;
                    case 4:
                        _tbl_Subscribers.fName = "Jack";
                        _tbl_Subscribers.lName = "Jones";
                        break;
                    case 5:
                        _tbl_Subscribers.fName = "John";
                        _tbl_Subscribers.lName = "Doe";
                        break;
                    case 6:
                        _tbl_Subscribers.fName = "Peter";
                        _tbl_Subscribers.lName = "Pan";
                        break;
                }
                
                _lst_tbl_Subscribers.Add(_tbl_Subscribers);
            }
            
            return _lst_tbl_Subscribers.AsEnumerable();
        }
        public class tbl_Subscribers
        {
            public int id { get; set; }
            public string fName { get; set; }
            public string lName { get; set; }
        }
    }
}
