
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');

  function handleRegister(e) {
    e.preventDefault();

    if (
      fullName.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === ''
    ) {
      setError('Please fill in all fields.');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!agree) {
      setError('Please accept the Terms and Conditions.');
      return;
    }

    setError('');
    alert('Registration UI is ready. Backend connection will be added later.');
  }

  return (
    <div className="flex min-h-screen bg-[#F4F7FF]">

      {/* Left Side */}
      <div className="relative hidden w-1/2 overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-12 lg:flex lg:flex-col lg:justify-between">

        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl font-black text-blue-700">
            J
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-white">
              JobShield AI
            </h1>
            <p className="text-xs tracking-wider text-blue-100">
              YOUR CAREER COMPANION
            </p>
          </div>
        </Link>

        <div className="relative z-10 max-w-lg">
          <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
            ✦ Start Your Journey
          </div>

          <h2 className="text-5xl font-extrabold leading-tight text-white">
            Build Your Future.
            <span className="mt-3 block text-blue-200">
              Make Smarter Career Decisions.
            </span>
          </h2>

          <p className="mt-7 text-base leading-8 text-blue-100">
            Join JobShield AI and get access to intelligent
            career tools that help you prepare for your dream job.
          </p>

          <div className="mt-10 space-y-4">
            <p className="text-sm font-medium text-white">
              ✓ Protect yourself from fake job postings
            </p>
            <p className="text-sm font-medium text-white">
              ✓ Build your professional CV
            </p>
            <p className="text-sm font-medium text-white">
              ✓ Discover your career growth opportunities
            </p>
          </div>
        </div>

        <p className="text-xs text-blue-200">
          © 2026 JobShield AI. All rights reserved.
        </p>

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl"></div>
      </div>

      {/* Right Side */}
      <div className="flex w-full items-center justify-center px-6 py-12 lg:w-1/2">

        <div className="w-full max-w-md">

          <Link to="/" className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-2xl font-black text-white">
              J
            </div>

            <h1 className="text-xl font-extrabold text-slate-900">
              JobShield <span className="text-blue-600">AI</span>
            </h1>
          </Link>

          <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-xl shadow-blue-900/5 sm:p-10">

            <div className="mb-7">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Get Started
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                Create Your Account
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Sign up today and start building a safer and smarter career.
              </p>
            </div>

            <form onSubmit={handleRegister}>

              <div className="mb-4">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="mb-4">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div className="mb-4">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimum 8 characters"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 pr-16 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-blue-600"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <div className="mb-5">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter your password"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 pr-16 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-blue-600"
                  >
                    {showConfirmPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <label className="mb-6 flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-600">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
                />

                <span>
                  I agree to the{' '}
                  <span className="font-semibold text-blue-600">
                    Terms and Conditions
                  </span>{' '}
                  and Privacy Policy.
                </span>
              </label>

              {error && (
                <p className="mb-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Create Account →
              </button>

            </form>

            <p className="mt-7 text-center text-sm text-slate-500">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-bold text-blue-600 hover:text-blue-700"
              >
                Login
              </Link>
            </p>

          </div>

          <Link
            to="/"
            className="mt-7 block text-center text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            ← Back to Home
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Register;
