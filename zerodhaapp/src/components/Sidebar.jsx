import { BarChart2, Briefcase, FileText, LayoutDashboard, Menu, RefreshCcw, Settings, Users } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar, currentView, isLoggedIn }) => {
  const sidebarWidth = isOpen ? 'w-64' : 'w-20';

  const menuSections = [
    {
      title: 'Core',
      items: [
        { name: 'Dashboard', icon: LayoutDashboard, href: '#dashboard' },
        { name: 'Analytics', icon: BarChart2, href: '#analytics' },
        { name: 'Projects', icon: Briefcase, href: '#projects' },
      ],
    },
    {
      title: 'Management',
      items: [
        { name: 'Users', icon: Users, href: '#users' },
        { name: 'Reports', icon: FileText, href: '#reports' },
      ],
    },
    {
      title: 'System',
      items: [{ name: 'Data Refresh', icon: RefreshCcw, href: '#refresh' }],
    },
  ];

  const handleNavClick = (e, href) => {
    if (!isLoggedIn) {
      e.preventDefault(); // stop default navigation
      window.location.hash = '#login'; // force login page
      return;
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-screen ${sidebarWidth} bg-gray-900 text-white
                  transition-all duration-300 ease-in-out flex flex-col z-20 shadow-2xl`}
    >
      <div className="flex items-center justify-between h-16 mb-6">
        {isOpen ? (
          <div className="text-2xl font-bold text-blue-400 truncate">ReactDash</div>
        ) : (
          <div className="text-2xl font-bold text-blue-400 mx-auto">R</div>
        )}
      </div>

      <nav className="flex-grow space-y-4">
        {menuSections.map((section) => (
          <div key={section.title} className="space-y-1">
            {isOpen && (
              <h3 className="text-xs uppercase font-semibold text-gray-500 tracking-widest px-3 pt-2">
                {section.title}
              </h3>
            )}

            {section.items.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition group ${
                  !isOpen && 'justify-center'
                }`}
                title={item.name}
              >
                <item.icon className={`w-5 h-5 ${isOpen && 'mr-3'}`} />
                <span
                  className={`text-sm whitespace-nowrap overflow-hidden ${
                    isOpen
                      ? 'opacity-100'
                      : 'opacity-0 absolute left-full group-hover:opacity-100 group-hover:relative group-hover:left-0'
                  }`}
                >
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        ))}

        <div className="border-t border-gray-700 pt-4 space-y-1">
          <a
            href="#settings"
            onClick={(e) => handleNavClick(e, '#settings')}
            className={`flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition group ${
              !isOpen && 'justify-center'
            }`}
            title="Settings"
          >
            <Settings className={`w-5 h-5 ${isOpen && 'mr-3'}`} />
            <span
              className={`text-sm whitespace-nowrap overflow-hidden ${
                isOpen
                  ? 'opacity-100'
                  : 'opacity-0 absolute left-full group-hover:opacity-100 group-hover:relative group-hover:left-0'
              }`}
            >
              Settings
            </span>
          </a>
        </div>
      </nav>

      <button
        onClick={toggleSidebar}
        className="mt-auto p-3 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full mx-auto"
        aria-label={isOpen ? 'Collapse Sidebar' : 'Expand Sidebar'}
      >
        <Menu className="w-6 h-6 transform transition-transform duration-300 rotate-90" />
      </button>
    </aside>
  );
};

export default Sidebar