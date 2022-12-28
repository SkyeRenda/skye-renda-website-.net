using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace skye_website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        [HttpGet]

        public string Get() { return "hello world"; }
    }
}
