import React, { useState, useRef, useEffect } from 'react';
import { User, Settings, LogOut, CreditCard, ChevronDown, Bell, Menu, Search } from 'lucide-react';
import { useNavigate } from "react-router-dom";

/**
 * @param {React.RefObject} ref - The reference to the element.
 * @param {() => void} handler - The function to call when clicking outside.
 */
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendant elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

// --- 1. Profile Icon Menu Card Component (Used inside the Header) ---
const ProfileIconMenuCard = ({ setIsLoggedIn }) => {
  // const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const profileButtonRef = useRef(null);

  // Close menu when clicking outside
  useClickOutside(menuRef, () => {
    // Only close if the click wasn't on the button itself
    if (profileButtonRef.current && !profileButtonRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  });

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const MenuItem = ({ icon: Icon, label, action, colorClass = 'text-gray-700' }) => (
    <div
      onClick={() => {
        action();
        setIsOpen(false);
      }}
      className={`group flex items-center p-3 rounded-xl cursor-pointer transition-all duration-150 hover:bg-indigo-50 active:bg-indigo-100`}
      role="menuitem"
    >
      <Icon className={`w-5 h-5 mr-3 transition-colors duration-150 ${colorClass} group-hover:text-indigo-600 group-hover:scale-105`} />
      <span className={`font-medium text-sm transition-colors duration-150 ${colorClass} group-hover:text-indigo-800`}>
        {label}
      </span>
    </div>
  );

  const handleSettings = () => window.location.hash = '#settings';
  const handleLogout = () => {

    setIsLoggedIn(false);               
    localStorage.removeItem('isLoggedIn'); 
    window.location.hash = '#login';    
  }
  return (
    <div className="relative" ref={menuRef}>
      <button
        ref={profileButtonRef}
        onClick={toggleMenu}
        className="flex items-center justify-center p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
        aria-expanded={isOpen}
        aria-controls="profile-menu-card"
        aria-label="Open user menu"
      >
        <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
          JD
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-500 dark:text-gray-300 ml-1 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          id="profile-menu-card"
          className="absolute right-0 mt-3 w-72 origin-top-right bg-white dark:bg-gray-800 rounded-2xl shadow-2xl ring-1 ring-black ring-opacity-10 p-3 animate-slide-down"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="flex items-center p-3 border-b border-gray-100 dark:border-gray-700 mb-2">
            <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white mr-3 flex-shrink-0">
              <User className="w-6 h-6" />
            </div>
            <div className='truncate'>
              <p className="text-sm font-bold text-gray-900 dark:text-white truncate">Jane Doe</p>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium truncate">janedoe@example.com</p>
            </div>
          </div>

          <div className="space-y-1">
            <MenuItem icon={Settings} label="Account Settings" action={handleSettings} />
            <MenuItem
              icon={LogOut}
              label="Sign Out"
              action={handleLogout}
              colorClass="text-red-500"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slideDown 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};


const Header = ({ isSidebarOpen, toggleSidebar, setIsLoggedIn }) => {
  return (
    <header className="flex items-center justify-between h-16 bg-white dark:bg-gray-800 shadow p-4 sticky top-0 z-10 w-full">

      <button
        onClick={toggleSidebar}
        className="text-gray-600 dark:text-gray-300 hover:text-blue-500 mr-4 lg:hidden"
        aria-label="Toggle Sidebar"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="relative flex-grow max-w-lg hidden md:block">
        <input
          type="text"
          placeholder="Search reports, users, or data..."
          className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>

      <div className="flex items-center space-x-4 ml-4">
        <ProfileIconMenuCard setIsLoggedIn={setIsLoggedIn} />
      </div>
    </header>
  );
};

export default Header