using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using training_project.Dto.Folder;

namespace training_project.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class FolderController : ControllerBase
    {
         private readonly IFolderService folderService;

        public FolderController(IFolderService folderService)
        {
            this.folderService = folderService;
        }
        // GET: api/<FolderController>
        [HttpGet]
        public IEnumerable<FolderDto> GetFolders([FromQuery] FolderFilter input)
        {
            var result = folderService.GetFolders(input);
            return result;
        }

        // GET api/<FolderController>/5
        [HttpGet("{id}")]
        public FolderDto GetFolderById(int id)
        {
            return folderService.GetFolderForEdit(id);
        }

        [HttpPut]
        public void CreateOrEditFolder(FolderDto folderinput)
        {
            folderinput.modifiedBy = User.Identity.Name;
            folderService.CreateOrEditFolder(folderinput);
        }

        // DELETE api/<FolderController>/5
        [HttpDelete("{id}")]
        public void DeleteFolder(int id)
        {
            folderService.DeleteFolder(id);
        }
    }
}
