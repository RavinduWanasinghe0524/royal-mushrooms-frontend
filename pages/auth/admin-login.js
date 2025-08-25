import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const AdminLogin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    adminCode: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAdminCode, setShowAdminCode] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate admin login validation
      setTimeout(() => {
        // Simple validation for demo (in real app, use proper authentication)
        if (formData.adminCode !== '12345') {
          setError('Invalid admin code. Please contact system administrator.');
          setIsLoading(false);
          return;
        }

        // Store admin data in localStorage
        const adminData = {
          id: Math.random().toString(36).substr(2, 9),
          email: formData.email,
          name: 'Administrator',
          type: 'admin',
          permissions: ['user_management', 'consultation_management', 'payment_management', 'chat_monitoring'],
          loginTime: new Date().toISOString()
        };
        
        localStorage.setItem('user', JSON.stringify(adminData));
        router.push('/admin/dashboard');
      }, 2000);
    } catch (err) {
      setError('Login failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-purple-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative overflow-hidden border border-purple-200">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-100 rounded-full -ml-12 -mb-12 opacity-50"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h1 className="text-3xl font-bold text-purple-800 mb-2">Admin Portal</h1>
            <p className="text-gray-600">Secure administrator access</p>
          </div>

          {/* Admin Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Admin Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                placeholder="Enter admin email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                placeholder="Enter password"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="adminCode" className="block text-sm font-medium text-gray-700">
                  Admin Security Code
                </label>
                <button
                  type="button"
                  onClick={() => setShowAdminCode(!showAdminCode)}
                  className="text-xs text-purple-600 hover:text-purple-500"
                >
                  {showAdminCode ? 'Hide' : 'Show'}
                </button>
              </div>
              <input
                type={showAdminCode ? "text" : "password"}
                id="adminCode"
                name="adminCode"
                required
                value={formData.adminCode}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                placeholder="Enter security code"
              />
              <p className="text-xs text-gray-500 mt-1">Demo code: 12345</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <div className="flex">
                <div className="flex-shrink-0">
                  <span className="text-yellow-600">⚠️</span>
                </div>
                <div className="ml-2">
                  <p className="text-xs text-yellow-700">
                    Admin access grants full system privileges. Ensure secure environment before login.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:from-purple-600 hover:to-indigo-700 transition duration-300 transform hover:scale-[1.01] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Authenticating...
                </div>
              ) : (
                'Admin Sign In'
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center space-y-4">
            <div className="border-t pt-4">
              <Link 
                href="/auth/login" 
                className="text-sm text-green-600 hover:text-green-500 font-medium hover:underline"
              >
                ← User Login
              </Link>
            </div>

            <div className="mt-4">
              <Link 
                href="/" 
                className="text-sm text-gray-500 hover:text-gray-700 hover:underline"
              >
                ← Back to Home
              </Link>
            </div>
          </div>

          {/* Admin Features Preview */}
          <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-purple-600">🎛️</span>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-purple-800">
                  Admin Dashboard Features
                </h3>
                <div className="mt-2 text-sm text-purple-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li>User & membership management</li>
                    <li>Consultation booking oversight</li>
                    <li>Payment & billing management</li>
                    <li>Live chat monitoring</li>
                    <li>System analytics & reports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
