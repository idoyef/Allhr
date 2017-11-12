using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Linq;
using System.Data;
using System.Collections.Generic;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using Allhr.Models;
using Allhr.Providers;
using Allhr.Results;
using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Core.Objects;


namespace Allhr.Repositories
{
    public class AccountRepository : DbContext
    {
        public DbSet<Candidate> CandidateDb { get; set; }

        public void SaveCandidate(Candidate candidate)
        {             
            CandidateDb.Add(candidate);
            SaveChanges();   
        }
    }
}
