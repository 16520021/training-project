using training_project.Models;

namespace training_project.Dto.File
{
    public class FileDto: FullAuditModel
    {
        public string extension { get; set; }
        public string fileName { get; set; }
    }
}
