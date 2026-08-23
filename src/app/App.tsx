import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from '@/components/layout/RootLayout';
import PageLoader from '@/components/loading/PageLoader';

// Lazy loaded pages for performance
const Home = React.lazy(() => import('@/pages/Home'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));

export default function App() {
  return (
    <Router>
      <RootLayout>
        <Suspense fallback={<PageLoader message="Initializing Science Core..." />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Future routes will go here */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </RootLayout>
    </Router>
  );
}
