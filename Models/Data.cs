using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ISR4.Models
{
    public class Data
    {
        public static List<NameModel> NamesList = new List<NameModel>{
            new NameModel{FirstName="John", LastName="Doe"},
            new NameModel{FirstName="Jane", LastName="Doe"}
        };
    }
}
