using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ISR4.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ISR4.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NamesController : ControllerBase
    {
        [Authorize(Roles = "Api.ReadWrite,Api.ReadOnly")]
        public IActionResult GetNames()
        {
            return Ok(Data.NamesList);
        }

        [Authorize(Roles = "Api.ReadWrite")]
        public IActionResult AddNames()
        {
            return Ok("Name added");
        }
    }
}
