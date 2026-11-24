
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '⌂' },
    { name: 'Fake Job Detector', path: '/fake-job-detector', icon: '🛡️' },
    { name: 'CV Builder', path: '/cv-builder', icon: '📄' },
    { name: 'My CV', path: '/my-cv', icon: '📁' },
    { name: 'Skill Recommendation', path: '/skill-recommendation', icon: '🎯' },
    { name: 'CV-Job Matcher', path: '/job-cv-matcher', icon: '🔗' },
    { name: 'History', path: '/history', icon: '🕒' },
    { name: 'Profile', path: '/profile', icon: '👤' }
  ];

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col">

      <div className="px-6 py-7 border-b border-gray-100">
        <Link to="/" className="text-2xl font-extrabold text-blue-700">
          JobShield<span className="text-gray-800"> AI</span>
        </Link>
        <p className="text-xs text-gray-400 mt-1">
          Your Career Safety Partner
        </p>
      </div>

      <div className="px-4 py-6 flex-1">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">
          Main Menu
        </p>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                  active
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-100">
        <div className="bg-blue-50 rounded-xl p-4 mb-4">
          <p className="font-semibold text-blue-800 text-sm">
            Stay Protected!
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Always verify job offers before applying.
          </p>
        </div>

        <Link
          to="/login"
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 rounded-xl"
        >
          <span>↪</span>
          Logout
        </Link>
      </div>

    </aside>
  );
}

export default Sidebar;
