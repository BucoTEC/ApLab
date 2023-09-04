using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Identity.Client.Models;

namespace Identity.Client.WebServices
{
    public class WeatherService : IWeatherService
    {
        public IEnumerable<Weather> Get()
        {
            return new List<Weather>();
        }
    }
}
