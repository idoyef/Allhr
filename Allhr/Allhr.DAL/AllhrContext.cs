using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using Allhr.Models;

namespace Allhr.Allhr.DAL
{
    public class AllhrContext: DbContext
    {
        public DbSet<Candidate> CandidateDb { get; set; }


    }
}