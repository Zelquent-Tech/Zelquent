import { useNavigate, useLocation } from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Zap from "lucide-react/dist/esm/icons/zap";
import Globe from "lucide-react/dist/esm/icons/globe";
import Brain from "lucide-react/dist/esm/icons/brain";
import Star from "lucide-react/dist/esm/icons/star";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";
import Package from "lucide-react/dist/esm/icons/package";
import Smile from "lucide-react/dist/esm/icons/smile";
import Code2 from "lucide-react/dist/esm/icons/code-2";
import Server from "lucide-react/dist/esm/icons/server";
import Database from "lucide-react/dist/esm/icons/database";
import Bot from "lucide-react/dist/esm/icons/bot";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import Shield from "lucide-react/dist/esm/icons/shield";
import Rocket from "lucide-react/dist/esm/icons/rocket";
import CheckCircle2 from "lucide-react/dist/esm/icons/check-circle-2";
import { Helmet } from "react-helmet-async";

// Import images with their dimensions
import HeroImg from "../assets/images/hero-image.webp";
import AiWebsiteBuilder from "../assets/future-projects/future-project-1.jpg";
import AiContentCreation from "../assets/future-projects/future-project-2.jpg";
import AiShopping from "../assets/future-projects/future-project-3.jpg";

// Image dimensions (replace with actual dimensions of your images)
const IMAGE_DIMENSIONS = {
  hero: { width: 600, height: 450 },
  project: { width: 600, height: 350 }
};

// Services data with enhanced SEO keywords
const services = [
  {
    icon: <Globe className="w-6 h-6 text-[#66FCF1]" aria-hidden="true" />,
    title: "Full Stack Web Development",
    desc: "From front-end UI to backend APIs, we build complete digital products that scale using React, Node.js, and cloud technologies.",
    keywords: ["React", "Node.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"]
  },
  {
    icon: <Star className="w-6 h-6 text-[#66FCF1]" aria-hidden="true" />,
    title: "UI/UX Design",
    desc: "Intuitive, WCAG-compliant interfaces that engage users and drive conversions with modern design systems.",
    keywords: ["UI design", "UX research", "WCAG compliance", "Figma", "Prototyping", "User testing"]
  },
  {
    icon: <Brain className="w-6 h-6 text-[#66FCF1]" aria-hidden="true" />,
    title: "AI-Powered Solutions",
    desc: "Integrate ChatGPT-like experiences, machine learning models, or smart automation into your product.",
    keywords: ["OpenAI", "ChatGPT integration", "Machine learning", "AI automation", "LLM", "LangChain"]
  },
];

// Featured projects with enhanced metadata
const projects = [
  {
    img: AiWebsiteBuilder,
    title: "AI Website Builder",
    type: "Coming Soon",
    stack: ["Next.js", "Node.js", "OpenAI API", "TailwindCSS"],
    desc: "A smart AI platform that builds fully responsive websites instantly from user prompts with automated design, content generation, and customization.",
    seo: {
      alt: "AI Website Builder interface showing drag-and-drop functionality with AI-powered design suggestions"
    }
  },
  {
    img: AiContentCreation,
    title: "AI Content Creation Platform",
    type: "Coming Soon",
    stack: ["Next.js", "Node.js", "OpenAI API", "LangChain"],
    desc: "A powerful AI platform for generating blogs, marketing content, social media posts, and images with smart automation and real-time editing tools.",
    seo: {
      alt: "AI Content Creation dashboard showing content generation and editing interface"
    }
  },
  {
    img: AiShopping,
    title: "AI Shopping Platform",
    type: "Coming Soon",
    stack: ["Next.js", "Node.js", "AI Recommendation API", "MongoDB"],
    desc: "An intelligent AI-driven e-commerce platform with smart product recommendations, AI search, personalized shopping, and automated customer assistance.",
    seo: {
      alt: "AI Shopping Platform interface with personalized product recommendations and AI chat assistance"
    }
  },
];

// Company statistics with accessibility labels
const stats = [
  { icon: <Package className="w-5 h-5" aria-hidden="true" />, value: "10+", label: "Completed Projects", description: "Successfully delivered web applications" },
  { icon: <Code2 className="w-5 h-5" aria-hidden="true" />, value: "4+", label: "Tech Stacks Mastered", description: "Full-stack technologies expertise" },
  { icon: <Smile className="w-5 h-5" aria-hidden="true" />, value: "5+", label: "Satisfied Clients", description: "Happy clients with successful partnerships" },
];

