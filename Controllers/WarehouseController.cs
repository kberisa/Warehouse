using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Warehouse.Data;
using Warehouse.Models;
using Warehouse.Models.DTO;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Linq;

namespace Warehouse.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WarehouseController : ControllerBase
    {
        private readonly WarehouseContext _context;

        public WarehouseController(WarehouseContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult GetWarehouse()
        {
            var items = _context.warehouse
                .Select(i => new WarehouseDataDTO
                {
                    Id = i.Id,
                    Name = i.Name,
                    Quantity = i.Quantity,
                    EntryTime = i.EntryTime,
                    Available = i.Quantity > 0
                })
                .ToList();

            return Ok(items);
        }


        [HttpGet("{id}")]
        public IActionResult GetWarehouse(int id)
        {
            var item = _context.warehouse
                .Select(i => new WarehouseDataDTO
                {
                    Id = i.Id,
                    Name = i.Name,
                    Quantity = i.Quantity,
                    EntryTime = i.EntryTime,
                    Available = i.Quantity > 0
                })
                .FirstOrDefault(i => i.Id == id);

            if (item == null)
            {
                return NotFound();
            }

            return Ok(item);
        }


        [HttpPost]
        public IActionResult CreateWarehouse([FromBody] WarehouseDataDTO itemDTO)
        {
            var newItem = new WarehouseData
            {
                Name = itemDTO.Name,
                Quantity = itemDTO.Quantity,
                EntryTime = DateTime.Now,
                Available = itemDTO.Quantity > 0
            };

            _context.warehouse.Add(newItem);
            _context.SaveChanges();

            return CreatedAtAction("GetWarehouse", new { id = newItem.Id }, new WarehouseDataDTO
            {
                Id = newItem.Id,
                Name = newItem.Name,
                Quantity = newItem.Quantity,
                EntryTime = newItem.EntryTime,
                Available = newItem.Quantity > 0
            }) ;
        }


        [HttpPut("{id}")]
        public IActionResult UpdateWarehouse(int id, [FromBody] WarehouseDataDTO itemDTO)
        {
            if (id != itemDTO.Id)
            {
                return BadRequest();
            }

            var existingItem = _context.warehouse.Find(id);
            if (existingItem == null)
            {
                return NotFound();
            }

            existingItem.Name = itemDTO.Name;
            existingItem.Quantity = itemDTO.Quantity;
            existingItem.Available = itemDTO.Quantity > 0;

            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteItem(int id)
        {
            var item = _context.warehouse.Find(id);

            if (item == null)
            {
                return NotFound();
            }

            _context.warehouse.Remove(item);
            _context.SaveChanges();

            return NoContent();
        }
        private bool ItemExists(int id)
        {
            return _context.warehouse.Any(e => e.Id == id);
        }
    }
}