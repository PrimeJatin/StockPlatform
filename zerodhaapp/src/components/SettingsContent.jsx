import { Bell, Globe, Settings, Lock } from "lucide-react";
import { useEffect, useState } from "react";

// --- 3g. New Settings Content Component ---
const SettingsContent = () => {
    const [activeTab, setActiveTab] = useState('general');

    const SettingItem = ({ title, description, control }) => (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b dark:border-gray-700">
            <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
            </div>
            <div className="mt-3 sm:mt-0">
                {control}
            </div>
        </div>
    );
    
    // Toggle Control Component (Example)
    const Toggle = ({ enabled, setEnabled }) => (
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" checked={enabled} onChange={() => setEnabled(prev => !prev)} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
    );

    const [darkMode, setDarkMode] = useState(true);
    const [emailAlerts, setEmailAlerts] = useState(true);

    useEffect(() => {
        // Mock dark mode control that actually applies the dark class to the HTML element
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const renderContent = () => {
        switch (activeTab) {
            case 'general':
                return (
                    <div className="space-y-6">
                        <SettingItem 
                            title="Dark Mode"
                            description="Toggle between light and dark themes for the dashboard interface."
                            control={<Toggle enabled={darkMode} setEnabled={setDarkMode} />}
                        />
                         <SettingItem 
                            title="Language"
                            description="Select the preferred language for the application interface."
                            control={
                                <select className="p-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500">
                                    <option>English (US)</option>
                                    <option>Spanish (ES)</option>
                                    <option>French (FR)</option>
                                </select>
                            }
                        />
                        <SettingItem 
                            title="Time Zone"
                            description="Set your local time zone for accurate data reporting."
                            control={
                                <input type="text" defaultValue="EST (UTC-5)" readOnly className="p-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                            }
                        />
                    </div>
                );
            case 'security':
                return (
                    <div className="space-y-6">
                        <SettingItem 
                            title="Change Password"
                            description="Update your account password for enhanced security."
                            control={<button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition duration-150 transform hover:scale-[1.02]">Change Password</button>}
                        />
                        <SettingItem 
                            title="Two-Factor Authentication (2FA)"
                            description="Enable 2FA to require an extra code when logging in."
                            control={<Toggle enabled={false} setEnabled={() => {}} />} 
                        />
                         <SettingItem 
                            title="Session Log"
                            description="View and manage active login sessions."
                            control={<button className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded-xl transition shadow-md">View Sessions</button>}
                        />
                    </div>
                );
            case 'notifications':
                return (
                    <div className="space-y-6">
                        <SettingItem 
                            title="Email Alerts"
                            description="Receive essential updates and error notifications via email."
                            control={<Toggle enabled={emailAlerts} setEnabled={setEmailAlerts} />}
                        />
                        <SettingItem 
                            title="Project Deadline Reminders"
                            description="Receive automatic reminders for upcoming project deadlines."
                            control={<Toggle enabled={true} setEnabled={() => {}} />}
                        />
                        <SettingItem 
                            title="Sound Notifications"
                            description="Play a sound when a new critical event occurs."
                            control={<Toggle enabled={false} setEnabled={() => {}} />}
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    const navItems = [
        { key: 'general', name: 'General', icon: Globe },
        { key: 'security', name: 'Security', icon: Lock },
        { key: 'notifications', name: 'Notifications', icon: Bell },
    ];

    const activeNavClass = "bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 font-bold border-l-4 border-blue-600 dark:border-blue-400";
    const inactiveNavClass = "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50";

    return (
        <main className="p-4 sm:p-8">
            <h1 className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-8 flex items-center">
                <Settings className="w-8 h-8 mr-3"/> Application Settings
            </h1>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl flex flex-col lg:flex-row min-h-[60vh]">
                
                {/* Settings Sidebar/Navigation */}
                <nav className="w-full lg:w-64 p-6 border-b lg:border-r lg:border-b-0 dark:border-gray-700">
                    <ul className="space-y-2">
                        {navItems.map(item => (
                            <li key={item.key}>
                                <button
                                    onClick={() => setActiveTab(item.key)}
                                    className={`flex items-center w-full p-3 rounded-lg text-left transition ${
                                        activeTab === item.key ? activeNavClass : inactiveNavClass
                                    }`}
                                >
                                    <item.icon className="w-5 h-5 mr-3"/>
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Settings Content Panel */}
                <div className="flex-1 p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 capitalize">
                        {activeTab} Settings
                    </h2>
                    {renderContent()}
                </div>
            </div>
        </main>
    );
};

export default SettingsContent ;