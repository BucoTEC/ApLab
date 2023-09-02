using IdentityServer4.Models;
using IdentityServer4.Test;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

builder.Services.AddIdentityServer()
                .AddInMemoryClients(new List<Client>())
                .AddInMemoryApiScopes(new List<ApiScope>())
                .AddInMemoryIdentityResources(new List<IdentityResource>())
                .AddTestUsers(new List<TestUser>())
                .AddDeveloperSigningCredential();

app.MapGet("/", () => "Hello World!");

app.UseIdentityServer();

app.Run();
