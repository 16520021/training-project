using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using training_project.Dto.Folder;
using training_project.Models;
using training_project.Models.Context;

namespace training_project.Services
{
    public class FolderServices : BaseServiceContext, IFolderService
    {
        public FolderServices(AppDbContext context, IMapper mapper): base (context, mapper)
        {

        }

        #region PUBLIC METHOD
        public void CreateOrEditFolder(FolderDto fold)
        {
            if (fold.id != 0)
            {
                Update(fold);
            } else
            {
                Create(fold);
            }
        }

        public void DeleteFolder(int id)
        {
            var foldEntity = _context.Folders.Where(x => !x.isDeleted).SingleOrDefault(x => x.id == id);
            if (foldEntity != null)
            {
                foldEntity.isDeleted = true;
                _context.SaveChanges();
            }
        }

        public List<FolderDto> GetFolders(FolderFilter input)
        {
            var query = _context.Folders.AsNoTracking().Where(x => !x.isDeleted);
            if (input != null)
            {
                if (input.owner != null)
                {
                    query = query.Where(x => x.owner == input.owner);
                }

                if (input.parentID != 0)
                {
                    query = query.Where(x => x.parentID == input.parentID);
                } else
                {
                    query = query.Where(x => x.parentID == null);
                }
            }

            var listOfFolder = query.OrderBy(x => x.parentID).ToList();
            return listOfFolder.Select(item => _mapper.Map<FolderDto>(item)).ToList();
        }

        public FolderDto GetFolderForEdit(int id)
        {
            var fold = _context.Folders.AsNoTracking().Where(x => !x.isDeleted).SingleOrDefault(x => x.id == id);
            FolderDto result = _mapper.Map<FolderDto>(fold);
            return result;
        }
        #endregion

        #region PRIVATE METHOD
        private void Create(FolderDto folder)
        {
            var folderEntity = _mapper.Map<Folder>(folder);
            _context.Folders.Add(folderEntity);
            _context.SaveChanges();
        }

        private void Update(FolderDto folder)
        {
            var folderEntity = _context.Folders.Where(x => !x.isDeleted).SingleOrDefault(x => x.id == folder.id);
            if (folderEntity != null)
            {
                _mapper.Map<FolderDto,Folder>(folder, folderEntity);
                //_context.Set<Folder>().Update(folderEntity);
                //folderEntity.folderName = "antran";
                _context.SaveChanges();
            }
        }
        #endregion
    }
}
