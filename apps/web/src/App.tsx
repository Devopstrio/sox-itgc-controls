import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ComplianceDashboard from './pages/ComplianceDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The SOX compliance engine is currently evaluating control effectiveness and gathering evidence artifacts. This module will be available shortly.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ComplianceDashboard />} />
          <Route path="/controls" element={<Placeholder name="ITGC Control Matrix" />} />
          <Route path="/testing" element={<Placeholder name="Automated Testing Hub" />} />
          <Route path="/access" element={<Placeholder name="User Access Review Portal" />} />
          <Route path="/change" element={<Placeholder name="Change Control Management" />} />
          <Route path="/evidence" element={<Placeholder name="Digital Evidence Locker" />} />
          <Route path="/risk" element={<Placeholder name="Deficiency & Risk Tracking" />} />
          <Route path="/audit" element={<Placeholder name="Compliance Audit Trails" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
