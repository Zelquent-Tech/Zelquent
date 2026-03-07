import { useNavigate } from "react-router-dom";

import {
  Lightbulb,
  Users,
  Shield,
  BookOpen,
  Rocket,
  Target,
  Award,
  Clock,
  Code2,
  Brain,
  Globe,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Helmet } from "react-helmet-async";



// Company milestones/timeline
const milestones = [
  {
    year: "2023",
    text: "Started collaborating on side projects and open-source tools.",
    icon: <Code2 className="w-4 h-4" aria-hidden="true" />
  },
  {
    year: "2024",
    text: "Launched Zelquent Tech — building products for startups and freelancers.",
    icon: <Rocket className="w-4 h-4" aria-hidden="true" />
  },
  {
    year: "2025",
    text: "Expanded into AI-powered solutions using OpenAI & LangChain.",
    icon: <Brain className="w-4 h-4" aria-hidden="true" />
  },
  {
    year: "2026",
    text: "Serving clients globally with a growing portfolio of web products.",
    icon: <Globe className="w-4 h-4" aria-hidden="true" />
  },
];

// Company values
const values = [
  {
    icon: <Lightbulb className="w-5 h-5 text-[#66FCF1]" aria-hidden="true" />,
    title: "Innovation",
    desc: "We stay on the cutting edge of web technology and AI, constantly exploring new possibilities.",
    details: "Exploring emerging tech, prototyping solutions, implementing best practices"
  },
  {
    icon: <Users className="w-5 h-5 text-[#66FCF1]" aria-hidden="true" />,
    title: "Collaboration",
    desc: "Client-first mindset with transparent communication always.",
    details: "Regular updates, feedback loops, agile methodology, partnership approach"
  },
  {
    icon: <Shield className="w-5 h-5 text-[#66FCF1]" aria-hidden="true" />,
    title: "Reliability",
    desc: "On-time delivery and clean, maintainable code you can trust.",
    details: "95% on-time delivery, comprehensive testing, documentation, long-term support"
  },
  {
    icon: <BookOpen className="w-5 h-5 text-[#66FCF1]" aria-hidden="true" />,
    title: "Continuous Learning",
    desc: "We invest in growth so your products benefit from best practices.",
    details: "Weekly learning sessions, conference attendance, certifications, research"
  },
];

// Technology stack
const techBadges = [
  "React", "TailwindCSS", "TypeScript", "Spring Boot", "Node.js",
  "MongoDB", "MySQL", "OpenAI API", "Docker", "AWS", "Figma", "LangChain",
  "GraphQL", "PostgreSQL", "Next.js", "Python", "REST APIs", "Jest"
];

// Team members data


// Structured data for the organization
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zelquent Tech",
  "url": "https://zelquent.com",
  "logo": "https://zelquent.com/Zelquent-icon.png",
  "description": "Full-stack development team specializing in React, Spring Boot, and AI-powered solutions.",
  "foundingDate": "2024",
  "founders": [
    {
      "@type": "Person",
      "name": "Alex Chen",
      "jobTitle": "Lead Full Stack Developer"
    },
    {
      "@type": "Person",
      "name": "Sarah Martinez",
      "jobTitle": "Backend Engineer & AI Specialist"
    }
  ],
  "knowsAbout": techBadges,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "addressCountry": "US"
  }
};

