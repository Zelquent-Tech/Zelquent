import React, { useEffect, lazy, Suspense, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const TechStack = lazy(() => import('./pages/TechStack'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));
const AIAssistant = lazy(() => import('./pages/AIAssistant'));

// Preload Home immediately
import('./pages/Home');

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/* ---------- CLS-SAFE PAGE LOADER ---------- */
const PageLoader = () => (
  <div className="min-h-screen bg-[#0B0C10]" />
);

/* ---------- ERROR BOUNDARY ---------- */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Page Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0B0C10] text-white px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Something went wrong
            </h2>
            <p className="text-[#C5C6C7] mb-6">
              There was an error loading this page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#005FCC] px-6 py-3 rounded-lg hover:bg-[#004cA3] transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

/* ---------- STRUCTURED DATA ---------- */
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zelquent Tech",
  "url": "https://zelquent.com",
  "logo": "https://zelquent.com/Zelquent-icon.png",
  "description":
    "Professional web development, UI/UX design, accessibility solutions, full stack development, AI integration, backend API development, and DevOps hosting services."
};

export default function App() {
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  /* ---------- SCROLL HANDLER (Optimized) ---------- */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowBackToTop(window.scrollY > 500);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ErrorBoundary>

      {/* ---------- GLOBAL SEO ---------- */}
      <Helmet>
        <html lang="en" />
        <title>Zelquent Tech - Web Development & AI Integration Services</title>
        <meta
          name="description"
          content="Professional web development, UI/UX design, accessibility solutions, full stack development, AI integration, backend API development, and DevOps hosting services."
        />
        <link rel="canonical" href={`https://zelquent.com${location.pathname}`} />
        <script type="application/ld+json">
          {JSON.stringify(organizationStructuredData)}
        </script>
      </Helmet>

      {/* ---------- ROOT LAYOUT (ONLY ONE min-h-screen HERE) ---------- */}
      <div className="flex flex-col min-h-screen bg-[#0B0C10] text-[#C5C6C7]">

        {/* Scroll To Top */}
         <ScrollToTop />

        {/* Sticky Navbar */}
        <header className='flex flex-col  bg-[#0B0C10]'>
          <Navbar />
        </header>

        {/* Main Content */}
        <main id="main-content" className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/tech" element={<TechStack />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ai" element={<AIAssistant />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />

        {/* Back To Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-6 right-6 bg-[#005FCC] text-white p-3 rounded-full shadow-lg hover:bg-[#004cA3] transition-all ${
            showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          aria-label="Back to top"
        >
          ↑
        </button>

      </div>
    </ErrorBoundary>
  );
}