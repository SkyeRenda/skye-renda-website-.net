using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace skye_website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileProcessingController : ControllerBase
    {
        private const string _connectionString = "DefaultEndpointsProtocol=https;AccountName=skyewebsite;AccountKey=Cah8BX4pvg3QGrpnnfOgL3ecGrgp7W5SwdsvYPhUlKeckFyziCjHeKrm01EbsOmoM2Th7rI2xaVl+AStTgYGYw==;EndpointSuffix=core.windows.net";
        [HttpGet("[action]")]        
        
        public async Task<IActionResult> DownloadFile()
        {
            BlobClient blobClient = new BlobClient(_connectionString, "skye-website", "CV - Skye Thomas Renda.pdf");

            using(var stream = new MemoryStream())
            {
                await blobClient.DownloadToAsync(stream);
                stream.Position= 0;
                var contentType = (await blobClient.GetPropertiesAsync()).Value.ContentType;
                return File(stream.ToArray(), contentType, blobClient.Name);
            }
        }
    }
}
