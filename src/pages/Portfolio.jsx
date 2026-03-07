import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {
  ExternalLink,
  Github,
  ShoppingCart,
  GraduationCap,
  Bot,
  Code2,
  Sparkles,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  Eye,
  Figma,
  Shield,
  Rocket
} from 'lucide-react';
import { Helmet } from "react-helmet-async";


// Import project images with proper naming
import ProjectImg from "../assets/projects/project-image-1.jpg";
import ReportImg from "../assets/projects/project-image-2.jpg";
import ZelquentAi from "../assets/projects/project-image-3.jpg";
import E_CommcerceImg from "../assets/projects/project-image-4.jpg";



// Enhanced projects data with comprehensive details
const projects = [
  {
    id: "hospital-management-system",
    img: ProjectImg,
    icon: <ShoppingCart className="w-5 h-5" aria-hidden="true" />,
    title: "Hospital Management System",
    shortTitle: "Hospital Management",
    type: "Healthcare Application",
    category: "full-stack",
    stack: ["React", "Node.js", "MongoDB", "JWT", "Express.js", "TailwindCSS"],
    overview: "A comprehensive hospital management system that streamlines patient care, appointment scheduling, and medical records management for healthcare facilities.",
    longDescription: "This enterprise-grade hospital management system digitizes healthcare operations with role-based access for administrators, doctors, and patients. It features real-time appointment scheduling, secure medical records, automated billing, and comprehensive reporting.",
    features: [
      "Patient management dashboard with analytics",
      "Appointment scheduling with calendar integration",
      "Secure medical records management (HIPAA compliant)",
      "Automated billing and invoicing system",
      "Multi-role user management (Admin, Doctor, Patient)",
      "Real-time notifications via email/SMS"
    ],
    challenges: [
      "Implementing role-based access control with JWT",
      "Optimizing database queries for patient records",
      "Ensuring HIPAA compliance for medical data"
    ],
    solutions: [
      "Custom middleware for role validation",
      "MongoDB indexing and aggregation pipelines",
      "End-to-end encryption for sensitive data"
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://zelquent-hospital-management.onrender.com/",
        icon: <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />,
        type: "demo"
      },
      {
        label: "GitHub",
        href: "https://github.com/ZelqentTech/hospital-management",
        icon: <Github className="w-3.5 h-3.5" aria-hidden="true" />,
        type: "github"
      }
    ],
    seo: {
      keywords: ["hospital management system", "healthcare software", "patient management", "medical records system"],
      description: "Complete hospital management system with patient records, appointment scheduling, and billing automation."
    }
  },
  {
    id: "report-generation",
    img: ReportImg,
    icon: <GraduationCap className="w-5 h-5" aria-hidden="true" />,
    title: "AI Report Generation Platform",
    shortTitle: "Report Generation",
    type: "Educational AI Tool",
    category: "ai-integration",
    stack: ["Next.js", "Express.js", "PostgreSQL", "JWT", "OpenAI API", "TailwindCSS"],
    overview: "An intelligent report generation platform for educational institutions with AI-powered insights, instructor dashboards, and real-time progress tracking.",
    longDescription: "This AI-powered platform automates the creation of student progress reports, saving educators hours of manual work. It analyzes performance data to generate personalized insights and recommendations for each student.",
    features: [
      "AI-powered report generation with OpenAI",
      "Real-time progress tracking dashboards",
      "JWT authentication with role-based access",
      "Batch report generation for multiple students",
      "Customizable report templates",
      "Data visualization with charts and graphs"
    ],
    challenges: [
      "Integrating OpenAI API for natural language generation",
      "Handling concurrent report generation requests",
      "Designing scalable database schema for educational data"
    ],
    solutions: [
      "Queue-based processing for API rate limits",
      "Connection pooling for PostgreSQL",
      "Caching frequently accessed data with Redis"
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://zelquent-report-generation.onrender.com/",
        icon: <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />,
        type: "demo"
      },
      {
        label: "GitHub",
        href: "https://github.com/ZelqentTech/report-generation",
        icon: <Github className="w-3.5 h-3.5" aria-hidden="true" />,
        type: "github"
      }
    ],
    seo: {
      keywords: ["AI report generation", "educational software", "student progress tracking", "automated reporting"],
      description: "AI-powered report generation platform for educational institutions with automated insights and progress tracking."
    }
  },
  {
    id: "zelquent-ai",
    img: ZelquentAi,
    icon: <Bot className="w-5 h-5" aria-hidden="true" />,
    title: "Zelquent AI Assistant",
    shortTitle: "AI Assistant",
    type: "AI Chat Platform",
    category: "ai-integration",
    stack: ["React", "Groq API", "HuggingFace API", "LangChain", "TailwindCSS", "Vite"],
    overview: "Zelquent AI is an advanced AI assistant platform that delivers real-time intelligent conversations, image understanding, and smart automation powered by Groq and HuggingFace AI models.",
    longDescription: "A cutting-edge AI platform combining multiple AI models for text generation, image analysis, and contextual conversations. Features ultra-fast inference with Groq's LPU technology and versatile image understanding with HuggingFace models.",
    features: [
      "Real-time conversational AI powered by Groq (ultra-fast inference)",
      "AI image analysis using HuggingFace vision models",
      "Context-aware responses with LangChain integration",
      "Multi-model support for different tasks",
      "Conversation history and session management",
      "Modern responsive UI with dark/light mode"
    ],
    challenges: [
      "Integrating multiple AI providers (Groq, HuggingFace)",
      "Managing API rate limits and costs",
      "Maintaining conversation context across sessions"
    ],
    solutions: [
      "Fallback mechanisms between providers",
      "Caching frequent responses with Redis",
      "Session storage with MongoDB"
    ],
    links: [
      {
        label: "Try AI Chat",
        href: "https://zelquent-ai.onrender.com/",
        icon: <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />,
        type: "demo"
      },
    ],
    seo: {
      keywords: ["AI assistant", "chatbot", "Groq API", "HuggingFace", "LangChain", "AI chat platform"],
      description: "Advanced AI assistant with real-time conversations and image understanding powered by Groq and HuggingFace."
    }
  },
  {
    id: "e-commerce-ui",
    img: E_CommcerceImg,
    icon: <ShoppingCart className="w-5 h-5" aria-hidden="true" />,
    title: "E-Commerce Mobile UI Design",
    shortTitle: "E-Commerce UI",
    type: "Mobile App Design",
    category: "ui-ux",
    stack: ["Figma", "UI/UX Design", "Mobile App Design", "Prototyping", "Design System"],
    overview: "A modern E-Commerce mobile UI design focused on intuitive shopping experiences, including product discovery, cart flow, checkout process, user account, and admin dashboard layouts.",
    longDescription: "A comprehensive mobile e-commerce design system featuring 50+ screens covering the entire customer journey. Includes product browsing, search filters, cart management, secure checkout, order tracking, and admin panels with detailed analytics.",
    features: [
      "Product browsing with category filtering",
      "Advanced search with AI recommendations",
      "Shopping cart and secure checkout flow",
      "User account and profile management",
      "Order tracking and delivery status",
      "Admin dashboard with inventory management",
      "Analytics and sales reporting"
    ],
    challenges: [
      "Designing intuitive mobile navigation",
      "Creating consistent design system",
      "Optimizing for accessibility (WCAG 2.1)"
    ],
    solutions: [
      "Bottom navigation with gesture controls",
      "Comprehensive Figma component library",
      "High contrast and proper touch targets"
    ],
    links: [
      {
        label: "View in Figma",
        href: "https://www.figma.com/design/MNgHO0MUHxXZIHVJGyIbpo/E-Commerce?node-id=2-3&t=NTSCzWXwnIsKmoPd-1",
        icon: <Figma className="w-3.5 h-3.5" aria-hidden="true" />,
        type: "figma"
      }
    ],
    seo: {
      keywords: ["e-commerce UI design", "mobile app design", "Figma design", "shopping app UI", "UX design"],
      description: "Modern e-commerce mobile UI design with 50+ screens including product browsing, checkout, and admin dashboard."
    }
  }
];

