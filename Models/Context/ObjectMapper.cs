using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using training_project.Dto.File;

namespace training_project.Models.Context
{
    public class ObjectMapper: Profile
    {
        public ObjectMapper()
        {
            CreateMap<FileDto, File>();
            CreateMap<File, FileDto>();
        }
    }
}
