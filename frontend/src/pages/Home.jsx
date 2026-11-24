
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  const features = [
    {
      icon: '🛡️',
      title: 'Fake Job Detection',
      description:
        'Analyze job descriptions, identify suspicious patterns and understand potential risks before applying.',
      color: 'bg-blue-50',
      number: '01',
    },
    {
      icon: '📄',
      title: 'AI CV Builder',
      description:
        'Create professional and attractive CVs based on your education, skills, experience and target job.',
      color: 'bg-purple-50',
      number: '02',
    },
    {
      icon: '🧠',
      title: 'Skill Recommendation',
      description:
        'Discover the skills required for your dream job and get recommendations to improve your career.',
      color: 'bg-green-50',
      number: '03',
    },
    {
      icon: '🎯',
      title: 'CV-Job Matching',
      description:
        'Compare your CV with job descriptions, check skill compatibility and identify missing skills.',
      color: 'bg-orange-50',
      number: '04',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Create Your Account',
      description:
        'Sign up and provide your career information to get started with JobShield AI.',
    },
    {
      number: '02',
      title: 'Explore AI Tools',
      description:
        'Analyze job posts, build your CV and discover the skills needed for your career.',
    },
    {
      number: '03',
      title: 'Grow Your Career',
      description:
        'Use personalized insights to improve your profile and make smarter career decisions.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative scroll-mt-24 overflow-hidden bg-[#F4F7FF]"
      >
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200/40 blur-[100px]"></div>
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-200/40 blur-[100px]"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:py-28 lg:grid-cols-2">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                AI Powered Career Platform
              </span>
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Build Your Career.
              <span className="mt-2 block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Stay One Step Ahead.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              Find safer job opportunities, build professional CVs
              and discover the skills you need to succeed.
              Your career journey starts with JobShield AI.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/register"
                className="rounded-xl bg-blue-600 px-8 py-4 text-center text-sm font-bold text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Get Started Free →
              </Link>

              <a
                href="#features"
                className="rounded-xl border border-slate-300 bg-white px-8 py-4 text-center text-sm font-bold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-6 text-sm font-medium text-slate-500">
              <span>✓ AI-Powered Tools</span>
              <span>✓ Smarter Job Search</span>
              <span>✓ Career Guidance</span>
            </div>
          </div>

          {/* Dashboard Illustration */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[35px] bg-gradient-to-br from-blue-300/40 to-indigo-300/40 blur-2xl"></div>

            <div className="relative rounded-3xl border border-white bg-white p-6 shadow-2xl shadow-blue-900/10">

              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    JOBSHIELD AI
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    Career Dashboard
                  </h3>
                </div>

                <span className="rounded-xl bg-blue-50 px-3 py-2 text-xs font-bold text-blue-600">
                  ✦ AI Assistant
                </span>
              </div>

              {/* Job Analysis */}
              <div className="mt-6 rounded-2xl border border-red-100 bg-red-50/70 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-slate-500">
                    Job Analysis Preview
                  </span>
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-600">
                    High Risk
                  </span>
                </div>

                <h4 className="mt-4 font-bold text-slate-800">
                  Suspicious Job Posting
                </h4>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Example: Unusual payment promises and suspicious
                  recruitment language.
                </p>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-red-100">
                  <div className="h-full w-[78%] rounded-full bg-red-500"></div>
                </div>

                <p className="mt-2 text-right text-xs font-bold text-red-600">
                  Example risk score: 78%
                </p>
              </div>

              {/* CV Builder */}
              <div className="mt-4 flex items-center gap-4 rounded-2xl border border-slate-100 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  📄
                </div>

                <div className="flex-1">
                  <h4 className="font-bold text-slate-800">
                    Professional CV
                  </h4>
                  <p className="mt-1 text-xs text-slate-400">
                    AI-assisted CV creation
                  </p>
                </div>

                <span className="text-xl text-green-500">✓</span>
              </div>

              {/* Matching */}
              <div className="mt-4 rounded-2xl border border-slate-100 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400">
                      CV - Job Matching
                    </p>
                    <h4 className="mt-1 font-bold text-slate-800">
                      Skill Compatibility
                    </h4>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-blue-100 text-sm font-extrabold text-blue-600">
                    85%
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                    Matched Skills
                  </span>
                  <span className="rounded-md bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                    Missing Skills
                  </span>
                </div>
              </div>

              <p className="mt-4 text-center text-[10px] text-slate-400">
                Illustrative dashboard preview
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[3px] text-blue-600">
              Our Features
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Everything You Need to
              <span className="text-blue-600"> Move Forward</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-500">
              Powerful tools designed to make your job search
              safer and your career preparation smarter.
            </p>
          </div>

          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="flex items-center justify-between">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} text-2xl`}>
                    {feature.icon}
                  </div>

                  <span className="text-sm font-bold text-slate-300">
                    {feature.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold text-slate-900 transition group-hover:text-blue-600">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {feature.description}
                </p>

                <div className="mt-7 h-1 w-12 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="scroll-mt-24 bg-[#F4F7FF] py-24"
      >
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[3px] text-blue-600">
              Simple Process
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
              How JobShield AI Works
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-500">
              Start your journey toward a smarter career in just
              three simple steps.
            </p>
          </div>

          <div className="relative mt-16 grid gap-12 md:grid-cols-3">
            <div className="absolute left-[17%] right-[17%] top-9 hidden border-t-2 border-dashed border-blue-200 md:block"></div>

            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-[76px] w-[76px] items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-blue-600 to-indigo-600 text-xl font-extrabold text-white shadow-xl shadow-blue-600/20">
                  {step.number}
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 shadow-2xl shadow-blue-900/20 md:p-12">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
              <div className="text-5xl">🚀</div>

              <h3 className="mt-7 text-3xl font-extrabold leading-tight text-white md:text-4xl">
                Your Future.
                <br />
                Your Skills.
                <br />
                Your Opportunities.
              </h3>

              <p className="mt-5 text-sm leading-7 text-blue-100">
                Make informed career decisions and take the next
                step toward your professional goals.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white">
                AI Powered
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white">
                Career Focused
              </span>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[3px] text-blue-600">
              About JobShield AI
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              Making Your Career Journey
              <span className="text-blue-600"> Smarter and Safer.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-500">
              JobShield AI is designed to help job seekers navigate
              the modern job market with confidence. From analyzing
              suspicious job descriptions to preparing professional
              CVs, our platform brings essential career tools together.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-500">
              We also help users understand the skills required for
              their target roles and compare their CVs with job
              descriptions, making career preparation more focused.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                <p className="text-2xl font-extrabold text-blue-600">01</p>
                <p className="mt-2 text-sm font-semibold text-slate-700">
                  Safer Job Search
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                <p className="text-2xl font-extrabold text-blue-600">02</p>
                <p className="mt-2 text-sm font-semibold text-slate-700">
                  Smarter Preparation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 px-7 py-16 text-center md:px-16">

          <div className="absolute -left-20 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl"></div>

          <div className="relative">
            <span className="text-xs font-bold uppercase tracking-[3px] text-blue-100">
              Take The Next Step
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Ready to Build a Better Career?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-blue-100 md:text-base">
              Start using AI-powered career tools and take control
              of your professional journey.
            </p>

            <Link
              to="/register"
              className="mt-9 inline-flex rounded-xl bg-white px-8 py-4 text-sm font-bold text-blue-700 shadow-xl transition hover:-translate-y-1 hover:bg-blue-50"
            >
              Create Your Free Account →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
