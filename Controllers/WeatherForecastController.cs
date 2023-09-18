using Azure.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Graph;

namespace ISR4.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private readonly IConfiguration _config;

    public WeatherForecastController(IConfiguration configuration)
    {
        _config = configuration;
    }

    [HttpPost("user-date")]
    public async Task<string> GetUserData(string userName, string password)
    {
        var graphApiConfig = _config.GetSection("GraphApi");
        var scopes = new[] { "User.Read" };

        // Multi-tenant apps can use "common",
        // single-tenant apps must use the tenant ID from the Azure portal
        var tenantId = graphApiConfig["tenantId"];

        // Value from app registration
        var clientId = graphApiConfig["appId"];

        // using Azure.Identity;


        // using Azure.Identity;
        var options = new UsernamePasswordCredentialOptions
        {
            AuthorityHost = AzureAuthorityHosts.AzurePublicCloud,
        };


        // https://learn.microsoft.com/dotnet/api/azure.identity.usernamepasswordcredential
        var userNamePasswordCredential = new UsernamePasswordCredential(
            userName, password, tenantId, clientId, options);

        var client = new GraphServiceClient(userNamePasswordCredential, scopes);


        var requestAllUsers = await client.Users.GetAsync();

        foreach (var user in requestAllUsers.Value)
        {
            Console.WriteLine(user.Id + ": " + user.DisplayName + " <" + user.Mail + ">");
        }


        return "Hello";
    }
}
