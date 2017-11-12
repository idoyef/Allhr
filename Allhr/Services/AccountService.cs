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
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using Allhr.Models;
using Allhr.Providers;
using Allhr.Results;
using Allhr.Repositories;
using Allhr.Allhr.DAL;

namespace Allhr.Services
{
    public class AccountService
    {
        public void SaveCandidate(Candidate candidate)
        {
            //using (var accountRepository = new AccountRepository())
            //{
            //    accountRepository.SaveCandidate(candidate);
            //}

            using (var repo = new AllhrContext())
            {
                repo.CandidateDb.Add(candidate);
                repo.SaveChanges();
            }
        }
       
    }
}
