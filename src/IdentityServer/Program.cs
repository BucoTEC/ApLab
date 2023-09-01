var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

builder.Services.AddIdentityServer() .AddInMemoryClients(Config.Clients)
                .AddInMemoryApiScopes(Config.ApiScopes)
                .AddInMemoryIdentityResources(Config.IdentityResources)
                .AddTestUsers(TestUsers.Users)
                .AddDeveloperSigningCredential();

                //TODO finish identity server configuration

app.MapGet("/", () => "Hello World!");

app.UseIdentityServer();

app.Run();
