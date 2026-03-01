import React from 'react';

const SidebarItem = ({ icon, label, active = false }) => (
    <a
        href="#"
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${active
                ? "bg-primary/10 text-primary"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
    >
        <span className="material-symbols-outlined">{icon}</span>
        <span className="text-sm font-semibold">{label}</span>
    </a>
);

const StatCard = ({ icon, label, value, trend, trendType = "positive" }) => (
    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
        <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">{icon}</span>
            </div>
            <span className={`text-xs font-bold px-2 py-1 rounded-full ${trendType === "positive" ? "text-green-600 bg-green-50" : "text-slate-400 bg-slate-50"
                }`}>
                {trend}
            </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{label}</p>
        <h3 className="text-3xl font-extrabold mt-1">{value}</h3>
    </div>
);

const StudentRow = ({ name, program, company, status, date, imgId }) => {
    const statusColors = {
        "Hired": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        "Interviewing": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
        "Pending Review": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
        "Not Placed": "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400"
    };

    return (
        <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
            <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <div
                        className="size-8 rounded-full bg-slate-200 bg-cover"
                        style={{ backgroundImage: `url('https://i.pravatar.cc/150?u=${imgId}')` }}
                    />
                    <p className="text-sm font-bold">{name}</p>
                </div>
            </td>
            <td className="px-6 py-4 text-sm">{program}</td>
            <td className="px-6 py-4 text-sm font-medium">{company}</td>
            <td className="px-6 py-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${statusColors[status]}`}>
                    {status}
                </span>
            </td>
            <td className="px-6 py-4 text-sm text-slate-500">{date}</td>
            <td className="px-6 py-4 text-right">
                <button className="text-primary font-bold text-xs hover:underline">View Details</button>
            </td>
        </tr>
    );
};

const ActivityItem = ({ icon, color, title, time }) => (
    <div className="flex gap-4">
        <div className={`size-8 rounded-full flex items-center justify-center shrink-0 ${color}`}>
            <span className="material-symbols-outlined text-sm font-bold">{icon}</span>
        </div>
        <div>
            <p className="text-sm font-bold">{title}</p>
            <p className="text-xs text-slate-500">{time}</p>
        </div>
    </div>
);

export default function DashHome() {
    return (
        <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display">
            {/* Sidebar */}
            <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col sticky top-0 h-screen">
                <div className="p-6 flex items-center gap-3">
                    <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">school</span>
                    </div>
                    <div>
                        <h1 className="text-sm font-bold leading-tight">EduGlobal</h1>
                        <p className="text-xs text-slate-500 dark:text-slate-400">FTZ Admin Portal</p>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    <SidebarItem icon="dashboard" label="Dashboard" active />
                    <SidebarItem icon="group" label="Students" />
                    <SidebarItem icon="menu_book" label="Programs" />
                    <SidebarItem icon="work" label="Placements" />
                    <SidebarItem icon="apartment" label="Companies" />
                </nav>

                <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-1">
                    <SidebarItem icon="settings" label="Settings" />
                    <SidebarItem icon="logout" label="Sign Out" />
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col">

                {/* Header */}
                <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-8 sticky top-0 z-10">
                    <div className="flex items-center gap-4 w-1/3">
                        <div className="relative w-full">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                            <input
                                type="text"
                                className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20"
                                placeholder="Search students..."
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold">Dr. Sarah Jenkins</p>
                                <p className="text-xs text-slate-500">Academic Director</p>
                            </div>
                            <div
                                className="size-10 rounded-full bg-slate-200 bg-cover"
                                style={{ backgroundImage: `url('https://i.pravatar.cc/150?u=sarah')` }}
                            />
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">

                    {/* Hero Section */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h2 className="text-3xl font-extrabold tracking-tight">Institution Dashboard</h2>
                            <p className="text-slate-500 dark:text-slate-400 mt-1">Recruitment & internship management ecosystem.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors">
                                <span className="material-symbols-outlined text-lg">download</span> Export
                            </button>
                            <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-colors">
                                <span className="material-symbols-outlined text-lg">upload_file</span> Bulk Upload
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatCard icon="person_add" label="Total Registered" value="1,240" trend="+5.2%" />
                        <StatCard icon="assignment_turned_in" label="Students Placed" value="458" trend="+12.4%" />
                        <StatCard icon="school" label="Active Programs" value="12" trend="Stable" trendType="neutral" />
                    </div>

                    {/* Placement Table */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                            <h3 className="font-bold text-lg">Student Placement Tracking</h3>
                            <div className="flex gap-2">
                                <select className="text-xs font-bold bg-slate-100 dark:bg-slate-800 border-none rounded-lg py-1.5 focus:ring-1 focus:ring-primary/30">
                                    <option>All Programs</option>
                                    <option>Software Engineering</option>
                                </select>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Student Name</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Program</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Company</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Start Date</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    <StudentRow name="Alex Thompson" program="Full Stack Dev" company="LogiTech" status="Hired" date="Oct 12, 2023" imgId="1" />
                                    <StudentRow name="Maria Garcia" program="Data Analytics" company="FinCorp" status="Interviewing" date="--" imgId="2" />
                                    <StudentRow name="James Wilson" program="UX Design" company="Creative Hub" status="Pending Review" date="--" imgId="3" />
                                    <StudentRow name="Lina Chen" program="Cloud Computing" company="CyberSafe" status="Hired" date="Nov 05, 2023" imgId="4" />
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Bottom Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
                        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">analytics</span> Placement by Program
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { name: "Software Engineering", val: 85 },
                                    { name: "Data Science", val: 72 },
                                    { name: "Business Admin", val: 45 }
                                ].map((item) => (
                                    <div key={item.name}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="font-medium">{item.name}</span>
                                            <span className="font-bold">{item.val}%</span>
                                        </div>
                                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                                            <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: `${item.val}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">campaign</span> Recent Activity
                            </h3>
                            <div className="space-y-4">
                                <ActivityItem icon="check" color="text-green-600 bg-green-50" title="12 Students placed at TechBase" time="2 hours ago" />
                                <ActivityItem icon="description" color="text-blue-600 bg-blue-50" title="New program 'AI for Business' approved" time="Yesterday" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
