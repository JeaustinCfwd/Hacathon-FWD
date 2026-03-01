import React from 'react';

const StatCard = ({ title, value, icon, trend, subtext }) => (
    <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex justify-between items-start">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{title}</p>
            <span className="material-symbols-outlined text-primary">{icon}</span>
        </div>
        <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">{value}</p>
        {trend && (
            <p className="text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">trending_up</span> {trend}
            </p>
        )}
        {subtext && <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold">{subtext}</p>}
    </div>
);

const RecommendedJob = ({ company, location, type, role, tags, initial }) => (
    <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-4 group cursor-pointer hover:border-primary transition-all">
        <div className="flex justify-between">
            <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">{initial}</div>
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{company}</h3>
                    <p className="text-xs text-slate-500">{location}</p>
                </div>
            </div>
            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">{type}</span>
        </div>
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{role}</p>
        <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
                <span key={tag} className="text-[10px] px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">{tag}</span>
            ))}
        </div>
    </div>
);

export default function HomeDash() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">

                {/* Top Navigation Bar */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-10 py-3 sticky top-0 z-50">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4 text-primary">
                            <div className="size-8">
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd" />
                                    <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd" />
                                </svg>
                            </div>
                            <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">FTZ Careers</h2>
                        </div>
                        <label className="flex flex-col min-w-40 h-10 max-w-64">
                            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                <div className="text-slate-400 flex border-none bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg">
                                    <span className="material-symbols-outlined text-xl">search</span>
                                </div>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-0 border-none bg-slate-100 dark:bg-slate-800 h-full placeholder:text-slate-400 px-4 rounded-l-none pl-2 text-base"
                                    placeholder="Search for jobs..."
                                />
                            </div>
                        </label>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <nav className="flex items-center gap-9">
                            <a className="text-primary text-sm font-semibold border-b-2 border-primary pb-1" href="#dashboard">Dashboard</a>
                            <a className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary" href="#apps">My Applications</a>
                            <a className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary" href="#jobs">Jobs Hub</a>
                        </nav>
                        <div className="flex gap-3">
                            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined">account_circle</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="px-10 flex-1 justify-center py-8">
                    <div className="max-w-[1200px] mx-auto flex flex-col gap-8">

                        {/* Welcome Section */}
                        <div className="flex flex-wrap justify-between items-end gap-4">
                            <div className="flex min-w-72 flex-col gap-1">
                                <h1 className="text-slate-900 dark:text-white text-4xl font-black tracking-[-0.033em]">Welcome back, Alex</h1>
                                <p className="text-slate-500 dark:text-slate-400 text-lg">Candidate ID: FTZ-9928 • Final year CS student</p>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                                    <span className="material-symbols-outlined mr-2 text-xl">edit_document</span> Update Multi-CV
                                </button>
                                <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-all">
                                    <span className="material-symbols-outlined">share</span>
                                </button>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <StatCard title="Active Applications" value="12" icon="send" trend="+2 this week" />
                            <StatCard title="Profile Views" value="145" icon="visibility" trend="+15% vs last month" />
                            <StatCard title="Interviews" value="3" icon="event_available" subtext="2 pending response" />
                            <StatCard title="Unread Messages" value="5" icon="mail" trend="Check inbox now" />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Left Column */}
                            <div className="lg:col-span-2 flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-slate-900 dark:text-white text-xl font-bold">Active Applications</h2>
                                    <button className="text-primary text-sm font-bold hover:underline">View All</button>
                                </div>

                                <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Company</th>
                                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Position</th>
                                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                            <tr>
                                                <td className="px-6 py-5 flex items-center gap-3">
                                                    <div className="size-8 rounded bg-slate-100 flex items-center justify-center font-bold text-slate-600">T</div>
                                                    <span className="font-semibold">TechCorp FTZ</span>
                                                </td>
                                                <td className="px-6 py-5 text-slate-600 dark:text-slate-400">Junior Developer</td>
                                                <td className="px-6 py-5">
                                                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Review</span>
                                                </td>
                                            </tr>
                                            {/* Agrega más filas aquí según sea necesario */}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Recommended Section */}
                                <div className="mt-4 flex flex-col gap-4">
                                    <h2 className="text-slate-900 dark:text-white text-xl font-bold">Recommended for You</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <RecommendedJob
                                            initial="S" company="Soft Systems Ltd" location="Free Trade Zone"
                                            type="Remote" role="Fullstack Developer Intern" tags={['React', 'Node.js']}
                                        />
                                        <RecommendedJob
                                            initial="C" company="CyberPort Inc" location="Innovation Hub"
                                            type="Full-time" role="Security Analyst" tags={['Python', 'Networking']}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Activity & Others */}
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-slate-900 dark:text-white text-xl font-bold flex items-center gap-2">
                                        Activity Feed <span className="bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full">3 New</span>
                                    </h2>
                                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex gap-4">
                                        <div className="size-8 bg-primary rounded-full flex items-center justify-center text-white shrink-0">
                                            <span className="material-symbols-outlined text-sm">visibility</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">HR Manager viewed your profile</p>
                                            <p className="text-xs text-slate-500 mt-1">2 hours ago</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Resume Banner */}
                                <div className="p-6 rounded-xl bg-gradient-to-br from-primary to-blue-700 text-white relative overflow-hidden">
                                    <h3 className="font-bold text-lg">Your CV is 85% complete</h3>
                                    <div className="w-full bg-white/20 h-2 rounded-full mt-4">
                                        <div className="bg-white h-full rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                    <button className="mt-6 w-full py-2 bg-white text-primary rounded-lg text-sm font-bold">Complete Profile</button>
                                    <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl opacity-10">school</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="px-10 py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-auto">
                    <div className="max-w-[1200px] mx-auto flex justify-between items-center">
                        <span className="text-sm font-bold text-slate-500">© 2023 FTZ Recruitment Hub</span>
                        <div className="flex gap-8">
                            <a className="text-sm text-slate-500 hover:text-primary" href="#help">Help Center</a>
                            <a className="text-sm text-slate-500 hover:text-primary" href="#privacy">Privacy</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
