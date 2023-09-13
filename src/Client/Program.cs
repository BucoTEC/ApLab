// See https://aka.ms/new-console-template for more information
using IdentityModel.Client;

Console.WriteLine("Hello, World from my identity client");
// discover endpoints from metadata
var client = new HttpClient();
var disco = await client.GetDiscoveryDocumentAsync("https://localhost:5001");
Console.WriteLine(disco.ToString());
if (disco.IsError)
{
    Console.WriteLine(disco.Error);
    return;
}
