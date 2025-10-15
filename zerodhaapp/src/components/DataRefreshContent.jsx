import { CheckCircle, RefreshCcw } from "lucide-react";
import { useState } from "react";

const DataRefreshContent = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [logMessages, setLogMessages] = useState([]);
    const [lastRefresh, setLastRefresh] = useState(localStorage.getItem('lastRefresh') || 'Never');
    
    const refreshSteps = [
        { message: 'Initializing connection to primary data warehouse...', duration: 1000, increment: 10 },
        { message: 'Validating data schema integrity...', duration: 2000, increment: 15 },
        { message: 'Fetching latest sales records (45,000 documents)...', duration: 3000, increment: 30 },
        { message: 'Processing and indexing new customer data...', duration: 3000, increment: 30 },
        { message: 'Optimizing cache layers and finalizing sync...', duration: 1000, increment: 10 },
    ];
    
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    const startRefresh = async () => {
        if (isRefreshing) return;

        setIsRefreshing(true);
        setProgress(0);
        setLogMessages([{ time: new Date().toLocaleTimeString(), message: '--- Refresh Started ---', type: 'info' }]);
        
        let currentProgress = 0;
        
        for (const step of refreshSteps) {
            setLogMessages(prev => [...prev, { 
                time: new Date().toLocaleTimeString(), 
                message: step.message, 
                type: 'process' 
            }]);

            await delay(step.duration);

            currentProgress += step.increment;
            setProgress(Math.min(currentProgress, 100));
        }

        await delay(1000); 
        setLogMessages(prev => [...prev, { 
            time: new Date().toLocaleTimeString(), 
            message: 'Data Synchronization Complete!', 
            type: 'success' 
        }]);

        setIsRefreshing(false);
        setProgress(100);
        
        const now = new Date().toLocaleString();
        setLastRefresh(now);
        localStorage.setItem('lastRefresh', now);
    };

    const getProgressColor = () => {
        if (progress === 100) return 'bg-green-500';
        if (isRefreshing) return 'bg-blue-500';
        return 'bg-gray-400';
    };
    
    const getStatusText = () => {
        if (isRefreshing) {
            const lastMessage = logMessages[logMessages.length - 1]?.message || 'Starting...';
            return `In Progress: ${lastMessage}`;
        }
        if (progress === 100) return 'Refresh Complete';
        if (logMessages.length > 1) return 'Ready to refresh again';
        return 'Awaiting Manual Refresh';
    }

    return (
        <main className="p-4 sm:p-8">
            <h1 className="text-3xl font-extrabold text-teal-600 dark:text-teal-400 mb-6 flex items-center">
                <RefreshCcw className="w-8 h-8 mr-3"/> Data Synchronization Center
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Control Panel */}
                <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Control Panel</h2>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Manually trigger the process to pull the latest data from all connected sources.
                    </p>

                    <button
                        onClick={startRefresh}
                        disabled={isRefreshing}
                        className={`w-full flex items-center justify-center font-semibold py-3 px-4 rounded-xl shadow-lg transition duration-150 transform hover:scale-[1.02] ${
                            isRefreshing 
                            ? 'bg-gray-400 cursor-not-allowed text-gray-700' 
                            : 'bg-teal-500 hover:bg-teal-600 text-white'
                        }`}
                    >
                        {isRefreshing ? (
                            <>
                                <RefreshCcw className="w-5 h-5 mr-2 animate-spin"/> Refreshing...
                            </>
                        ) : (
                            <>
                                <RefreshCcw className="w-5 h-5 mr-2"/> Start Data Refresh
                            </>
                        )}
                    </button>
                    
                    <div className="mt-6 text-sm dark:text-gray-300">
                        <p className='font-medium'>Last Successful Refresh:</p>
                        <p className='text-gray-500 dark:text-gray-400'>{lastRefresh}</p>
                    </div>
                </div>

                <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Live Status</h2>
                    
                    <div className="mb-6">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Overall Progress: <span className='font-bold'>{progress}%</span>
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 overflow-hidden">
                            <div 
                                className={`h-full rounded-full transition-all duration-500 ease-out ${getProgressColor()}`} 
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <p className={`text-xs mt-1 font-medium ${progress === 100 ? 'text-green-500' : 'text-blue-500 dark:text-blue-400'}`}>
                            {getStatusText()}
                        </p>
                    </div>

                    <div className="h-64 bg-gray-50 dark:bg-gray-700 p-4 rounded-xl overflow-y-auto border dark:border-gray-600">
                        {logMessages.slice().reverse().map((log, index) => ( // Reverse to show latest first
                            <div key={index} className={`flex text-sm border-b dark:border-gray-600 py-1 last:border-b-0 ${log.type === 'success' ? 'text-green-500 font-semibold' : 'text-gray-700 dark:text-gray-300'}`}>
                                <span className='mr-3 text-gray-500 dark:text-gray-400 flex-shrink-0'>[{log.time}]</span>
                                {log.type === 'success' ? <CheckCircle className='w-4 h-4 mr-2 text-green-500 flex-shrink-0'/> : null}
                                <span>{log.message}</span>
                            </div>
                        ))}
                        {logMessages.length === 0 && (
                             <div className="text-center text-gray-500 dark:text-gray-400 p-16">No log history yet. Click 'Start Data Refresh' to begin.</div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DataRefreshContent ;