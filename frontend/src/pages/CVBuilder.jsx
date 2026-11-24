import { useState } from 'react';
import Sidebar from '../components/Sidebar';

function CVBuilder() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    profession: '',
    objective: '',
    education: '',
    skills: '',
    experience: '',
    projects: '',
    certifications: ''
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const generateCV = () => {
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.profession.trim() ||
      !formData.education.trim() ||
      !formData.skills.trim()
    ) {
      alert('Please fill in your name, email, profession, education and skills.');
      return;
    }

    const savedCVs = JSON.parse(localStorage.getItem('myCVs')) || [];

    const newCV = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toLocaleDateString()
    };

    savedCVs.push(newCV);

    localStorage.setItem('myCVs', JSON.stringify(savedCVs));

    setShowPreview(true);

    alert('Your CV has been saved successfully!');
  };

  const downloadCV = () => {
    if (!showPreview) return;

    const printWindow = window.open('', '_blank');

    if (!printWindow) {
      alert('Please allow pop-ups to download your CV.');
      return;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>${formData.fullName} - CV</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 40px;
              color: #333;
              line-height: 1.6;
            }
            h1 {
              color: #1d4ed8;
              margin-bottom: 5px;
            }
            h2 {
              color: #1d4ed8;
              border-bottom: 1px solid #ddd;
              padding-bottom: 5px;
              font-size: 17px;
            }
            p {
              white-space: pre-wrap;
            }
            @media print {
              body { padding: 20px; }
            }
          </style>
        </head>
        <body>
          <h1>${formData.fullName}</h1>
          <p>${formData.profession}</p>
          <p>Email: ${formData.email}<br>
          Phone: ${formData.phone}<br>
          Address: ${formData.address}</p>

          <h2>Career Objective</h2>
          <p>${formData.objective}</p>

          <h2>Education</h2>
          <p>${formData.education}</p>

          <h2>Skills</h2>
          <p>${formData.skills}</p>

          <h2>Work Experience</h2>
          <p>${formData.experience || 'Not provided'}</p>

          <h2>Projects</h2>
          <p>${formData.projects || 'Not provided'}</p>

          <h2>Certifications</h2>
          <p>${formData.certifications || 'Not provided'}</p>

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

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      profession: '',
      objective: '',
      education: '',
      skills: '',
      experience: '',
      projects: '',
      certifications: ''
    });

    setShowPreview(false);
  };

  const inputClass =
    'w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm';

  const labelClass =
    'block text-sm font-semibold text-gray-700 mb-2';

  return (
    <div className="min-h-screen bg-gray-50 flex">

      <Sidebar />

      <main className="flex-1 min-w-0 p-5 md:p-8">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-blue-600 font-semibold mb-2">
            CAREER DEVELOPMENT TOOL
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            AI CV Builder
          </h1>

          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Build a professional CV using your personal information, education and skills.
          </p>
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-6 md:p-7 text-white mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-3xl">
              📄
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Create Your Professional CV
              </h2>
              <p className="text-sm text-blue-100 mt-1">
                Add your real information to create your career profile.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-7">

          {/* Form */}
          <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">

            {/* Personal Information */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-5">
                01. Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 1XXXXXXXXX"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Profession / Target Job *</label>
                  <input
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineer"
                    className={inputClass}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className={labelClass}>Address</label>
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Your current address"
                    className={inputClass}
                  />
                </div>

              </div>
            </div>

            <div className="border-t border-gray-100 my-7"></div>

            {/* Career Objective */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-5">
                02. Career Objective
              </h2>

              <textarea
                name="objective"
                value={formData.objective}
                onChange={handleChange}
                rows="4"
                placeholder="Write a short summary about your career goals..."
                className={inputClass + ' resize-y'}
              />
            </div>

            <div className="border-t border-gray-100 my-7"></div>

            {/* Education */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-5">
                03. Education
              </h2>

              <textarea
                name="education"
                value={formData.education}
                onChange={handleChange}
                rows="4"
                placeholder="Degree, Institution, Year, CGPA..."
                className={inputClass + ' resize-y'}
              />
            </div>

            <div className="border-t border-gray-100 my-7"></div>

            {/* Skills */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-5">
                04. Skills
              </h2>

              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                rows="4"
                placeholder="e.g. Python, JavaScript, React, SQL, Communication..."
                className={inputClass + ' resize-y'}
              />
            </div>

            <div className="border-t border-gray-100 my-7"></div>

            {/* Experience */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-5">
                05. Work Experience
              </h2>

              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows="4"
                placeholder="Job title, Company, Duration and responsibilities..."
                className={inputClass + ' resize-y'}
              />
            </div>

            <div className="border-t border-gray-100 my-7"></div>

            {/* Projects */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-5">
                06. Projects
              </h2>

              <textarea
                name="projects"
                value={formData.projects}
                onChange={handleChange}
                rows="4"
                placeholder="Project name, technologies used and your contribution..."
                className={inputClass + ' resize-y'}
              />
            </div>

            <div className="border-t border-gray-100 my-7"></div>

            {/* Certifications */}
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-5">
                07. Certifications
              </h2>

              <textarea
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
                rows="3"
                placeholder="Enter your certifications (if any)..."
                className={inputClass + ' resize-y'}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">

              <button
                onClick={generateCV}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-sm transition shadow-md shadow-blue-100"
              >
                ✨ Generate CV Preview
              </button>

              <button
                onClick={resetForm}
                className="px-7 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 font-semibold text-sm transition"
              >
                Reset
              </button>

            </div>

          </div>

          {/* Side Panel */}
          <div className="space-y-5">

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-5">
                CV Building Tips
              </h3>

              <div className="space-y-5">

                <div className="flex gap-3">
                  <span className="text-xl">👤</span>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      Personal Details
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Use a professional name and a valid email address.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-xl">🎓</span>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      Education
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Mention your degree and educational institution.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-xl">💡</span>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      Relevant Skills
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Include skills related to your target job.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-xl">🚀</span>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      Projects
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Highlight your actual academic and personal projects.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6">
              <div className="text-3xl mb-3">✨</div>

              <h3 className="font-bold text-purple-900">
                AI Enhancement
              </h3>

              <p className="text-sm text-purple-700 mt-2 leading-6">
                AI-powered career summaries and job-specific CV suggestions
                will be available after backend integration.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="font-bold text-blue-900">
                Privacy Reminder
              </h3>

              <p className="text-sm text-blue-700 mt-2 leading-6">
                Enter accurate information. Never include passwords or sensitive
                account details in your CV.
              </p>
            </div>

          </div>
        </div>

        {/* CV Preview */}
        {showPreview && (
          <div className="mt-8 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-10">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">
              <div>
                <p className="text-sm text-blue-600 font-semibold">
                  GENERATED DOCUMENT
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-1">
                  CV Preview
                </h2>
              </div>

              <button
                onClick={downloadCV}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-semibold transition"
              >
                ⬇ Download / Save as PDF
              </button>
            </div>

            <div className="max-w-3xl mx-auto border border-gray-200 p-6 md:p-10 rounded-lg">

              <div className="border-b-2 border-blue-600 pb-5 mb-6">
                <h1 className="text-3xl font-bold text-blue-800">
                  {formData.fullName}
                </h1>

                <p className="text-lg text-gray-600 mt-1">
                  {formData.profession}
                </p>

                <p className="text-sm text-gray-500 mt-3">
                  {formData.email}
                  {formData.phone && ` | ${formData.phone}`}
                </p>

                {formData.address && (
                  <p className="text-sm text-gray-500 mt-1">
                    {formData.address}
                  </p>
                )}
              </div>

              {[
                ['CAREER OBJECTIVE', formData.objective],
                ['EDUCATION', formData.education],
                ['SKILLS', formData.skills],
                ['WORK EXPERIENCE', formData.experience],
                ['PROJECTS', formData.projects],
                ['CERTIFICATIONS', formData.certifications]
              ].map(([heading, content]) => (
                content.trim() && (
                  <div key={heading} className="mb-6">
                    <h3 className="text-sm font-bold text-blue-800 border-b border-gray-200 pb-2 mb-3">
                      {heading}
                    </h3>

                    <p className="text-sm text-gray-700 whitespace-pre-wrap leading-7">
                      {content}
                    </p>
                  </div>
                )
              ))}

            </div>

            <p className="text-center text-xs text-gray-400 mt-5">
              Review your information before downloading.
            </p>

          </div>
        )}

        <p className="text-center text-xs text-gray-400 mt-8">
          © 2026 JobShield AI. All rights reserved.
        </p>

      </main>
    </div>
  );
}

export default CVBuilder;