// Portfolio statistics
const stats = [
  { icon: <Rocket className="w-4 h-4" />, value: "4", label: "Projects Launched" },
  { icon: <Users className="w-4 h-4" />, value: "3+", label: "Technologies Used" },
  { icon: <Clock className="w-4 h-4" />, value: "99%", label: "Client Satisfaction" },
  { icon: <Shield className="w-4 h-4" />, value: "100%", label: "Accessibility Compliant" },
];

// Categories filter
const categories = [
  { id: "all", label: "All Projects" },
  { id: "full-stack", label: "Full Stack" },
  { id: "ai-integration", label: "AI Integration" },
  { id: "ui-ux", label: "UI/UX Design" },
];

// Structured data for projects
const projectsStructuredData = projects.map(project => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": project.title,
  "description": project.overview,
  "creator": {
    "@type": "Organization",
    "name": "Zelquent Tech"
  },
  "keywords": project.stack.join(", "),
  "url": project.links[0]?.href
}));

export default function Portfolio() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = React.useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Enhanced Page-specific SEO */}
      <Helmet>
        <title>Portfolio | Zelquent Tech - Web Development, AI & UI/UX Design Projects</title>
        <meta
          name="description"
          content="Explore Zelquent Tech's portfolio of web development projects including hospital management systems, AI assistants, e-commerce platforms, and mobile UI designs built with React, Node.js, and modern technologies."
        />
        <meta
          name="keywords"
          content="Zelquent Tech portfolio, web development projects, React projects, Node.js applications, AI chatbot examples, e-commerce websites, hospital management software, Figma UI designs, full stack development examples, AI integration projects, mobile app designs, portfolio website examples"
        />
        <meta name="author" content="Zelquent Tech" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Portfolio | Zelquent Tech - Web Development & AI Projects" />
        <meta property="og:description" content="Explore our portfolio of web development projects including AI assistants, hospital management systems, and e-commerce platforms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zelquent.com/portfolio" />
        <meta property="og:image" content="https://zelquent.com/portfolio-og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | Zelquent Tech - Web Development & AI Projects" />
        <meta name="twitter:description" content="Explore our portfolio of web development projects." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://zelquent.com/portfolio" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(projectsStructuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0B0C10]">
        {/* Hero Section */}
        <section
          className="grid-bg relative py-16 border-b border-[#1F2833] overflow-hidden"
          aria-labelledby="portfolio-heading"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#66FCF1]/5 via-transparent to-transparent" aria-hidden="true" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <span className="text-[#66FCF1] text-xs font-semibold uppercase tracking-widest">
              Our Work
            </span>
            <h1
              id="portfolio-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4 cyan-glow"
            >
              Projects We Are <span className="text-[#66FCF1]">Proud Of</span>
            </h1>
            <p className="text-[#C5C6C7] text-lg sm:text-xl max-w-2xl mx-auto">
              Real products built for real users — from healthcare systems to AI-powered automation
              and elegant mobile designs.
            </p>

            {/* Portfolio stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {stats.map(stat => (
                <div key={stat.label} className="flex items-center gap-2 bg-[#1F2833] px-4 py-2 rounded-lg border border-[#45A29E]/20">
                  <span className="text-[#66FCF1]">{stat.icon}</span>
                  <span className="text-white font-bold">{stat.value}</span>
                  <span className="text-[#C5C6C7] text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8" aria-label="Project categories">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Project categories">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#0B0C10] ${activeCategory === category.id
                      ? 'bg-[#66FCF1] text-[#0B0C10]'
                      : 'bg-[#1F2833] border border-[#45A29E]/20 text-[#C5C6C7] hover:border-[#66FCF1] hover:text-[#66FCF1]'
                    }`}
                  role="tab"
                  aria-selected={activeCategory === category.id}
                  aria-label={`Filter projects by ${category.label}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section
          className="py-12"
          aria-labelledby="projects-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="projects-heading" className="sr-only">Featured Projects</h2>

            <div className="space-y-16" role="list">
              {filteredProjects.map((project, index) => (
                <article
                  role="listitem"
                  key={project.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                    }`}
                  aria-label={`${project.title} project case study`}
                >
                  {/* Image Section */}
                  <div className={`relative group rounded-2xl overflow-hidden border border-[#45A29E]/20 ${index % 2 === 1 ? 'lg:col-start-2' : ''
                    }`}>
                    <img
                      src={project.img}
                      alt={`${project.title} - ${project.type} project screenshot showing the user interface and key features`}
                      width="800"
                      height="450"
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />

                    {/* Project type badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-[#66FCF1]/10 border border-[#66FCF1]/30 flex items-center justify-center text-[#66FCF1] backdrop-blur-sm">
                        {project.icon}
                      </div>
                      <span className="text-xs bg-[#0B0C10]/80 border border-[#45A29E]/40 text-[#66FCF1] px-3 py-1.5 rounded-md backdrop-blur-sm">
                        {project.type}
                      </span>
                    </div>

                    {/* Quick view overlay on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href={project.links[0]?.href} target="_blank" rel="noopener noreferrer" className="bg-[#66FCF1] text-[#0B0C10] px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                        <Eye className="w-4 h-4" /> View Project
                      </a>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`bg-[#1F2833] border border-[#45A29E]/20 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''
                    }`}>
                    {/* Title and category */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[#66FCF1] text-xs font-semibold uppercase tracking-wider">
                        {project.category === 'full-stack' && 'Full Stack Application'}
                        {project.category === 'ai-integration' && 'AI Integration'}
                        {project.category === 'ui-ux' && 'UI/UX Design'}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>

                    {/* Overview */}
                    <p className="text-[#C5C6C7] text-sm leading-relaxed mb-4">
                      {project.longDescription}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#66FCF1]" /> Key Features
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" aria-label={`Key features of ${project.title}`}>
                        {project.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[#66FCF1] flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-[#C5C6C7] text-xs">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-5">
                      <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Code2 className="w-3.5 h-3.5 text-[#66FCF1]" /> Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-1.5" aria-label={`Technologies used in ${project.title}`}>
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-[#0B0C10] border border-[#45A29E]/40 text-[#45A29E] px-2 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-wrap gap-3" role="group" aria-label={`Project links for ${project.title}`}>
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.href}
                          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833] ${link.type === 'demo' || link.type === 'figma'
                              ? 'bg-[#66FCF1] text-[#0B0C10] hover:bg-[#45A29E]'
                              : 'border border-[#45A29E] text-[#C5C6C7] hover:border-[#66FCF1] hover:text-[#66FCF1]'
                            }`}
                          aria-label={`${link.label} for ${project.title}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.icon}
                          {link.label}
                          {link.type === 'demo' && <Zap className="w-3 h-3 ml-1" aria-hidden="true" />}
                        </a>
                      ))}
                    </div>

                    {/* Challenge/Solution Accordion (optional) */}
                    {project.challenges && (
                      <details className="mt-4">
                        <summary className="text-[#66FCF1] text-xs font-medium cursor-pointer hover:text-[#45A29E]">
                          View technical challenges & solutions
                        </summary>
                        <div className="mt-3 space-y-2">
                          <div>
                            <h5 className="text-white text-xs font-medium mb-1">Challenges:</h5>
                            <ul className="list-disc list-inside">
                              {project.challenges.map((challenge, i) => (
                                <li key={i} className="text-[#C5C6C7] text-xs">{challenge}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-white text-xs font-medium mb-1">Solutions:</h5>
                            <ul className="list-disc list-inside">
                              {project.solutions.map((solution, i) => (
                                <li key={i} className="text-[#C5C6C7] text-xs">{solution}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </details>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#1F2833]/30" aria-label="Call to action">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-[#1F2833] border border-[#45A29E]/30 p-12 text-center overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#66FCF1]/5 rounded-full blur-3xl" aria-hidden="true" />

              {/* Content */}
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Like What You See?
                </h2>
                <p className="text-[#C5C6C7] text-lg mb-8 max-w-2xl mx-auto">
                  Let's build something amazing together. Your next project could be featured here.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#66FCF1] text-[#0B0C10] font-bold text-base hover:bg-[#45A29E] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833]"
                    aria-label="Contact us to start your project"
                  >
                    <Zap className="w-5 h-5" aria-hidden="true" />
                    Begin Your Project
                  </button>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#45A29E] text-[#C5C6C7] hover:border-[#66FCF1] hover:text-[#66FCF1] transition-all focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833]"
                    aria-label="Browse more projects"
                  >
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    See What We Offer
                  </button>
                </div>

                {/* Project inquiry badge */}
                <div className="mt-6 inline-flex items-center gap-2 bg-[#0B0C10] px-4 py-2 rounded-full">
                  <Clock className="w-3 h-3 text-[#66FCF1]" />
                  <span className="text-[#C5C6C7] text-xs">Average project delivery: 4-8 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

