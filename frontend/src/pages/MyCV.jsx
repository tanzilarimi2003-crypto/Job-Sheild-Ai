
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function MyCV() {
  const [cvList, setCvList] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCV, setSelectedCV] = useState(null);

  useEffect(() => {
    loadCVs();
  }, []);

  const loadCVs = () => {
    const savedCVs = JSON.parse(localStorage.getItem('myCVs')) || [];
    setCvList(savedCVs);
  };

  const deleteCV = (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this CV?'
    );

    if (confirmDelete) {
      const updatedCVs = cvList.filter((cv) => cv.id !== id);

      localStorage.setItem('myCVs', JSON.stringify(updatedCVs));

      setCvList(updatedCVs);

      if (selectedCV && selectedCV.id === id) {
        setSelectedCV(null);
      }
    }
  };

  const filteredCVs = cvList.filter((cv) =>
    cv.profession.toLowerCase().includes(search.toLowerCase()) ||
    cv.fullName.toLowerCase().includes(search.toLowerCase())
  );

  const downloadCV = (cv) => {
    const printWindow = window.open('', '_blank');

    if (!printWindow) {
      alert('Please allow pop-ups to download your CV.');
      return;
    }

    const escapeHTML = (value) => {
      return String(value || '').replace(/[&<>"']/g, (char) => {
        const entities = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;'
        };

        return entities[char];
      });
    };

    printWindow.document.write(`
      <html>
        <head>
          <title>CV - ${escapeHTML(cv.fullName)}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 40px;
              color: #333;
              line-height: 1.6;
            }
            h1, h2 {
              color: #1d4ed8;
            }
            h2 {
              border-bottom: 1px solid #ddd;
              padding-bottom: 5px;
              font-size: 17px;
            }
            p {
              white-space: pre-wrap;
            }
          </style>
        </head>
        <body>
          <h1>${escapeHTML(cv.fullName)}</h1>
          <p>${escapeHTML(cv.profession)}</p>
          <p>
            ${escapeHTML(cv.email)}<br>
            ${escapeHTML(cv.phone)}<br>
            ${escapeHTML(cv.address)}
          </p>

          <h2>Career Objective</h2>
          <p>${escapeHTML(cv.objective)}</p>

          <h2>Education</h2>
          <p>${escapeHTML(cv.education)}</p>

          <h2>Skills</h2>
          <p>${escapeHTML(cv.skills)}</p>

          <h2>Work Experience</h2>
          <p>${escapeHTML(cv.experience)}</p>

          <h2>Projects</h2>
          <p>${escapeHTML(cv.projects)}</p>

          <h2>Certifications</h2>
          <p>${escapeHTML(cv.certifications)}</p>

          <script>
            window.onload = function() {
              window.print();
            };
          <\/script>
        </body>
      </html>
    `);

    printWindow.document.close();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">

      <Sidebar />

      <main className="flex-1 min-w-0 p-5 md:p-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

          <div>
            <p className="text-sm text-blue-600 font-semibold mb-2">
              DOCUMENT MANAGEMENT
            </p>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              My CVs
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              View, manage and download your created CVs.
            </p>
          </div>

          <Link
            to="/cv-builder"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-sm font-semibold text-center transition"
          >
            + Create New CV
          </Link>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">

          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total CVs</p>
            <h2 className="text-3xl font-bold text-blue-700 mt-2">
              {cvList.length}
            </h2>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">Available CVs</p>
            <h2 className="text-3xl font-bold text-green-600 mt-2">
              {cvList.length}
            </h2>
          </div>

        </div>

        {/* Search */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-6 shadow-sm">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search CV by name or profession..."
            className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />

        </div>

        {/* CV List */}
        <div className="mb-8">

          <h2 className="text-xl font-bold text-gray-800 mb-5">
            Your Documents
          </h2>

          {filteredCVs.length === 0 ? (

            <div className="bg-white border border-gray-100 rounded-2xl p-10 text-center shadow-sm">

              <div className="text-5xl mb-4">📄</div>

              <h3 className="text-lg font-bold text-gray-800">
                {cvList.length === 0 ? 'No CV Created Yet' : 'No Matching CV Found'}
              </h3>

              <p className="text-sm text-gray-500 mt-2 mb-6">
                {cvList.length === 0
                  ? 'Start creating your professional CV with JobShield AI.'
                  : 'Try searching with another name or profession.'}
              </p>

              {cvList.length === 0 && (
                <Link
                  to="/cv-builder"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold"
                >
                  Create Your First CV
                </Link>
              )}

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

              {filteredCVs.map((cv) => (

                <div
                  key={cv.id}
                  className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
                >

                  <div className="flex items-start justify-between">

                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl">
                      📄
                    </div>

                    <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full">
                      Saved
                    </span>

                  </div>

                  <h3 className="font-bold text-gray-800 mt-5">
                    {cv.fullName}
                  </h3>

                  <p className="text-sm text-blue-600 mt-1">
                    {cv.profession}
                  </p>

                  <p className="text-xs text-gray-400 mt-3">
                    Created: {cv.createdAt}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">

                    <button
                      onClick={() => setSelectedCV(cv)}
                      className="flex-1 min-w-0 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-xs font-semibold"
                    >
                      View
                    </button>

                    <button
                      onClick={() => downloadCV(cv)}
                      className="flex-1 min-w-0 border border-gray-200 hover:bg-gray-50 text-gray-700 py-2 rounded-lg text-xs font-semibold"
                    >
                      Download
                    </button>

                    <button
                      onClick={() => deleteCV(cv.id)}
                      className="w-full border border-red-100 text-red-500 hover:bg-red-50 py-2 rounded-lg text-xs font-semibold"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

        {/* Selected CV Preview */}
        {selectedCV && (

          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">

            <div className="flex items-center justify-between gap-3 mb-6">

              <div>
                <p className="text-xs text-blue-600 font-semibold">
                  DOCUMENT PREVIEW
                </p>

                <h2 className="text-xl font-bold text-gray-800 mt-1">
                  {selectedCV.fullName}
                </h2>
              </div>

              <button
                onClick={() => setSelectedCV(null)}
                className="text-gray-400 hover:text-red-500 text-xl"
              >
                ✕
              </button>

            </div>

            <div className="max-w-3xl border border-gray-200 rounded-xl p-6 md:p-8">

              <h1 className="text-3xl font-bold text-blue-800">
                {selectedCV.fullName}
              </h1>

              <p className="text-gray-600 mt-1">
                {selectedCV.profession}
              </p>

              <p className="text-sm text-gray-500 mt-3">
                {selectedCV.email}
                {selectedCV.phone && ` | ${selectedCV.phone}`}
              </p>

              {[
                ['CAREER OBJECTIVE', selectedCV.objective],
                ['EDUCATION', selectedCV.education],
                ['SKILLS', selectedCV.skills],
                ['WORK EXPERIENCE', selectedCV.experience],
                ['PROJECTS', selectedCV.projects],
                ['CERTIFICATIONS', selectedCV.certifications]
              ].map(([heading, content]) => (
                content && (
                  <div key={heading} className="mt-6">
                    <h3 className="text-sm font-bold text-blue-800 border-b pb-2 mb-3">
                      {heading}
                    </h3>

                    <p className="text-sm text-gray-700 whitespace-pre-wrap leading-7">
                      {content}
                    </p>
                  </div>
                )
              ))}

            </div>

          </div>

        )}

        <p className="text-center text-xs text-gray-400 mt-8">
          © 2026 JobShield AI. All rights reserved.
        </p>

      </main>
    </div>
  );
}

export default MyCV;
