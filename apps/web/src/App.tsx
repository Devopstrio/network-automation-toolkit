import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import NetworkDashboard from './pages/NetworkDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The Network Automation Toolkit is currently orchestrating institutional infrastructure lifecycles and optimizing multi-vendor device configurations. Automated drift detection and zero-trust policy synchronization will be fully operational once the global automation engine is finalized.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<NetworkDashboard />} />
          <Route path="/topology" element={<Placeholder name="Dynamic Network Topology Map" />} />
          <Route path="/devices" element={<Placeholder name="Multi-Vendor Device Inventory" />} />
          <Route path="/configs" element={<Placeholder name="Configuration State Management" />} />
          <Route path="/compliance" element={<Placeholder name="Policy Compliance & Validation" />} />
          <Route path="/jobs" element={<Placeholder name="Automation Execution Console" />} />
          <Route path="/drift" element={<Placeholder name="Configuration Drift Detection" />} />
          <Route path="/rollback" element={<Placeholder name="Automated Rollback Orchestration" />} />
          <Route path="/security" element={<Placeholder name="Network Security & ACL Enforcement" />} />
          <Route path="/cloud" element={<Placeholder name="Cloud Network Orchestration (VPC/VNet)" />} />
          <Route path="/changes" element={<Placeholder name="Network Change Management Workflow" />} />
          <Route path="/settings" element={<Placeholder name="Toolkit & Security Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
