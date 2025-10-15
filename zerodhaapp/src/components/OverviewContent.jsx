// --- 3a. Overview Content (Original Dashboard) ---
const StatCard = ({ title, value, change }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-[1.02]">
    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase">{title}</h3>
    <p className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">{value}</p>
    <p className={`text-sm font-medium ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
      {change} this month
    </p>
  </div>
);

const OverviewContent = () => {
  return (
    <main className="p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 dark:text-white mb-6 text-center">System Overview</h1>

      {/* Stats Grid */}
      <div className="text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Sales" value="$82.3K" change="+15.2%" />
        <StatCard title="New Customers" value="4,120" change="+8.1%" />
        <StatCard title="Avg. Order Value" value="$145.50" change="-1.9%" />
        <StatCard title="Inventory Low" value="34 Items" change="—" />
      </div>

      {/* Main Content Area: Chart & Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Sales Chart Area */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl text-center font-semibold text-gray-800 dark:text-white mb-4">Quarterly Growth</h2>
          <div className="h-80 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
            [Placeholder for a detailed Line Chart]
          </div>
        </div>

        {/* Recent Orders Widget */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl text-center font-semibold text-gray-800 dark:text-white mb-4">Recent Orders</h2>
          <ul className="space-y-4">
            {['#8901', '#8900', '#8899', '#8898'].map((id, index) => (
              <li key={id} className="text-sm flex justify-between items-center border-b pb-2 border-gray-100 dark:border-gray-700 last:border-b-0">
                <span className="font-medium text-gray-700 dark:text-gray-300">{id}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${index % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {index % 2 === 0 ? 'Completed' : 'Pending'}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default OverviewContent