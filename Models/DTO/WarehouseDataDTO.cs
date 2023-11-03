namespace Warehouse.Models.DTO
{
    public class WarehouseDataDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public DateTime EntryTime { get; set; }
        public bool Available { get; set; }
    }
}
