import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  Network, 
  Activity, 
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Server,
  Cloud,
  ShieldCheck,
  RotateCcw,
  Signal
} from 'lucide-react';

const automationStatsData = [
  { time: '00:00', success: 45, failure: 2 },
  { time: '04:00', success: 42, failure: 1 },
  { time: '08:00', success: 120, failure: 5 },
  { time: '12:00', success: 150, failure: 8 },
  { time: '16:00', success: 110, failure: 3 },
  { time: '20:00', success: 65, failure: 1 },
];

const deviceVendorDistribution = [
  { name: 'Cisco', value: 45, color: '#3b82f6' },
  { name: 'Juniper', value: 25, color: '#2563eb' },
  { name: 'Arista', value: 15, color: '#1d4ed8' },
  { name: 'F5/Palo Alto', value: 15, color: '#1e40af' },
];

const KPI_CARDS = [
  { title: 'Total Devices', value: '1,240', trend: 'Global Inventory', color: 'blue', icon: Server },
  { title: 'Automation Success', value: '98.5%', trend: 'Last 24h', color: 'blue', icon: Zap },
  { title: 'Compliance Score', value: '96%', trend: 'Standardized', color: 'blue', icon: ShieldCheck },
  { title: 'Active Drift', value: '12', trend: 'Pending Remediation', color: 'blue', icon: AlertTriangle },
];

const NetworkDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Network Automation Command Center</h1>
          <p className="text-slate-400">Institutional NetDevOps orchestration, multi-vendor configuration management, and zero-trust policy enforcement.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Discover Devices
          </button>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Execute Global Config
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-blue-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-blue-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
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
        {/* Automation Performance */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Automation Job Performance (Last 24h)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={automationStatsData}>
                <defs>
                  <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="success" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorSuccess)" name="Successful Jobs" />
                <Area type="monotone" dataKey="failure" stroke="#f43f5e" strokeWidth={2} fill="transparent" name="Failed Jobs" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Vendor Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Multi-Vendor Infrastructure Mix</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceVendorDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {deviceVendorDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {deviceVendorDistribution.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Network Device Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Critical Network Infrastructure Inventory</h3>
          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">Manage Inventory</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Device Name</th>
                <th className="px-6 py-4 font-semibold">IP Address</th>
                <th className="px-6 py-4 font-semibold">Vendor</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Last Verified</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'core-sw-lon-01', ip: '10.200.1.1', vendor: 'Cisco Nexus', status: 'Online', verified: '2m ago' },
                { name: 'dist-sw-lon-02', ip: '10.200.1.2', vendor: 'Cisco Catalyst', status: 'Online', verified: '5m ago' },
                { name: 'border-rt-nyc-01', ip: '192.168.50.1', vendor: 'Juniper MX', status: 'In-Change', verified: 'Now' },
                { name: 'edge-fw-nyc-01', ip: '192.168.50.10', vendor: 'Palo Alto', status: 'Drift Detected', verified: '18m ago' },
              ].map((dev, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Server className="w-5 h-5 text-blue-400" />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{dev.name}</span>
                        <span className="text-xs text-slate-500 font-mono">ID: NET-DEV-0{i+1}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300 font-mono">{dev.ip}</td>
                  <td className="px-6 py-4 text-sm text-slate-300 font-medium">{dev.vendor}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      dev.status === 'Online' ? 'bg-emerald-500/10 text-emerald-500' : 
                      dev.status === 'In-Change' ? 'bg-blue-500/10 text-blue-500' : 'bg-rose-500/10 text-rose-500'
                    }`}>
                      {dev.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-medium">{dev.verified}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NetworkDashboard;
