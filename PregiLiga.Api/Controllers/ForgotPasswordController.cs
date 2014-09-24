using System;
using System.Net;
using System.Web;
using System.Web.Http;
using AcklenAvenue.Data.NHibernate;
using AttributeRouting.Web.Mvc;
using FluentNHibernate.Cfg.Db;
using NHibernate;
using PrediLiga.Data;
using PrediLiga.Domain.Entities;
using PrediLiga.Domain.Services;
using PregiLiga.Api.Models;
using RestSharp;


namespace PregiLiga.Api.Controllers
{
    public class ForgotPasswordController : ApiController
    {
        readonly IReadOnlyRepository _readOnlyRepository;


        public ForgotPasswordController(IReadOnlyRepository readOnlyRepository)
        {

            _readOnlyRepository = readOnlyRepository;
        }

        [System.Web.Mvc.HttpPost]
        [System.Web.Mvc.AcceptVerbs("POST", "HEAD")]
        [POST("forgotpassword")]
        public AuthModel ForgotPassword([FromBody] ResetpPaswordModel model)
        {

            var user = _readOnlyRepository.FirstOrDefault<Account>(x => x.Email == model.Email);
            var resp = SendSimpleMessage(model.Email, user.Password);
            if (user == null)  throw new HttpException((int)HttpStatusCode.NotFound, "User doesn't exist.");
            var authModel = new AuthModel
            {
                Email = user.Email,
                AccessToken = AuthRequestFactory.BuildEncryptedRequest(user.Email),
                role = new RoleModel
                {
                    bitMask = 2,
                    title = "admin"
                }
            };
            return authModel;
        }

        public static IRestResponse SendSimpleMessage(string destination, string password)
        {
            var client = new RestClient
            {
                BaseUrl = "https://api.mailgun.net/v2",
                Authenticator = new HttpBasicAuthenticator("api",
                    "key-8tw489mxfegaqewx93in2xo449q5p3l0")
            };
            var request = new RestRequest();
            request.AddParameter("domain",
                                "app5dcaf6d377cc4ddcb696b827eabcb975.mailgun.org", ParameterType.UrlSegment);
            request.Resource = "{domain}/messages";
            request.AddParameter("from", "sportliga@liga.com");
            String email = "<" + destination + ">";
            request.AddParameter("to", email);
            request.AddParameter("subject", "Recover Password");
            String text = "Your Password is: " + password;
            request.AddParameter("text", text);
            request.Method = Method.POST;
            return client.Execute(request);
        }

    }
}
