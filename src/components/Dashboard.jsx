import React, { useState } from 'react';
import { Home, User, Settings, Menu, X, LogOut, Bell, BarChart, Users, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const navItems = [
    { icon: Home, text: 'Dashboard' },
    { icon: User, text: 'Profile' },
    { icon: Settings, text: 'Settings' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-300 ease-in-out z-30`}>
      <div className="flex flex-col h-full w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-2xl font-semibold tracking-wide">App Name</h2>
          <button onClick={toggleSidebar} className="lg:hidden focus:outline-none">
            <X className="h-6 w-6 text-gray-300" />
          </button>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2 mt-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <button className="flex items-center w-full px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200">
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200 rounded"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <div className="flex items-center justify-between px-4 py-3">
        <button onClick={toggleSidebar} className="lg:hidden focus:outline-none">
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <Bell className="h-6 w-6" />
          </button>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-800">John Doe</span>
            <img src="/api/placeholder/40/40" alt="User Avatar" className="h-10 w-10 rounded-full object-cover shadow-lg" />
          </div>
        </div>
      </div>
    </header>
  );
};

const StatCard = ({ icon: Icon, title, value, change }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 ease-in-out">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      <Icon className="h-8 w-8 text-blue-500" />
    </div>
    <p className="text-3xl font-bold text-gray-800 mb-2">{value}</p>
    <p className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
      {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% from last month
    </p>
  </div>
);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const stats = [
    { icon: BarChart, title: 'Total Sales', value: '$54,350', change: 12.5 },
    { icon: Users, title: 'New Customers', value: '1,259', change: 5.7 },
    { icon: DollarSign, title: 'Revenue', value: '$38,250', change: -2.3 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <ul className="space-y-4">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <User className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">New user registered</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;