import LoginContent from "./LoginContent";
import OverviewContent from "./OverviewContent";
import AnalyticsContent from "./AnalyticsContent";
import ProjectsContent from "./ProjectContent";
import ReportsContent from "./ReportsContent";
import SettingsContent from "./SettingsContent";
import UsersContent from "./UsersContent";
import DataRefreshContent from "./DataRefreshContent";

const DashboardContent = ({ currentView, isLoggedIn, setIsLoggedIn }) => {
  const view = currentView || '#login';

  if (view === '#login') {
    return <LoginContent setIsLoggedIn={setIsLoggedIn} />;
  }

  if (!isLoggedIn) {
    return <LoginContent setIsLoggedIn={setIsLoggedIn} />;
  }

  switch (view) {
    case '#dashboard':
      return <OverviewContent />;
    case '#analytics':
      return <AnalyticsContent />;
    case '#projects':
      return <ProjectsContent />;
    case '#users':
      return <UsersContent />;
    case '#reports':
      return <ReportsContent />;
    case '#settings':
      return <SettingsContent />;
    case '#refresh':
      return <DataRefreshContent />;
    case '#login':
      return <LoginContent setIsLoggedIn={setIsLoggedIn} />;

    default:
      return <OverviewContent />;
  }
};

export default DashboardContent;
