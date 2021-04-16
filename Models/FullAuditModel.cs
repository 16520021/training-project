using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace training_project.Models
{
    public class FullAuditModel
    {
        [Key]
        public int id { get; set; }
        public string owner { get; set; }
        public string createAt { get; set; }
        public string modifedAt { get; set; }
        public string modifiedBy { get; set; }
        public bool isDeleted { get; set; }
    }
}
