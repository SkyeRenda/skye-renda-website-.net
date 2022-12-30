using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace skye_website.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileProcessingController : ControllerBase
    {
        /*private const string _connectionString = "DefaultEndpointsProtocol=https;AccountName=skyerenda;AccountKey=zPe4KvmmR7+exNPuHXo0NxyokYuTfyQ9F9rVjTWf9vr8R9gg2JD09XgpL6Okwy6B5C7t0vHxUpHf+AStLwCbsA==;EndpointSuffix=core.windows.net";
        [HttpGet("[action]")]

        public async Task<IActionResult> DownloadFile()
         {
             BlobClient blobClient = new BlobClient(_connectionString, "skyerenda", "CV - Skye Thomas Renda.pdf");

             using(var stream = new MemoryStream())
             {
                 await blobClient.DownloadToAsync(stream);
                 stream.Position= 0;
                 var contentType = (await blobClient.GetPropertiesAsync()).Value.ContentType;
                 return File(stream.ToArray(), contentType, blobClient.Name);
             }
            
        }*/
        [HttpGet("download")]
        public IActionResult GetBlobDownload()
        {
            var net = new System.Net.WebClient();
            var data = net.DownloadData("https://skyerenda.blob.core.windows.net/skyerenda/CV - Skye Thomas Renda.pdf");
            var content = new System.IO.MemoryStream(data);
            var contentType = "APPLICATION/pdf";
            var fileName = "Skye Thomas Renda.pdf";
            return File(content, contentType, fileName);
        }



    }
}
