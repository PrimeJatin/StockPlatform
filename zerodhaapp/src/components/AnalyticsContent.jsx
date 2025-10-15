import { BarChart2, LineChart, Users } from "lucide-react";

const AnalyticsContent = () => {
    return (
        <main className="p-4 sm:p-8">
            <h1 className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
                <LineChart className="w-8 h-8 mr-3"/> Advanced Analytics
            </h1>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl">
                <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg font-medium">
                    Dive deep into critical performance metrics. This section provides detailed reporting on user behavior and system health.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-inner h-64 flex flex-col items-center justify-center">
                        <BarChart2 className="w-10 h-10 text-blue-500 mb-2"/>
                        <p className="text-gray-500 dark:text-gray-400 font-semibold">User Demographics Chart Placeholder</p>
                    </div>
                    <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-inner h-64 flex flex-col items-center justify-center">
                        <Users className="w-10 h-10 text-purple-500 mb-2"/>
                        <p className="text-gray-500 dark:text-gray-400 font-semibold">Active Session Trends Placeholder</p>
                    </div>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 dark:bg-gray-700 border-l-4 border-yellow-500 text-sm text-gray-600 dark:text-gray-300 rounded-r-lg">
                    <p className="font-semibold">Note:</p>
                    <p>To render complex visualizations, integrate a dedicated library like Recharts or Nivo here.</p>
                </div>
            </div>
        </main>
    );
};


export default AnalyticsContent;