import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import RegionPage from './pages/RegionPage';
import CompanyPage from './pages/CompanyPage';
import AllCompanies from './pages/AllCompanies';
import Partner from './pages/Partner';
import Impressum from './pages/Impressum';

// Add scroll to top behavior on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <HashRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:slug" element={<ServicePage />} />
            <Route path="/region/:slug" element={<RegionPage />} />
            <Route path="/company/:slug" element={<CompanyPage />} />
            <Route path="/alle-elektriker" element={<AllCompanies />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/impressum" element={<Impressum />} />
            {/* Redirect old emergency route to home */}
            <Route path="/notfall" element={<Navigate to="/" replace />} />
            <Route path="/kontakt" element={<Navigate to="/partner" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </HashRouter>
    </HelmetProvider>
  );
};

export default App;