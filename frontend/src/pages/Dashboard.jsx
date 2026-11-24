
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  const stats = [
    {
      title: 'CVs Created',
      value: '04',
      icon: '📄',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Jobs Analyzed',
      value: '12',
      icon: '🛡️',
      color: 'bg-green-100 text-green-700'
    },
    {
      title: 'CV Matches',
      value: '08',
      icon: '🎯',
      color: 'bg-purple-100 text-purple-700'
    }
  ];

  const features = [
    {
      title: 'Fake Job Detector',
      description: 'Check whether a job posting is real or potentially fraudulent.',
      icon: '🛡️',
      path: '/fake-job-detector',
      button: 'Analyze Job',
      color: 'bg-blue-50'
    },
    {
      title: 'AI CV Builder',
      description: 'Create a professional CV based on your skills and career goals.',
      icon: '📄',
      path: '/cv-builder',
      button: 'Build CV',
      color: 'bg-purple-50'
    },
    {
      title: 'Skill Recommendation',
      description: 'Discover missing skills and get a learning roadmap.',
      icon: '🎯',
      path: '/skill-recommendation',
      button: 'Explore Skills',
      color: 'bg-green-50'
    },
    {
      title: 'CV-Job Matcher',
      description: 'Compare your CV with a job description and find skill gaps.',
      icon: '🔗',
      path: '/job-cv-matcher',
      button: 'Match CV',
      color: 'bg-orange-50'
    }
  ];

  const activities = [
    {
      title: 'Fake Job Analysis',
      description: 'Sample job posting analyzed',
      status: 'Demo',
      date: 'Today'
    },
    {
      title: 'CV Created',
      description: 'Sample CV builder activity',
      status: 'Demo',
      date: 'Yesterday'
    },
    {
      title: 'CV-Job Matching',
      description: 'Sample matching activity',
      status: 'Demo',
      date: '2 days ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">

      <Sidebar />

      <main className="flex-1 min-w-0 p-5 md:p-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

          <div>
            <p className="text-sm text-gray-500 mb-1">
              Welcome to JobShield AI
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Dashboard Overview
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Manage your career, protect yourself from fake jobs.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
              U
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">
                User Account
              </p>
              <p className="text-xs text-gray-400">
                Job Seeker
              </p>
            </div>
          </div>

        </div>

        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-600 rounded-2xl p-6 md:p-8 text-white mb-8 shadow-lg">

          <div className="max-w-2xl">
            <p className="text-blue-100 text-sm font-medium mb-2">
              YOUR CAREER SAFETY PARTNER
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Build Your Career with Confidence!
            </h2>

            <p className="text-blue-100 text-sm md:text-base mb-6">
              Detect fraudulent job opportunities, build professional CVs
              and discover the skills you need to succeed.
            </p>

            <Link
              to="/fake-job-detector"
              className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-50 transition"
            >
              Check a Job Now →
            </Link>
          </div>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-9">

          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">

                <div>
                  <p className="text-sm text-gray-500 font-medium">
                    {item.title}
                  </p>
                  <h3 className="text-3xl font-bold text-gray-800 mt-3">
                    {item.value}
                  </h3>
                </div>

                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${item.color}`}>
                  {item.icon}
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Features */}
        <div className="mb-9">

          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Explore Features
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Choose a tool to get started.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${feature.color}`}>
                  {feature.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-800 mt-4">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-500 leading-6 mt-2 mb-5">
                  {feature.description}
                </p>

                <Link
                  to={feature.path}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900"
                >
                  {feature.button} →
                </Link>

              </div>
            ))}

          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Recent Activities
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Your latest activities will appear here.
              </p>
            </div>

            <Link
              to="/history"
              className="text-sm font-semibold text-blue-700 hover:text-blue-900"
            >
              View All
            </Link>
          </div>

          <div className="space-y-5">

            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 last:border-0 pb-4 last:pb-0"
              >

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <span>📌</span>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {activity.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {activity.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:justify-end pl-12 sm:pl-0">
                  <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                    {activity.status}
                  </span>
                  <span className="text-xs text-gray-400">
                    {activity.date}
                  </span>
                </div>

              </div>
            ))}

          </div>

        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          © 2026 JobShield AI. All rights reserved.
        </p>

      </main>
    </div>
  );
}

export default Dashboard;