// AboutPage component
export default function About() {
  const navigate = useNavigate();

  return (
    <>
      {/* Enhanced Page-specific SEO */}
      <Helmet>
        <title>About Zelquent Tech - Full Stack Development & AI Integration Team | San Francisco</title>
        <meta
          name="description"
          content="Meet the Zelquent Tech team - passionate full-stack developers specializing in React, Spring Boot, and AI-powered solutions. Learn our story, values, and expertise in web development and AI integration."
        />
        <meta
          name="keywords"
          content="Zelquent Tech team, full stack developers San Francisco, React developers, Spring Boot experts, AI integration specialists, web development team, OpenAI integration, LangChain experts, WCAG accessibility, cloud architecture, startup tech team"
        />
        <meta name="author" content="Zelquent Tech" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="About Zelquent Tech - Full Stack Development & AI Integration Team" />
        <meta property="og:description" content="Meet our team of passionate developers building AI-powered web solutions with React, Spring Boot, and modern technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zelquent.com/about" />
        <meta property="og:image" content="https://zelquent.com/about-og-image.jpg" />
        <meta property="og:site_name" content="Zelquent Tech" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Zelquent Tech - Full Stack Development & AI Integration Team" />
        <meta name="twitter:description" content="Meet our team of passionate developers building AI-powered web solutions." />
        <meta name="twitter:image" content="https://zelquent.com/about-twitter-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://zelquent.com/about" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationStructuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0B0C10]">
        {/* Hero Section */}
        <section
          className="grid-bg relative py-16 border-b border-[#1F2833] overflow-hidden"
          aria-labelledby="about-heading"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#66FCF1]/5 via-transparent to-transparent" aria-hidden="true"  />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <span className="text-[#66FCF1] text-xs font-semibold uppercase tracking-widest">
              Who We Are
            </span>
            <h1
              id="about-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 cyan-glow"
            >
              The Team Behind <span className="text-[#66FCF1]">Zelquent Tech</span>
            </h1>
            <p className="text-[#C5C6C7] text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              We're a passionate team of full-stack developers who believe in combining creativity and logic
              to craft web applications that are not just functional — but powerful, accessible, and AI-ready.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="flex items-center gap-1 text-xs text-[#C5C6C7]">
                <Award className="w-4 h-4 text-[#66FCF1]" aria-hidden="true" role="img" aria-label="Award" /> 2+ Years Combined Experience
              </span>
              <span className="flex items-center gap-1 text-xs text-[#C5C6C7]">
                <Target className="w-4 h-4 text-[#66FCF1]" aria-hidden="true" role="img" aria-label="Target" /> 10+ Projects Delivered
              </span>
              <span className="flex items-center gap-1 text-xs text-[#C5C6C7]">
                <Clock className="w-4 h-4 text-[#66FCF1]" aria-hidden="true" role="img" aria-label="Clock" /> Founded 2026
              </span>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section
          className="py-16 sm:py-20"
          aria-labelledby="story-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-12">
              <span className="text-[#66FCF1] text-xs font-semibold uppercase tracking-widest">
                Our Journey
              </span>
              <h2
                id="story-heading"
                className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4"
              >
                Building Something <span className="text-[#66FCF1]">Worth Waiting For</span>
              </h2>
            </div>

            {/* Story content */}
            <div className="space-y-6">
              <p className="text-[#C5C6C7] text-base sm:text-lg leading-relaxed">
                Zelquent Tech was born from a shared vision between two passionate developers who wanted
                to build web applications differently — with a focus on <span className="text-[#66FCF1] font-medium">performance</span>,
                <span className="text-[#66FCF1] font-medium"> accessibility</span>, and
                <span className="text-[#66FCF1] font-medium"> cutting-edge AI integration</span>.
              </p>

              <p className="text-[#C5C6C7] text-base sm:text-lg leading-relaxed">
                What started as side projects and open-source collaborations evolved into a full-fledged
                development team dedicated to helping startups and businesses bring their ideas to life.
                We specialize in full-stack development using <span className="text-white">React, TailwindCSS, and Spring Boot</span> —
                while exploring how GenAI can enhance digital experiences.
              </p>
            </div>

          </div>
        </section>

        {/* Values Section */}
        <section
          className="py-20"
          aria-labelledby="values-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-12">
              <span className="text-[#66FCF1] text-xs font-semibold uppercase tracking-widest">
                What Drives Us
              </span>
              <h2 id="values-heading" className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
                Our Core Values
              </h2>
              <p className="text-[#C5C6C7] max-w-2xl mx-auto">
                These principles guide every decision we make and every line of code we write.
              </p>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" aria-label="Our technology stack includes">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="card-hover bg-[#1F2833] border border-[#45A29E]/20 rounded-2xl p-6 hover:border-[#66FCF1]/40 transition-all"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#66FCF1]/10 border border-[#66FCF1]/20 flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-semibold text-lg mb-2 text-center">{value.title}</h3>
                  <p className="text-[#C5C6C7] text-sm leading-relaxed text-center mb-3">{value.desc}</p>

                  {/* Hidden detail for screen readers */}
                  <span className="sr-only">Additional details: {value.details}</span>

                  {/* Visual indicator for detail */}
                  <div className="w-8 h-0.5 bg-[#66FCF1]/30 mx-auto rounded-full" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section
          className="py-16 bg-[#1F2833]/30 border-t border-[#45A29E]/10"
          aria-labelledby="tech-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-8">
              <span className="text-[#66FCF1] text-xs font-semibold uppercase tracking-widest">
                Our Toolkit
              </span>
              <h2 id="tech-heading" className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
                Technologies We Master
              </h2>
            </div>

            {/* Tech badges grid */}
            <ul
              className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
              aria-label="Company core values"
            >
              {techBadges.map((tech) => (
                <li
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-[#0B0C10] border border-[#45A29E]/30 text-[#C5C6C7] text-sm hover:border-[#66FCF1] hover:text-[#66FCF1] hover:scale-105 transition-all cursor-default"
                >
                  {tech}
                </li>
              ))}
            </ul>

          
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" aria-label="Call to action">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-[#1F2833] border border-[#45A29E]/30 p-12 text-center overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#66FCF1]/5 rounded-full blur-3xl" aria-hidden="true" />

              {/* Content */}
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to Work With Us?
                </h2>
                <p className="text-[#C5C6C7] text-lg mb-8 max-w-2xl mx-auto">
                  Let's bring your ideas to life with our full-stack expertise and AI-powered solutions.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#66FCF1] text-[#0B0C10] font-bold text-base hover:bg-[#45A29E] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833]"
                    aria-label="Contact us to start a project"
                  >
                    Launch Your Project <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </button>
                  <button
                    onClick={() => navigate('/services')}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#45A29E] text-[#C5C6C7] hover:border-[#66FCF1] hover:text-[#66FCF1] transition-all focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833]"
                    aria-label="Explore our services"
                  >
                    Discover Services
                  </button>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-[#C5C6C7]">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#66FCF1]" aria-hidden="true" /> No-pressure consultation
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#66FCF1]" aria-hidden="true" /> Transparent pricing
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#66FCF1]" aria-hidden="true" /> Post-launch support
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

