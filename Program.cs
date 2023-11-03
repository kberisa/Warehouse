using Microsoft.EntityFrameworkCore;
using Warehouse.Data;
using System.Reflection;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(sgo => {
    var o = new Microsoft.OpenApi.Models.OpenApiInfo()
    {
        Title = "Warehouse API",
        Version = "v1",
        Contact = new Microsoft.OpenApi.Models.OpenApiContact()
        {
            Email = "k_berisa@hotmail.com",
            Name = "Kristijan Berisa"
        },
        Description = "This is the documentation for Warehouse API",
        License = new Microsoft.OpenApi.Models.OpenApiLicense()
        {
            Name = "Educational Licence"
        }
    };
    sgo.SwaggerDoc("v1", o);
    //var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    //var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    //sgo.IncludeXmlComments(xmlPath, includeControllerXmlComments: true);
});

builder.Services.AddCors(opcije => {
    opcije.AddPolicy("CorsPolicy",
        builder =>
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

builder.Services.AddDbContext<WarehouseContext>(o =>
    o.UseSqlServer(
        builder.Configuration.GetConnectionString(name: "WarehouseContext")
    )
);

var app = builder.Build();

app.UseSwagger(options => {
    options.SerializeAsV2 = true;
});
app.UseSwaggerUI(options => {
    options.ConfigObject.AdditionalItems.Add("requestSnippetsEnabled", true);
});
app.UseHttpsRedirection();
app.MapControllers();
app.UseStaticFiles();
app.UseCors("CorsPolicy");
app.UseDefaultFiles();
app.UseDeveloperExceptionPage();
app.MapFallbackToFile("index.html");
app.Run();
