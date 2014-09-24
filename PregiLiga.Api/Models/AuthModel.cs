using PregiLiga.Api.Controllers;

namespace PregiLiga.Api.Models
{
    public class AuthModel
    {
        public string Email { get; set; }
        public string AccessToken { get; set; }
        public RoleModel role { get; set; }
        
    }
}