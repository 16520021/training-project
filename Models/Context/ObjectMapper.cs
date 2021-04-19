using AutoMapper;
using training_project.Dto.File;
using training_project.Dto.Folder;

namespace training_project.Models.Context
{
    public class ObjectMapper: Profile
    {
        public ObjectMapper()
        {
            CreateMap<FileDto, File>();
            CreateMap<File, FileDto>();

            CreateMap<FolderDto, Folder>();
            CreateMap<Folder, FolderDto>();
        }
    }
}
