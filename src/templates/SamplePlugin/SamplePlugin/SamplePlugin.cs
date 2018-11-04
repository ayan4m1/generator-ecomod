using Eco.Core.Plugins.Interfaces;

namespace <%= name %>
{
    public class <%= name %> : IModKitPlugin
    {
        public string GetStatus()
        {
            return GetType().FullName;
        }
    }
}
