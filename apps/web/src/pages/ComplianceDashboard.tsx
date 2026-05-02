import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';
import { 
  ShieldCheck, 
  ShieldAlert, 
  Lock, 
  RefreshCcw,
  ArrowUpRight,
  TrendingDown,
  Clock,
  Briefcase,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  FileText
} from 'lucide-react';

const complianceTrends = [
  { name: 'JAN', effective: 92, deficiencies: 8 },
  { name: 'FEB', effective: 94, deficiencies: 6 },
  { name: 'MAR', effective: 88, deficiencies: 12 },
  { name: 'APR', effective: 95, deficiencies: 5 },
  { name: 'MAY', effective: 97, deficiencies: 3 },
  { name: 'JUN', effective: 98, deficiencies: 2 },
];

const KPI_CARDS = [
  { title: 'Control Effectiveness', value: '98.2%', trend: '+4%', color: 'indigo', icon: ShieldCheck },
  { title: 'Active Deficiencies', value: '2', trend: '-3', color: 'rose', icon: ShieldAlert },
  { title: 'Evidence Coverage', value: '94%', trend: 'Healthy', color: 'emerald', icon: Briefcase },
  { title: 'Certification Status', value: 'AUDIT READY', trend: 'L3 Maturity', color: 'indigo', icon: Lock },
];

const ComplianceDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">SOX ITGC Compliance Intelligence</h1>
          <p className="text-slate-400">Strategic oversight of IT general controls, testing velocity, and risk posture.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Download SOX Report
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Trigger Self-Assessment
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-${card.color === 'rose' ? 'rose' : card.color === 'emerald' ? 'emerald' : 'indigo'}-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-${card.color === 'rose' ? 'rose' : card.color === 'emerald' ? 'emerald' : 'indigo'}-400`} />
              </div>
              <div className={`text-xs font-medium ${card.trend.includes('-') || card.trend === 'Healthy' ? 'text-emerald-400' : 'text-slate-400'}`}>
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Compliance Trend Graph */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Control Effectiveness Trend (6 Months)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={complianceTrends}>
                <defs>
                  <linearGradient id="colorEffective" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="effective" stroke="#6366f1" fill="url(#colorEffective)" name="Effective %" />
                <Area type="monotone" dataKey="deficiencies" stroke="#f43f5e" fill="transparent" strokeDasharray="5 5" name="Deficiencies" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Profile */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col">
          <h3 className="text-lg font-bold text-white mb-6">Risk Profile by Domain</h3>
          <div className="flex-1 space-y-6">
            {[
              { name: 'Access Management', value: 95, color: 'bg-emerald-500' },
              { name: 'Change Control', value: 88, color: 'bg-emerald-500' },
              { name: 'IT Operations', value: 72, color: 'bg-amber-500' },
              { name: 'Program Dev', value: 15, color: 'bg-rose-500' },
            ].map((domain) => (
              <div key={domain.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-medium">{domain.name}</span>
                  <span className="text-slate-400">{domain.value}% Mitigated</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full ${domain.color}`} style={{ width: `${domain.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Critical SOX ITGC Controls (Current Cycle)</h3>
          <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">View Control Matrix</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Control ID</th>
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Domain</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Last Tested</th>
                <th className="px-6 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { id: 'ITGC-ACC-01', name: 'User Access Approval', domain: 'Access', status: 'EFFECTIVE', date: '2026-05-01' },
                { id: 'ITGC-CHG-05', name: 'Prod Change Approval', domain: 'Change', status: 'EFFECTIVE', date: '2026-04-28' },
                { id: 'ITGC-OPS-03', name: 'Backup Validation', domain: 'Operations', status: 'INEFFECTIVE', date: '2026-05-02' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4 text-xs font-mono text-slate-400">{row.id}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-slate-300">{row.name}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">{row.domain}</td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded border ${
                      row.status === 'EFFECTIVE' ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10' : 
                      'text-rose-400 border-rose-500/20 bg-rose-500/10'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500">{row.date}</td>
                  <td className="px-6 py-4">
                    <button className="text-indigo-400 hover:text-indigo-300 text-xs font-bold uppercase tracking-wider">
                      Audit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComplianceDashboard;