// Technology stack with proper labels
const techLogos = [
  { icon: <Code2 className="w-5 h-5" aria-hidden="true" />, label: "React", description: "Frontend development" },
  { icon: <Server className="w-5 h-5" aria-hidden="true" />, label: "Spring Boot", description: "Backend development" },
  { icon: <Database className="w-5 h-5" aria-hidden="true" />, label: "MongoDB", description: "Database management" },
  { icon: <Bot className="w-5 h-5" aria-hidden="true" />, label: "OpenAI", description: "AI integration" },
];

// Testimonials data
const testimonials = [
  {
    quote: "Zelquent Tech delivered an exceptional full-stack solution with seamless AI integration. Their attention to accessibility standards set them apart.",
    name: "Sarah Johnson",
    title: "Founder, WebFlowX",
    rating: 5
  },
  {
    quote: "They helped us integrate AI into our customer system flawlessly. The team's expertise in both frontend and backend development is impressive.",
    name: "Michael Chen",
    title: "CEO, DataDrive Labs",
    rating: 5
  },
  {
    quote: "Highly professional team — delivered everything on time and beyond expectations. Their WCAG compliance work was outstanding.",
    name: "David Rodriguez",
    title: "CTO, PixelFrame Studio",
    rating: 5
  },
];

// Structured data for the organization (will be added to Helmet)
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zelquent Tech",
  "url": "https://zelquent.com",
  "logo": "https://zelquent.com/Zelquent-icon.png",
  "description": "Professional web development, UI/UX design, accessibility solutions, and AI integration services.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "zelquent.tech@gmail.com"
  },
  "sameAs": [
    "https://linkedin.com/company/zelquent-tech",
    "https://x.com/Zelquent_Tech",
    "https://github.com/ZelqentTech"
  ]
};

