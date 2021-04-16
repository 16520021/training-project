using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using training_project.Models;

namespace training_project.Dto.File
{
    public class FileDto: FullAuditModel
    {
        public string extension { get; set; }
        public string fileName { get; set; }
    }
}
