import { Briefcase } from "lucide-react";

// --- 3c. New Projects Content Component ---
const ProjectsContent = () => {
    // Mock project data
    const projects = [
        { id: 1, name: 'Marketing Campaign Launch', status: 'In Progress', progress: 75, members: 5, date: '2025-11-01' },
        { id: 2, name: 'Database Migration v2.0', status: 'Blocked', progress: 20, members: 3, date: '2025-10-25' },
        { id: 3, name: 'Q4 Financial Report', status: 'Completed', progress: 100, members: 2, date: '2025-10-10' },
        { id: 4, name: 'Mobile App Redesign', status: 'To Do', progress: 0, members: 6, date: '2026-01-15' },
    ];

    const ProjectCard = ({ project }) => {
        let statusClass = '';
        if (project.status === 'Completed') statusClass = 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
        else if (project.status === 'In Progress') statusClass = 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100';
        else if (project.status === 'Blocked') statusClass = 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100';
        else statusClass = 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';

        return (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-t-4 border-blue-500">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate">{project.name}</h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusClass}`}>
                        {project.status}
                    </span>
                </div>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Due: {project.date}</p>

                {/* Progress Bar */}
                <div className="mb-4">
                    <div className="flex justify-between mb-1">
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Progress</span>
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{ width: `${project.progress}%` }}
                        ></div>
                    </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                    <span>Members: {project.members}</span>
                    <button className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition">View Details</button>
                </div>
            </div>
        );
    };

    return (
        <main className="p-4 sm:p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 flex items-center">
                    <Briefcase className="w-8 h-8 mr-3"/> Active Projects
                </h1>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition duration-150 transform hover:scale-105">
                    + New Project
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            <div className="mt-8 p-4 bg-yellow-50 dark:bg-gray-700 border-l-4 border-yellow-500 text-sm text-gray-600 dark:text-gray-300 rounded-r-lg">
                <p className="font-semibold">Tip:</p>
                <p>For a complete project management solution, this component would integrate with a backend database like Firestore to handle CRUD operations on projects.</p>
            </div>
        </main>
    );
};

export default ProjectsContent ;