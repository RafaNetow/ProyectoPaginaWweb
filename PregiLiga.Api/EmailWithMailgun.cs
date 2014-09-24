using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RestSharp;

namespace PregiLiga.Api
{
     public static class EmailWithMailgun
    {

        public static void SendMessage(string Asunto, string correo, string pasword)
        {
            var client = new RestClient
            {
                BaseUrl = "https://api.mailgun.net/v2",
                Authenticator = new HttpBasicAuthenticator("api",
                    "key-4b35os9lkhuoval5mlkz1p8gae2h3ll4")
            };
            var request = new RestRequest();
            request.AddParameter("domain",
                "app65e8749c4a5643d3bd62caa79a32ab9f.mailgun.org", ParameterType.UrlSegment);
            request.AddParameter("to", " Rafael Sequeiros <rafanetow@gmail.com>");
            request.Resource = "{domain}/messages";
            request.AddParameter("from", "SportLiga <postmaster@app65e8749c4a5643d3bd62caa79a32ab9f.mailgun.org>");
            request.AddParameter("to", correo);
            request.AddParameter("subject", Asunto);
            request.AddParameter("html", pasword);

            request.Method = Method.POST;
            client.Execute(request);
        }
    }
}

  
