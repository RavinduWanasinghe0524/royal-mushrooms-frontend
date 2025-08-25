import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday } from 'date-fns';

const AdminDashboard = () => {
  const router = useRouter();
  const [adminUser, setAdminUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [dashboardData, setDashboardData] = useState({
    users: [],
    consultations: [],
    payments: [],
    messages: [],
    memberships: []
  });

  useEffect(() => {
    // Check if user is admin
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user.type || user.type !== 'admin') {
      router.push('/auth/admin-login');
      return;
    }
    setAdminUser(user);

    // Load dashboard data
    loadDashboardData();
  }, [router]);

  const loadDashboardData = () => {
    // Simulate loading data from localStorage or API
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const consultations = JSON.parse(localStorage.getItem('consultationBookings') || '[]');
    const payments = JSON.parse(localStorage.getItem('payments') || '[]');
    const messages = JSON.parse(localStorage.getItem('chatMessages') || '[]');
    const memberships = JSON.parse(localStorage.getItem('memberships') || '[]');

    // Generate sample data if none exists
    if (users.length === 0) {
      const sampleUsers = generateSampleUsers();
      const sampleConsultations = generateSampleConsultations();
      const samplePayments = generateSamplePayments();
      const sampleMessages = generateSampleMessages();
      const sampleMemberships = generateSampleMemberships();

      localStorage.setItem('users', JSON.stringify(sampleUsers));
      localStorage.setItem('consultationBookings', JSON.stringify(sampleConsultations));
      localStorage.setItem('payments', JSON.stringify(samplePayments));
      localStorage.setItem('chatMessages', JSON.stringify(sampleMessages));
      localStorage.setItem('memberships', JSON.stringify(sampleMemberships));

      setDashboardData({
        users: sampleUsers,
        consultations: sampleConsultations,
        payments: samplePayments,
        messages: sampleMessages,
        memberships: sampleMemberships
      });
    } else {
      setDashboardData({
        users,
        consultations,
        payments,
        messages,
        memberships
      });
    }
  };

  const generateSampleUsers = () => {
    return [
      { id: '1', name: 'John Doe', email: 'john@example.com', type: 'user', hasMembership: true, membershipType: 'monthly', joinDate: '2024-01-15', lastActive: '2024-08-20' },
      { id: '2', name: 'Sarah Smith', email: 'sarah@example.com', type: 'user', hasMembership: false, joinDate: '2024-02-10', lastActive: '2024-08-19' },
      { id: '3', name: 'Mike Johnson', email: 'mike@example.com', type: 'user', hasMembership: true, membershipType: 'annual', joinDate: '2024-01-20', lastActive: '2024-08-20' },
      { id: '4', name: 'Emily Brown', email: 'emily@example.com', type: 'user', hasMembership: true, membershipType: 'quarterly', joinDate: '2024-03-05', lastActive: '2024-08-18' },
      { id: '5', name: 'David Wilson', email: 'david@example.com', type: 'user', hasMembership: false, joinDate: '2024-07-12', lastActive: '2024-08-20' }
    ];
  };

  const generateSampleConsultations = () => {
    return [
      { id: '1', userId: '1', type: 'online', consultant: 'General Mushroom Expert', date: '2024-08-22', time: '14:00', status: 'confirmed', totalPrice: 500 },
      { id: '2', userId: '3', type: 'home', consultant: 'Cultivation Specialist', date: '2024-08-25', time: '10:00', status: 'confirmed', totalPrice: 1700 },
      { id: '3', userId: '2', type: 'online', consultant: 'Nutrition & Health Expert', date: '2024-08-21', time: '16:00', status: 'completed', totalPrice: 800 },
      { id: '4', userId: '4', type: 'online', consultant: 'General Mushroom Expert', date: '2024-08-23', time: '11:00', status: 'pending', totalPrice: 500 },
      { id: '5', userId: '5', type: 'home', consultant: 'Commercial Growing Consultant', date: '2024-08-28', time: '09:00', status: 'confirmed', totalPrice: 2000 }
    ];
  };

  const generateSamplePayments = () => {
    return [
      { id: '1', userId: '1', type: 'membership', amount: 100, date: '2024-08-01', status: 'completed', method: 'card' },
      { id: '2', userId: '3', type: 'consultation', amount: 1700, date: '2024-08-15', status: 'completed', method: 'upi' },
      { id: '3', userId: '4', type: 'membership', amount: 270, date: '2024-08-10', status: 'completed', method: 'netbanking' },
      { id: '4', userId: '2', type: 'consultation', amount: 800, date: '2024-08-18', status: 'completed', method: 'card' },
      { id: '5', userId: '1', type: 'product', amount: 450, date: '2024-08-19', status: 'pending', method: 'upi' }
    ];
  };

  const generateSampleMessages = () => {
    return [
      { id: '1', userId: '1', userName: 'John Doe', message: 'Need help with shiitake cultivation', timestamp: '2024-08-20T10:30:00Z', status: 'resolved' },
      { id: '2', userId: '3', userName: 'Mike Johnson', message: 'Question about membership benefits', timestamp: '2024-08-20T09:15:00Z', status: 'active' },
      { id: '3', userId: '2', userName: 'Sarah Smith', message: 'When will my order arrive?', timestamp: '2024-08-20T08:45:00Z', status: 'pending' },
      { id: '4', userId: '5', userName: 'David Wilson', message: 'Consultation booking issues', timestamp: '2024-08-19T16:20:00Z', status: 'resolved' },
      { id: '5', userId: '4', userName: 'Emily Brown', message: 'Payment failed for membership', timestamp: '2024-08-19T14:30:00Z', status: 'active' }
    ];
  };

  const generateSampleMemberships = () => {
    return [
      { id: '1', userId: '1', plan: 'monthly', startDate: '2024-08-01', endDate: '2024-09-01', amount: 100, status: 'active' },
      { id: '3', userId: '3', plan: 'annual', startDate: '2024-01-20', endDate: '2025-01-20', amount: 1000, status: 'active' },
      { id: '4', userId: '4', plan: 'quarterly', startDate: '2024-08-10', endDate: '2024-11-10', amount: 270, status: 'active' }
    ];
  };

  const getStats = () => {
    const totalUsers = dashboardData.users.length;
    const premiumUsers = dashboardData.users.filter(user => user.hasMembership).length;
    const totalRevenue = dashboardData.payments.reduce((sum, payment) => sum + payment.amount, 0);
    const pendingConsultations = dashboardData.consultations.filter(consultation => consultation.status === 'pending').length;
    const activeChats = dashboardData.messages.filter(message => message.status === 'active').length;

    return {
      totalUsers,
      premiumUsers,
      totalRevenue,
      pendingConsultations,
      activeChats
    };
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  const stats = getStats();

  if (!adminUser) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Royal Mushrooms Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{adminUser.name}</p>
                <p className="text-xs text-gray-600">Administrator</p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-full">
                <span className="text-2xl">👥</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full">
                <span className="text-2xl">💎</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Premium Users</p>
                <p className="text-2xl font-bold text-gray-900">{stats.premiumUsers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-full">
                <span className="text-2xl">💰</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">₹{stats.totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 rounded-full">
                <span className="text-2xl">📅</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending Consultations</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pendingConsultations}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-full">
                <span className="text-2xl">💬</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Chats</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeChats}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {[
                { id: 'overview', name: 'Overview', icon: '📊' },
                { id: 'users', name: 'Users', icon: '👥' },
                { id: 'consultations', name: 'Consultations', icon: '🎯' },
                { id: 'payments', name: 'Payments', icon: '💳' },
                { id: 'chats', name: 'Live Chats', icon: '💬' },
                { id: 'memberships', name: 'Memberships', icon: '💎' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Dashboard Overview</h3>
                
                {/* Recent Activity */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-3">Recent Consultations</h4>
                    <div className="space-y-2">
                      {dashboardData.consultations.slice(0, 5).map((consultation) => {
                        const user = dashboardData.users.find(u => u.id === consultation.userId);
                        return (
                          <div key={consultation.id} className="flex justify-between items-center text-sm">
                            <span>{user?.name || 'Unknown'} - {consultation.type}</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              consultation.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                              consultation.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {consultation.status}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-3">Recent Payments</h4>
                    <div className="space-y-2">
                      {dashboardData.payments.slice(0, 5).map((payment) => {
                        const user = dashboardData.users.find(u => u.id === payment.userId);
                        return (
                          <div key={payment.id} className="flex justify-between items-center text-sm">
                            <span>{user?.name || 'Unknown'} - ₹{payment.amount}</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              payment.status === 'completed' ? 'bg-green-100 text-green-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {payment.status}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">User Management</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Membership</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {dashboardData.users.map((user) => (
                        <tr key={user.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium text-gray-700">{user.name.charAt(0)}</span>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                <div className="text-sm text-gray-500">{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              user.hasMembership 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {user.hasMembership ? `${user.membershipType} Premium` : 'Free'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {format(new Date(user.joinDate), 'MMM dd, yyyy')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {format(new Date(user.lastActive), 'MMM dd, yyyy')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-purple-600 hover:text-purple-900 mr-3">View</button>
                            <button className="text-red-600 hover:text-red-900">Suspend</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Consultations Tab */}
            {activeTab === 'consultations' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Consultation Management</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Consultant</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {dashboardData.consultations.map((consultation) => {
                        const user = dashboardData.users.find(u => u.id === consultation.userId);
                        return (
                          <tr key={consultation.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {user?.name || 'Unknown User'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                consultation.type === 'online' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                              }`}>
                                {consultation.type}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {consultation.consultant}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {format(new Date(consultation.date), 'MMM dd, yyyy')} {consultation.time}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              ₹{consultation.totalPrice}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                consultation.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                consultation.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                consultation.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {consultation.status}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Other tabs would continue here... */}
            {activeTab === 'payments' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Management</h3>
                <div className="text-center py-12 text-gray-500">
                  Payment management interface would be implemented here...
                </div>
              </div>
            )}

            {activeTab === 'chats' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Chat Monitoring</h3>
                <div className="text-center py-12 text-gray-500">
                  Live chat monitoring interface would be implemented here...
                </div>
              </div>
            )}

            {activeTab === 'memberships' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Membership Management</h3>
                <div className="text-center py-12 text-gray-500">
                  Membership management interface would be implemented here...
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
