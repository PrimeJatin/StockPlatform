import { Edit, Filter, Search, Trash2, Users } from "lucide-react";

const UsersContent = () => {
    const users = [
        { id: 101, name: 'Alice Johnson', email: 'alice.j@corp.com', role: 'Admin', status: 'Active', avatar: 'AJ' },
        { id: 102, name: 'Bob Smith', email: 'bob.s@corp.com', role: 'Editor', status: 'Active', avatar: 'BS' },
        { id: 103, name: 'Charlie Brown', email: 'charlie.b@corp.com', role: 'Viewer', status: 'Inactive', avatar: 'CB' },
        { id: 104, name: 'Diana Prince', email: 'diana.p@corp.com', role: 'Admin', status: 'Active', avatar: 'DP' },
    ];

    const UserRow = ({ user }) => {
        const statusClass = user.status === 'Active' 
            ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' 
            : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100';
        
        const roleClass = user.role === 'Admin' ? 'font-bold text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300';

        return (
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white ${user.role === 'Admin' ? 'bg-blue-500' : 'bg-gray-400'}`}>
                            {user.avatar}
                        </div>
                        <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm ${roleClass}`}>{user.role}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}`}>
                        {user.status}
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition" title="Edit">
                        <Edit className="w-5 h-5" />
                    </button>
                    <button className="text-red-500 hover:text-red-700 dark:hover:text-red-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition ml-2" title="Delete">
                        <Trash2 className="w-5 h-5" />
                    </button>
                </td>
            </tr>
        );
    };

    return (
        <main className="p-4 sm:p-8">
            <h1 className="text-3xl font-extrabold text-purple-600 dark:text-purple-400 mb-6 flex items-center">
                <Users className="w-8 h-8 mr-3"/> User Management
            </h1>
            
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
                <div className="relative w-full md:w-80">
                    <input 
                      type="text" 
                      placeholder="Search users..." 
                      className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                
                <div className="flex space-x-4">
                    <button className="flex items-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold py-2 px-4 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                        <Filter className="w-4 h-4 mr-2"/> Filter
                    </button>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg transition duration-150 transform hover:scale-105">
                        + Add New User
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Role
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
                        {users.map(user => (
                            <UserRow key={user.id} user={user} />
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8 p-4 bg-purple-50 dark:bg-gray-700 border-l-4 border-purple-500 text-sm text-gray-600 dark:text-gray-300 rounded-r-lg">
                <p className="font-semibold">Next Step:</p>
                <p>This table is ready for integration with a backend service to display and manage real-time user data.</p>
            </div>
        </main>
    );
};

export default UsersContent;