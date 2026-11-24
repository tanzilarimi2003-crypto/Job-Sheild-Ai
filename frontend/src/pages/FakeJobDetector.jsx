
import { useState } from 'react';
import Sidebar from '../components/Sidebar';

function FakeJobDetector() {
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeJob = () => {
    if (!jobTitle.trim() || !companyName.trim() || !jobDescription.trim()) {
      alert('Please fill in all fields before analyzing.');
      return;
    }

    setLoading(true);
    setResult(null);

    // Temporary demo analysis
    setTimeout(() => {
      const suspiciousWords = [
        'pay registration fee',
        'no experience required',
        'guaranteed income',
        'pay money',
        'send money',
        'urgent hiring',
        'processing fee',
        'whatsapp only'
      ];

      const text = (jobTitle + ' ' + companyName + ' ' + jobDescription).toLowerCase();

      const foundWords = suspiciousWords.filter((word) =>
        text.includes(word)
      );

      const riskScore = Math.min(foundWords.length * 20 + 10, 95);

      setResult({
        score: riskScore,
        status: riskScore >= 50 ? 'High Risk' : 'Low Risk',
        reasons: foundWords.length > 0
          ? foundWords.map((word) => `Suspicious phrase detected: "${word}"`)
          : [
              'No predefined suspicious phrases were detected.',
              'This does not guarantee that the job is legitimate.'
            ]
      });

      setLoading(false);
    }, 1200);
  };

  const resetForm = () => {
    setJobTitle('');
    setCompanyName('');
    setJobDescription('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">

      <Sidebar />

      <main className="flex-1 min-w-0 p-5 md:p-8">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-blue-600 font-semibold mb-2">
            JOB SECURITY TOOL
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Fake Job Detector
          </h1>

          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Analyze job postings and identify potentially fraudulent opportunities.
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-7 flex gap-4">
          <div className="text-3xl">🛡️</div>

          <div>
            <h3 className="font-bold text-blue-900">
              Stay Safe from Fake Job Offers
            </h3>

            <p className="text-sm text-blue-700 mt-1 leading-6">
              Paste a job description below. JobShield AI will help identify
              suspicious phrases and potential warning signs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-7">

          {/* Input Form */}
          <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">

            <div className="mb-7">
              <h2 className="text-xl font-bold text-gray-800">
                Analyze a Job Posting
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Enter the job information to check for warning signs.
              </p>
            </div>

            <div className="space-y-5">

              {/* Job Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Title <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="e.g. Frontend Developer"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enter company name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              {/* Job Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Job Description <span className="text-red-500">*</span>
                </label>

                <textarea
                  rows="9"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the complete job description here..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-y"
                />

                <p className="text-xs text-gray-400 mt-2">
                  Include responsibilities, requirements, salary and application details.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">

                <button
                  onClick={analyzeJob}
                  disabled={loading}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-xl font-semibold text-sm transition shadow-md shadow-blue-100"
                >
                  {loading ? 'Analyzing Job...' : '🛡️ Analyze Job'}
                </button>

                <button
                  onClick={resetForm}
                  className="px-7 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 font-semibold text-sm transition"
                >
                  Reset
                </button>

              </div>

            </div>
          </div>

          {/* Right Information Panel */}
          <div className="space-y-5">

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

              <h3 className="font-bold text-gray-800 mb-5">
                What We Check
              </h3>

              <div className="space-y-5">

                <div className="flex gap-3">
                  <span className="text-xl">💰</span>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      Payment Requests
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Registration fees or suspicious money requests.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-xl">⚠️</span>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      Suspicious Language
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Unrealistic promises and misleading phrases.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-xl">🏢</span>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      Company Information
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Company details and unusual hiring claims.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl p-6 text-white">
              <div className="text-3xl mb-3">🔒</div>

              <h3 className="font-bold text-lg">
                Protect Your Future
              </h3>

              <p className="text-sm text-blue-100 mt-2 leading-6">
                Never pay money to secure a job without independently verifying
                the employer and the recruitment process.
              </p>
            </div>

          </div>
        </div>

        {/* Analysis Result */}
        {result && (
          <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-7">

              <div>
                <p className="text-sm text-blue-600 font-semibold">
                  ANALYSIS REPORT
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-1">
                  Job Analysis Result
                </h2>
              </div>

              <span className={`w-fit px-4 py-2 rounded-full text-sm font-bold ${
                result.score >= 50
                  ? 'bg-red-100 text-red-700'
                  : 'bg-green-100 text-green-700'
              }`}>
                {result.status}
              </span>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

              {/* Risk Score */}
              <div className="bg-gray-50 rounded-2xl p-6">

                <p className="text-sm text-gray-500 font-medium">
                  Demo Risk Indicator
                </p>

                <div className="flex items-end gap-2 mt-3">
                  <h3 className={`text-5xl font-extrabold ${
                    result.score >= 50 ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {result.score}%
                  </h3>

                  <span className="text-sm text-gray-400 mb-2">
                    risk indicator
                  </span>
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full mt-5 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      result.score >= 50 ? 'bg-red-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${result.score}%` }}
                  />
                </div>

                <p className="text-xs text-gray-500 mt-3">
                  This is a temporary keyword-based demo score, not an ML prediction.
                </p>

              </div>

              {/* Findings */}
              <div>
                <h3 className="font-bold text-gray-800 mb-4">
                  Detected Warning Signs
                </h3>

                <div className="space-y-3">
                  {result.reasons.map((reason, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <span className="text-red-500">●</span>
                      <p className="text-sm text-gray-600 leading-6">
                        {reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-7 bg-yellow-50 border border-yellow-100 rounded-xl p-4">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> This demo checks predefined keywords
                only. A low score does not prove a job is legitimate, and a high
                score does not prove it is fake. Always verify the employer.
              </p>
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

export default FakeJobDetector;
