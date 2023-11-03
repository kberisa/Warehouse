//using Microsoft.AspNetCore.Mvc;
//using Microsoft.IdentityModel.Tokens;
//using System.IdentityModel.Tokens.Jwt;
//using System.Text;
//using Warehouse.Data;
//using Warehouse.Models;

//namespace Warehouse.Controllers
//{
//    [ApiController]
//    [Route("api/v1/[controller]")]
//    public class AuthorizationController : ControllerBase
//    {

//        private readonly WarehouseContext _context;


//        public AuthorizationController(WarehouseContext context)
//        {
//            _context = context;
//        }



//        [HttpPost("token")]
//        public IActionResult GenerateToken([FromBody] Operator operators)
//        {
//            var operBaza = _context.Operators
//                .Where(p => p.Email.Equals(operators.Email))
//                .FirstOrDefault();

//            if (operBaza == null)
//            {
//                return StatusCode(StatusCodes.Status403Forbidden, "You are not Authorized, I cannot find the operator");
//            }

//            if (!BCrypt.Net.BCrypt.Verify(operators.Password, operBaza.Password))
//            {
//                return StatusCode(StatusCodes.Status403Forbidden, "You are not Authorized, Password is not correct");
//            }

//            var tokenHandler = new JwtSecurityTokenHandler();
//            var key = Encoding.UTF8.GetBytes("mysecretkey");

//            var tokenDescriptor = new SecurityTokenDescriptor
//            {
//                Expires = DateTime.UtcNow.Add(TimeSpan.FromHours(8)),
//                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256)
//            };

//            var token = tokenHandler.CreateToken(tokenDescriptor);
//            var jwt = tokenHandler.WriteToken(token);

//            return Ok(jwt);
//        }
//    }
//}