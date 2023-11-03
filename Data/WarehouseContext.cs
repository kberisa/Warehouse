using Microsoft.EntityFrameworkCore;
using Warehouse.Models;

namespace Warehouse.Data
{
    public class WarehouseContext : DbContext
    {
        public WarehouseContext(DbContextOptions<WarehouseContext> options) : base(options) { }

        public DbSet<WarehouseData> warehouse { get; set; }
        //public DbSet<Operator> Operators { get; set; }
    }
}
