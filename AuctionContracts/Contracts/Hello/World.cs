using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contracts.Hello
{
    public class World
    {
        /// <summary>
        /// Used to say hi to a developer in need
        /// </summary>
        /// <returns>string</returns>
        public static string SayHi()
        {
            Console.WriteLine("Hello world");
            return "Hello my friend";
        } // update
    }
}
