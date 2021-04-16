using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace training_project.Models
{
    public class Folder: FullAuditModel
    {
        public string folderName { get; set; }
        public int? parentID { get; set; }
        [ForeignKey("parentID")]
        public virtual List<Folder> subFolders { get; set; }
    }
}
