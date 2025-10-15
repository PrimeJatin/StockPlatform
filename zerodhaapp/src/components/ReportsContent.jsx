import { Download, FileText, Plus, Search } from "lucide-react";

// --- 3e. New Reports Content Component ---
const ReportsContent = () => {
    // Mock report data
    const reports = [
        { id: 1, name: 'Q3 2025 Revenue Summary', type: 'Financial', date: '2025-10-01', status: 'Final' },
        { id: 2, name: 'Weekly Sales Performance', type: 'Sales', date: '2025-10-14', status: 'Draft' },
        { id: 3, name: 'Server Uptime Metrics (Sep)', type: 'Operational', date: '2025-10-05', status: 'Final' },
        { id: 4, name: 'Customer Feedback Analysis', type: 'Marketing', date: '2025-09-28', status: 'Pending Review' },
        { id: 5, name: 'HR Staffing Needs 2026', type: 'HR', date: '2025-10-10', status: 'Final' },
    ];

    const getStatusClasses = (status) => {
        switch (status) {
            case 'Final':
                return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
            case 'Draft':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100';
            case 'Pending Review':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
        }
    };
    
    const getTypeTextClasses = (type) => {
        switch (type) {
            case 'Financial':
                return 'text-indigo-500';
            case 'Sales':
                return 'text-green-500';
            case 'Operational':
                return 'text-red-500';
            default:
                return 'text-gray-500';
        }
    };

    return (
        <main className="p-4 sm:p-8">
            <h1 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-6 flex items-center">
                <FileText className="w-8 h-8 mr-3"/> Financial & Operational Reports
            </h1>
            
            {/* Action Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
                <div className="flex space-x-3">
                    <button className="flex items-center bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg transition duration-150 transform hover:scale-105">
                        <Plus className="w-5 h-5 mr-2"/> Generate New Report
                    </button>
                    <button className="flex items-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded-xl transition">
                        <Download className="w-5 h-5 mr-2"/> Download All
                    </button>
                </div>
                <div className="relative w-full md:w-80">
                    <input 
                      type="text" 
                      placeholder="Search reports by name or type..." 
                      className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
            </div>

            {/* Reports List/Table */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Report Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Date Created
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {reports.map(report => (
                            <tr key={report.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                    {report.name}
                                </td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${getTypeTextClasses(report.type)}`}>
                                    {report.type}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    {report.date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(report.status)}`}>
                                        {report.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button className="text-green-500 hover:text-green-700 dark:hover:text-green-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition" title="Download">
                                        <Download className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8 p-4 bg-indigo-50 dark:bg-gray-700 border-l-4 border-indigo-500 text-sm text-gray-600 dark:text-gray-300 rounded-r-lg">
                <p className="font-semibold">Implementation Note:</p>
                <p>In a real application, the "Generate New Report" button would trigger a background process or open a modal for defining report parameters before generating the data.</p>
            </div>
        </main>
    );
};

export default ReportsContent; 