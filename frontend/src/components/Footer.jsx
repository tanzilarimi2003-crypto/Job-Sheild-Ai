
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080F20] text-white">

      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]"></div>
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Footer CTA */}
        <div className="border-b border-white/10 py-14">
          <div className="flex flex-col items-center justify-between gap-7 rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-600/15 to-indigo-600/10 p-8 md:flex-row md:p-10">

            <div className="max-w-xl text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-[3px] text-blue-400">
                Your Career Starts Here
              </p>

              <h2 className="mt-3 text-2xl font-extrabold text-white md:text-3xl">
                Make Smarter Career Decisions.
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                Detect suspicious jobs, create professional CVs
                and discover the skills you need to succeed.
              </p>
            </div>

            <Link
              to="/register"
              className="shrink-0 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-blue-500"
            >
              Get Started →
            </Link>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
                <span className="text-2xl font-black">J</span>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold">
                  JobShield<span className="text-blue-500"> AI</span>
                </h2>

                <p className="text-[9px] font-semibold uppercase tracking-[2px] text-gray-500">
                  Your Career Companion
                </p>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-7 text-gray-400">
              Your trusted AI career companion. Find safer job
              opportunities, build better CVs and prepare for
              your dream career with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-base font-bold">Quick Links</h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><a href="/#features" className="hover:text-blue-400">Features</a></li>
              <li><a href="/#how-it-works" className="hover:text-blue-400">How It Works</a></li>
              <li><a href="/#about" className="hover:text-blue-400">About Us</a></li>
              <li><Link to="/login" className="hover:text-blue-400">Login</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-base font-bold">Our Services</h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>Fake Job Detection</li>
              <li>AI CV Builder</li>
              <li>Skill Recommendation</li>
              <li>CV-Job Matching</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-base font-bold">Get In Touch</h3>

            <p className="mb-5 text-sm leading-7 text-gray-400">
              Have a question or suggestion? We would love to hear
              from you.
            </p>

            <a
              href="mailto:jobshield.ai@example.com"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-blue-500/50 hover:bg-blue-500/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-xl text-blue-400">
                ✉
              </div>

              <div>
                <p className="text-xs text-gray-500">Email Us</p>
                <p className="mt-1 text-sm font-semibold text-gray-200">
                  Contact JobShield AI
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">

            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} JobShield AI. All rights reserved.
            </p>

            <p className="text-xs text-gray-500">
              Made for a safer career journey <span className="text-blue-400">♥</span>
            </p>

            <a href="#home" className="text-xs font-semibold text-gray-400 hover:text-blue-400">
              Back to Top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
