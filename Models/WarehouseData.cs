namespace Warehouse.Models
{ 

    public class WarehouseData
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public DateTime EntryTime { get; set; }
        public bool Available { get; set; }
    }   
}