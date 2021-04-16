﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace training_project.Models
{
    public class File: FullAuditModel
    {
        public string fileName { get; set; }
        public string extension { get; set; }
        public Folder folder { get; set; }
    }
}
