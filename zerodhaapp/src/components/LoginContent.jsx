import { LogIn } from "lucide-react";
import { useState } from "react";

const LoginContent = ({ setIsLoggedIn }) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (email === 'admin@gmail.com' && password === '123') {
            setIsLoggedIn(true);               
            localStorage.setItem('isLoggedIn', 'true'); 
            window.location.hash = '#dashboard';
        } else {
            setError('Invalid credentials.');
        }
    };

    return (
        <div className="lg:max-w-[85%] flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 font-sans p-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transform transition duration-500">
                <div className="flex justify-center mb-4">
                    <LogIn className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-2">
                    Sign In
                </h2>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
                    Access your secure dashboard.
                </p>

                {error && (
                    <div className="p-3 mb-4 text-sm text-red-800 bg-red-100 rounded-lg dark:bg-red-900 dark:text-red-300" role="alert">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 transition"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 transition"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition transform hover:scale-[1.005]"
                    >
                        Sign in
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                    </a>
                </div>
            </div>
        </div>
    );
};


export default LoginContent; 