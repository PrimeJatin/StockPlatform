import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardContent from "./components/DashboardContent";
import { useEffect, useState } from "react";

export default function App() {



  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState(window.location.hash || '#login');
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Initialize from localStorage
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn && currentView !== '#login') {
      window.location.hash = '#login';
    }
  }, [currentView, isLoggedIn]);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentView(window.location.hash || '#login');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // If user navigates to any page without login, force #login
  useEffect(() => {
    if (!isLoggedIn && currentView !== '#login') {
      window.location.hash = '#login';
    }
  }, [currentView, isLoggedIn]);

  return (
    <div className="dark flex bg-gray-100 dark:bg-gray-900 min-h-screen">

      {/* Sidebar: only show if logged in */}
      {isLoggedIn && (
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          currentView={currentView}
          isLoggedIn={isLoggedIn}
        />
      )}

      <div className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}`}>
        {/* Header: only show if logged in */}
        {isLoggedIn && <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}  setIsLoggedIn={setIsLoggedIn}/>}

        {/* Pass setIsLoggedIn to DashboardContent so login page can update state */}
        <DashboardContent
          currentView={currentView}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      </div>
    </div>
  );
}
