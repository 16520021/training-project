using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using training_project.Dto.File;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace training_project.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class FileController : ControllerBase
    {
        private readonly IFileService fileService;

        public FileController(IFileService fileService)
        {
            this.fileService = fileService;
        }
        // GET: api/<FileController>
        [HttpGet]
        public IEnumerable<FileDto> GetFiles([FromQuery] FileFilter input)
        {
            var result = fileService.GetFiles(input);
            Console.WriteLine(result);
            return result;
        }

        // GET api/<FileController>/5
        [HttpGet("{id}")]
        public FileDto GetFileById(int id)
        {
            return fileService.GetFileForEdit(id);
        }

        [HttpPost]
        public void CreateOrEditFile(FileDto fileinput)
        {
            fileService.CreateOrEditFile(fileinput);
        }

        // DELETE api/<FileController>/5
        [HttpDelete("{id}")]
        public void DeleteFile(int id)
        {
            fileService.DeleteFile(id);
        }
    }
}