// Service schema for rich results
const serviceStructuredData = services.map(service => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.title,
  "description": service.desc,
  "provider": {
    "@type": "Organization",
    "name": "Zelquent Tech"
  }
}));

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const isDisabled = false;

  return (
    <>
      {/* Enhanced Page-specific SEO */}
      <Helmet>
        <title>Zelquent Tech - Professional Web Development & AI Integration Services | San Francisco</title>
        <meta
          name="description"
          content="Zelquent Tech offers expert web development, UI/UX design, accessibility solutions, and AI integration services. Full-stack development with React, Node.js, and OpenAI integration."
        />
        <meta
          name="keywords"
          content="web development company San Francisco, UI UX design agency, accessibility solutions, full stack development, AI integration services, React developers, Node.js development, WCAG compliance, OpenAI integration, machine learning consulting, custom web applications, responsive design, API development, cloud hosting, DevOps services"
        />
        <meta name="author" content="Zelquent Tech" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Zelquent Tech - Web Development & AI Integration Services" />
        <meta property="og:description" content="Professional web development, UI/UX design, accessibility solutions, and AI integration services for modern businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zelquent.com" />
        <meta property="og:image" content="https://zelquent.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zelquent Tech - Web Development & AI Integration" />
        <meta name="twitter:description" content="Expert web development, UI/UX design, accessibility solutions, and AI integration services." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://zelquent.com" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceStructuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0B0C10]" key={location.pathname}  >
        {/* Hero Section - FIXED */}
        <section
          className="grid-bg relative pt-16 pb-20 overflow-hidden"
          aria-label="Hero section"
          aria-labelledby="hero-heading"
        >
          {/* Background gradient for visual interest */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#66FCF1]/5 via-transparent to-transparent" aria-hidden="true" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" >
            {/* Left Content - with fixed minimum height */}
            <div className="animate-fade-in-up min-h-[600px]" >
              {/* Badge */}
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#66FCF1]/30 bg-[#66FCF1]/5 text-[#66FCF1] text-xs font-medium mb-6"
                role="status"
                aria-label="Team highlight: Full Stack Development Duo"
              >
                <Zap className="w-3 h-3" aria-hidden="true" />
                <span>Full Stack Development & AI Integration Experts</span>
              </span>

              {/* Main Heading */}
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 cyan-glow"
              >
                We Build <span className="text-[#66FCF1]">Scalable</span> &{" "}
                <span className="text-[#66FCF1]">Intelligent</span> Web Experiences.
              </h1>

              {/* Description */}
              <p className="text-[#C5C6C7] text-lg leading-relaxed mb-8 max-w-lg">
                As the head of Zelquent Tech, I lead a full-stack development team focused on modern,
                <span className="text-[#66FCF1] font-medium"> accessible</span>, and
                <span className="text-[#66FCF1] font-medium"> GenAI-powered</span> web solutions
                that drive business growth.
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-wrap gap-4 mb-10"
                role="group"
                aria-label="Call to action buttons"
              >
                <button
                  disabled={isDisabled}
                  className="cursor-not-allowed flex items-center gap-2 px-6 py-3 rounded-xl bg-[#66FCF1] text-[#0B0C10] font-bold text-sm hover:bg-[#45A29E] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#0B0C10] disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Hire Zelquent Tech for your project (coming soon)"
                >
                  <Zap className="w-4 h-4" aria-hidden="true" />
                  Hire Us
                </button>
                <button
                  onClick={() => navigate('/portfolio')}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#45A29E] text-[#C5C6C7] font-medium text-sm hover:border-[#66FCF1] hover:text-[#66FCF1] transition-all focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#0B0C10]"
                  aria-label="View our portfolio of projects"
                >
                  View Portfolio
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              {/* Tech Stack Tags - FIXED with min-height */}
              <ul
                className="flex items-center gap-4 flex-wrap min-h-[60px]"
                aria-label="Technologies we specialize in"
              >
                {techLogos.map((t) => (
                  <li
                    key={t.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1F2833] border border-[#45A29E]/30 text-[#C5C6C7] text-xs hover:border-[#66FCF1]/50 transition-colors"
                  >
                    <span className="text-[#66FCF1]" aria-hidden="true">
                      {t.icon}
                    </span>
                    <span>{t.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image - FIXED with proper dimensions and badge positioning */}

            <div className="relative lg:top-20 flex justify-center lg:justify-end">
              <div className="w-full h-[380px] flex-shrink-0 animate-float">

                {/* Background glow */}
                <div className="absolute inset-0 rounded-2xl bg-[#66FCF1]/10 blur-3xl " aria-hidden="true" />

                {/* Main image */}
                <div className="w-full h-[380px] flex-shrink-0">
                  <img
                    src={HeroImg}
                    alt="Zelquent Tech development team collaborating"
                    className="w-full h-full object-cover rounded-2xl border border-[#45A29E]/30 shadow-2xl"
                    loading="eager"
                  />
                </div>

                {/* Floating AI Badge */}
                <div className="absolute -bottom-4 -left-4 animate-float-delayed bg-[#1F2833] border border-[#66FCF1]/30 rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl">
                  <div className="w-8 h-8 rounded-lg bg-[#66FCF1]/10 flex items-center justify-center">
                    <Brain className="w-4 h-4 text-[#66FCF1]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">AI-Ready Development</div>
                    <div className="text-[#C5C6C7] text-xs">OpenAI • LangChain • LLM Integration</div>
                  </div>
                </div>

                {/* Accessibility Badge */}
                <div className="absolute -top-4 -right-4 animate-float-slow bg-[#1F2833] border border-[#66FCF1]/30 rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl">
                  <div className="w-8 h-8 rounded-lg bg-[#66FCF1]/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-[#66FCF1]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">WCAG 2.1 Compliant</div>
                    <div className="text-[#C5C6C7] text-xs">Accessibility First Approach</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section
          className="py-20 bg-[#1F2833]/30"
          aria-labelledby="services-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="text-[#66FCF1] text-xs font-semibold uppercase tracking-widest">
                What We Do Best
              </span>
              <h2
                id="services-heading"
                className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4"
              >
                Featured Services
              </h2>
              <p className="text-[#C5C6C7] max-w-2xl mx-auto">
                End-to-end digital solutions — from design to deployment, with AI and accessibility at the core.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="card-hover bg-[#1F2833] border border-[#45A29E]/20 rounded-2xl p-6 hover:border-[#66FCF1]/40 transition-all min-h-[320px]"
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl bg-[#66FCF1]/10 border border-[#66FCF1]/20 flex items-center justify-center mb-4"
                    aria-hidden="true"
                  >
                    {s.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {s.title}
                  </h3>

                  <p className="text-[#C5C6C7] text-sm leading-relaxed mb-4">
                    {s.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4 min-h-[28px]">
                    {s.keywords.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#0B0C10] border border-[#45A29E]/40 text-[#45A29E] px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Learn More */}
                  <button
                    onClick={() => navigate('/contact')}
                    className="flex items-center gap-1 text-[#66FCF1] text-sm font-medium hover:gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833] rounded-md px-2 py-1"
                    aria-label={`Learn more about our ${s.title} services`}
                  >
                    Learn more
                    <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section
          className="py-20"
          aria-labelledby="projects-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="text-[#66FCF1] text-xs font-semibold uppercase tracking-widest">
                Our Latest Work
              </span>
              <h2
                id="projects-heading"
                className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4"
              >
                Featured Projects
              </h2>
              <p className="text-[#C5C6C7] max-w-2xl mx-auto">
                Explore our latest AI-powered web applications and full-stack solutions.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="card-hover bg-[#1F2833] border border-[#45A29E]/20 rounded-2xl overflow-hidden hover:border-[#66FCF1]/40 transition-all"
                >
                  {/* Project Image - FIXED with proper dimensions */}
                  <div className="relative w-full aspect-video overflow-hidden bg-[#0B0C10]">
                    <img
                      src={p.img}
                      alt={p.seo?.alt || `${p.title} - ${p.type} AI-powered web application screenshot`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                      width={IMAGE_DIMENSIONS.project.width}
                      height={IMAGE_DIMENSIONS.project.height}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent" aria-hidden="true" />

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="text-xs bg-[#66FCF1]/10 border border-[#66FCF1]/30 text-[#66FCF1] px-2 py-1 rounded-md">
                        {p.type}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-5">
                    <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                    <p className="text-[#C5C6C7] text-sm mb-3 leading-relaxed line-clamp-2 min-h-[42px]">{p.desc}</p>

                    {/* Tech Stack - FIXED with min-height */}
                    <div className="flex flex-wrap gap-1.5 mb-2 min-h-[28px]" aria-label="Technologies used">
                      {p.stack.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-[#0B0C10] border border-[#45A29E]/40 text-[#45A29E] px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* AI Feature Indicator */}
                    <div className="flex items-center gap-1 mt-2">
                      <Sparkles className="w-3 h-3 text-[#66FCF1]" aria-hidden="true" />
                      <span className="text-[#66FCF1] text-xs">AI-Powered</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-10">
              <button
                onClick={() => navigate('/portfolio')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#45A29E] text-[#C5C6C7] hover:border-[#66FCF1] hover:text-[#66FCF1] transition-all text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#0B0C10]"
                aria-label="View all projects in our portfolio"
              >
                View All Projects <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section
          className="py-20 bg-[#1F2833]/30"
          aria-labelledby="why-us-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <span className="text-[#66FCF1] text-xs font-semibold uppercase tracking-widest">
                  Why Choose Us
                </span>
                <h2
                  id="why-us-heading"
                  className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-6"
                >
                  End-to-end Development. <span className="text-[#66FCF1]">Accessible</span>.{" "}
                  <span className="text-[#66FCF1]">AI-Ready</span>.
                </h2>

                {/* Benefits List */}
                <ul className="space-y-4" role="list">
                  {[
                    {
                      title: "Full-stack expertise",
                      desc: "End-to-end delivery from database design to responsive frontend"
                    },
                    {
                      title: "GenAI integration ready",
                      desc: "ChatGPT, LangChain, OpenAI — we build intelligent features"
                    },
                    {
                      title: "Accessibility-first",
                      desc: "WCAG 2.1 compliant, screen-reader optimized, keyboard navigable"
                    },
                    {
                      title: "Performance focused",
                      desc: "Sub-3 second load times, optimized Core Web Vitals"
                    },
                    {
                      title: "Transparent communication",
                      desc: "Regular updates, on-time delivery, agile methodology"
                    },
                  ].map((point) => (
                    <li key={point.title} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#66FCF1]/10 border border-[#66FCF1]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-[#66FCF1]" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-white text-sm font-medium">{point.title}</span>
                        <span className="text-[#C5C6C7] text-sm ml-1">— {point.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Stats - FIXED with min-height */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 min-h-[200px]">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-[#1F2833] border border-[#45A29E]/20 rounded-2xl p-6 text-center hover:border-[#66FCF1]/40 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#66FCF1]/10 border border-[#66FCF1]/20 flex items-center justify-center mx-auto mb-3 text-[#66FCF1]">
                      {s.icon}
                    </div>

                    <div className="text-3xl font-bold text-white mb-1">
                      {s.value}
                    </div>

                    <div className="text-gray-300 text-xs leading-snug">
                      {s.label}
                    </div>

                    <div className="sr-only">{s.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          className="py-20"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="text-[#66FCF1] text-xs font-semibold uppercase tracking-widest">
                Client Success Stories
              </span>
              <h2
                id="testimonials-heading"
                className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4"
              >
                What Our Clients Say
              </h2>
              <p className="text-[#C5C6C7] max-w-2xl mx-auto">
                Don't just take our word for it — hear from some of our satisfied clients.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <article
                  key={t.name}
                  className="card-hover bg-[#1F2833] border border-[#45A29E]/20 rounded-2xl p-6 hover:border-[#66FCF1]/40 transition-all min-h-[220px]"
                >
                  {/* Rating Stars */}
                  <div
                    className="flex gap-1 mb-3 text-[#66FCF1]"
                  >
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 text-sm leading-relaxed italic mb-4">
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div className="text-[#66FCF1] text-sm font-semibold">
                    {t.name}
                  </div>
                  <div className="text-gray-300 text-xs">
                    {t.title}
                  </div>
                </article>
              ))}
            </div>

            {/* View All Testimonials Link */}
            <div className="text-center mt-8">
              <button
                onClick={() => navigate('/testimonials')}
                className="inline-flex items-center gap-1 text-[#66FCF1] text-sm font-medium hover:gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#0B0C10] rounded-md px-3 py-2"
                aria-label="Read more client testimonials"
              >
                Read More Success Stories <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          className="py-20"
          aria-label="Call to action section"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-[#1F2833] border border-[#45A29E]/30 p-12 text-center overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#66FCF1]/5 rounded-full blur-xl sm:blur-3xl" aria-hidden="true" />

              {/* Content */}
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to Build Your <span className="text-[#66FCF1]">AI-Powered</span> Web Application?
                </h2>
                <p className="text-[#C5C6C7] text-lg mb-8 max-w-2xl mx-auto">
                  Let's collaborate and turn your idea into a full-stack reality with cutting-edge AI integration
                  and WCAG-compliant accessibility.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#66FCF1] text-[#0B0C10] font-bold text-base hover:bg-[#45A29E] transition-all hover:scale-105 animate-pulse-glow focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833]"
                    aria-label="Start a project with Zelquent Tech"
                  >
                    <Zap className="w-5 h-5" aria-hidden="true" role="img" aria-label="Zap" />
                    Start a Project
                  </button>
                  <button
                    onClick={() => navigate('/services')}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#45A29E] text-[#C5C6C7] hover:border-[#66FCF1] hover:text-[#66FCF1] transition-all focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833]"
                    aria-label="Explore our services"
                  >
                    Explore Services <ArrowRight className="w-5 h-5" aria-hidden="true" role="img" aria-label="Arrow Right" />
                  </button>
                </div>

                {/* Trust Indicators - FIXED with min-height */}
                <div className="mt-8 flex items-center justify-center gap-6 text-xs text-[#C5C6C7] min-h-[40px]">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3" aria-hidden="true" role="img" aria-label="Shield" /> WCAG 2.1 Compliant
                  </span>
                  <span className="flex items-center gap-1">
                    <Rocket className="w-3 h-3" aria-hidden="true" role="img" aria-label="Rocket" /> Sub-3s Load Time
                  </span>
                  <span className="flex items-center gap-1">
                    <Brain className="w-3 h-3" aria-hidden="true" role="img" aria-label="Brain" /> AI-Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}