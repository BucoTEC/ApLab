using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Identity.Client.Models;

namespace Identity.Client.WebServices
{
    public interface IWeatherService
    {
        IEnumerable<Weather> Get();
    }
}
