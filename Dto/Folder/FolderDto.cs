using training_project.Models;

namespace training_project.Dto.Folder
{
    public class FolderDto: FullAuditModel
    {
        public string folderName { get; set; }
        public int? parentID { get; set; }
    }
}
