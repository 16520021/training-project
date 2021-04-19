using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using training_project.Models.Context;

namespace training_project.Services
{
    public class BaseServiceContext
    {
        protected readonly AppDbContext _context;
        protected readonly IMapper _mapper;

        public BaseServiceContext(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
    }
}
