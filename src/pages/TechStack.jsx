import { useNavigate } from "react-router-dom";
import { 
  Code2, 
  Server, 
  Database, 
  Bot, 
  Cloud, 
  Palette,
  Zap,
  Rocket,
  Box,
  Layers,
  Gauge,
  CheckCircle2
} from 'lucide-react';
import { Helmet } from "react-helmet-async";
import React, { useState } from 'react';


// Enhanced categories with detailed technology descriptions
const categories = [
  {
    icon: <Code2 className="w-5 h-5 text-[#66FCF1]" aria-hidden="true" />,
    label: "Frontend Development",
    shortLabel: "Frontend",
    description: "Modern, responsive user interfaces built with cutting-edge frameworks",
    items: [
      { name: "React", level: "95", description: "Component-based UI development" },
      { name: "TailwindCSS", level: "95", description: "Utility-first CSS framework" },
      { name: "TypeScript", level: "90", description: "Type-safe JavaScript" },
      { name: "Redux", level: "85", description: "State management" },
      { name: "Next.js", level: "80", description: "React framework for production" },
      { name: "Vite", level: "85", description: "Next-gen build tool" },
      { name: "Framer Motion", level: "80", description: "Animation library" }
    ],
  },
  {
    icon: <Server className="w-5 h-5 text-[#66FCF1]" aria-hidden="true" />,
    label: "Backend Development",
    shortLabel: "Backend",
    description: "Scalable, secure server-side applications and APIs",
    items: [
      { name: "Spring Boot", level: "90", description: "Java-based framework" },
      { name: "Node.js", level: "90", description: "JavaScript runtime" },
      { name: "Express", level: "85", description: "Web framework for Node.js" },
      { name: "REST APIs", level: "95", description: "API design and implementation" },
      { name: "GraphQL", level: "75", description: "Query language for APIs" },
      { name: "WebSockets", level: "80", description: "Real-time communication" },
      { name: "JWT/OAuth", level: "85", description: "Authentication & authorization" }
    ],
  },
  {
    icon: <Database className="w-5 h-5 text-[#66FCF1]" aria-hidden="true" />,
    label: "Database & Data Management",
    shortLabel: "Database",
    description: "Efficient data storage, querying, and optimization",
    items: [
      { name: "MongoDB", level: "90", description: "NoSQL database" },
      { name: "MySQL", level: "85", description: "Relational database" },
      { name: "PostgreSQL", level: "85", description: "Advanced relational database" },
      { name: "Redis", level: "75", description: "In-memory data store" },
      { name: "Prisma", level: "80", description: "Next-gen ORM" },
      { name: "Mongoose", level: "85", description: "MongoDB ODM" }
    ],
  },
  {
    icon: <Bot className="w-5 h-5 text-[#66FCF1]" aria-hidden="true" />,
    label: "AI & Machine Learning",
    shortLabel: "AI/ML",
    description: "Cutting-edge AI integration and automation",
    items: [
      { name: "OpenAI API", level: "85", description: "GPT models integration" },
      { name: "LangChain", level: "80", description: "LLM application framework" },
      { name: "Hugging Face", level: "75", description: "Transformers & models" },
      { name: "Python", level: "80", description: "AI/ML programming" },
      { name: "TensorFlow.js", level: "70", description: "ML in the browser" },
      { name: "Groq API", level: "75", description: "Fast LLM inference" }
    ],
  },
  {
    icon: <Cloud className="w-5 h-5 text-[#66FCF1]" aria-hidden="true" />,
    label: "DevOps & Cloud",
    shortLabel: "DevOps",
    description: "Infrastructure, deployment, and automation",
    items: [
      { name: "Docker", level: "85", description: "Containerization" },
      { name: "AWS", level: "80", description: "Cloud services (EC2, S3)" },
      { name: "Git", level: "95", description: "Version control" },
      { name: "GitHub Actions", level: "80", description: "CI/CD automation" },
      { name: "Nginx", level: "75", description: "Web server & reverse proxy" },
      { name: "Postman", level: "90", description: "API testing" },
      { name: "Kubernetes", level: "65", description: "Container orchestration" }
    ],
  },
  {
    icon: <Palette className="w-5 h-5 text-[#66FCF1]" aria-hidden="true" />,
    label: "UI/UX Design",
    shortLabel: "Design",
    description: "User-centered design with accessibility focus",
    items: [
      { name: "Figma", level: "90", description: "Collaborative design" },
      { name: "Framer", level: "75", description: "Interactive prototypes" },
      { name: "Adobe XD", level: "80", description: "UI/UX design" },
      { name: "Sketch", level: "70", description: "Digital design" },
      { name: "WCAG 2.1", level: "85", description: "Accessibility standards" },
      { name: "Design Systems", level: "80", description: "Component libraries" }
    ],
  },
];

// Proficiency summary data
const proficiencySummary = [
  { category: "Frontend", average: 88, icon: <Code2 className="w-4 h-4" /> },
  { category: "Backend", average: 86, icon: <Server className="w-4 h-4" /> },
  { category: "Database", average: 83, icon: <Database className="w-4 h-4" /> },
  { category: "AI/ML", average: 77, icon: <Bot className="w-4 h-4" /> },
  { category: "DevOps", average: 79, icon: <Cloud className="w-4 h-4" /> },
  { category: "Design", average: 80, icon: <Palette className="w-4 h-4" /> },
];

// Tech stack stats
const stats = [
  { icon: <Box className="w-4 h-4" />, value: "25+", label: "Technologies" },
  { icon: <Layers className="w-4 h-4" />, value: "6", label: "Core Categories" },
  { icon: <Rocket className="w-4 h-4" />, value: "10+", label: "Projects Delivered" },
  { icon: <Gauge className="w-4 h-4" />, value: "85%", label: "Avg. Proficiency" },
];

// Structured data for technologies
const techStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Zelquent Tech Stack",
  "description": "Technologies and tools used by Zelquent Tech for web development, AI integration, and DevOps",
  "itemListElement": categories.flatMap((cat, catIndex) => 
    cat.items.map((item, itemIndex) => ({
      "@type": "ListItem",
      "position": catIndex * 10 + itemIndex + 1,
      "name": item.name,
      "description": item.description,
      "category": cat.label
    }))
  )
};

export default function TechStack() {
  const navigate = useNavigate();
  const [expandedCategory, setExpandedCategory] = React.useState(null);

  return (
    <>
      {/* Enhanced Page-specific SEO */}
      <Helmet>
        <title>Tech Stack | Zelquent Tech - React, Spring Boot, AI & Cloud Technologies</title>
        <meta
          name="description"
          content="Explore Zelquent Tech's comprehensive technology stack: React, Spring Boot, Node.js, MongoDB, OpenAI, LangChain, Docker, AWS, and more. Full-stack expertise from frontend to AI integration."
        />
        <meta
          name="keywords"
          content="Zelquent Tech stack, React development, Spring Boot experts, Node.js developers, MongoDB database, OpenAI integration, LangChain, Docker containers, AWS cloud, full stack technologies, web development tools, AI/ML stack, DevOps tools, Figma design, TypeScript, TailwindCSS, REST APIs, GraphQL"
        />
        <meta name="author" content="Zelquent Tech" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Tech Stack | Zelquent Tech - Modern Development Technologies" />
        <meta property="og:description" content="Discover our technology expertise: React, Spring Boot, Node.js, AI integration with OpenAI, and cloud deployment with Docker & AWS." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zelquent.com/tech-stack" />
        <meta property="og:image" content="https://zelquent.com/tech-og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tech Stack | Zelquent Tech - Modern Development Technologies" />
        <meta name="twitter:description" content="Explore our technology expertise across frontend, backend, AI, and cloud." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://zelquent.com/tech-stack" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(techStructuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0B0C10] ">
        {/* Hero Section */}
        <section 
          className="grid-bg relative py-16 border-b border-[#1F2833] overflow-hidden"
          aria-labelledby="tech-hero-heading"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#66FCF1]/5 via-transparent to-transparent" aria-hidden="true" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <span className="text-[#66FCF1] text-xs font-semibold uppercase tracking-widest">
              Our Tools & Skills
            </span>
            <h1 
              id="tech-hero-heading" 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4 cyan-glow"
            >
              The Tech Behind <span className="text-[#66FCF1]">the Magic</span>
            </h1>
            <p className="text-[#C5C6C7] text-lg sm:text-xl max-w-2xl mx-auto">
              Carefully chosen tools and technologies that power every product we build — 
              from responsive frontends to intelligent AI systems.
            </p>

            {/* Tech stack stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {stats.map(stat => (
                <div 
                  key={stat.label} 
                  className="flex items-center gap-2 bg-[#1F2833] px-4 py-2 rounded-lg border border-[#45A29E]/20"
                >
                  <span className="text-[#66FCF1]">{stat.icon}</span>
                  <span className="text-white font-bold">{stat.value}</span>
                  <span className="text-[#C5C6C7] text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Categories Grid */}
        <section 
          className="py-20"
          aria-labelledby="stack-grid-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="stack-grid-heading" className="sr-only">Technology Categories</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" role="list">
              {categories.map((category, index) => (
                <article 
                  key={category.label} 
                  className="card-hover bg-[#1F2833] border border-[#45A29E]/20 rounded-2xl p-8 hover:border-[#66FCF1]/40 transition-all"
                  role="listitem"
                  aria-label={`${category.label} technologies`}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#66FCF1]/10 border border-[#66FCF1]/20 flex items-center justify-center">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-xl">{category.label}</h3>
                      <p className="text-[#C5C6C7] text-xs mt-1">{category.description}</p>
                    </div>
                    
                    {/* Proficiency badge */}
                    <div className="ml-auto">
                      <span className="text-xs bg-[#66FCF1]/10 border border-[#66FCF1]/30 text-[#66FCF1] px-2 py-1 rounded-full">
                        {proficiencySummary[index].average}% avg
                      </span>
                    </div>
                  </div>

                  {/* Technologies grid */}
                  <div 
                    className="grid grid-cols-2 sm:grid-cols-3 gap-2" 
                    role="list" 
                    aria-label={`${category.shortLabel} technologies`}
                  >
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="group relative"
                        role="listitem"
                      >
                        <div className="px-3 py-2 rounded-lg bg-[#0B0C10] border border-[#45A29E]/30 hover:border-[#66FCF1] transition-all cursor-default">
                          <div className="flex items-center justify-between">
                            <span className="text-[#C5C6C7] text-sm group-hover:text-[#66FCF1] transition-colors">
                              {item.name}
                            </span>
                            <span className="text-[#66FCF1] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                              {item.level}%
                            </span>
                          </div>
                          
                          {/* Tooltip with description */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-[#1F2833] border border-[#66FCF1]/30 rounded-lg text-xs text-[#C5C6C7] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                            {item.description}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-[#1F2833]" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Expand for more details */}
                  <button
                    onClick={() => setExpandedCategory(expandedCategory === category.label ? null : category.label)}
                    className="mt-4 text-[#66FCF1] text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833] rounded-md px-2 py-1"
                    aria-expanded={expandedCategory === category.label}
                    aria-label={`Show more details about ${category.label} technologies`}
                  >
                    {expandedCategory === category.label ? 'Show less' : 'Show proficiency details'}
                    <Zap className={`w-3 h-3 transition-transform ${expandedCategory === category.label ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Expanded proficiency details */}
                  {expandedCategory === category.label && (
                    <div className="mt-4 pt-4 border-t border-[#45A29E]/20">
                      <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">
                        Proficiency Breakdown
                      </h4>
                      <div className="space-y-2">
                        {category.items.map((item) => (
                          <div key={item.name} className="space-y-1">
                            <div className="flex justify-between items-center">
                              <span className="text-[#C5C6C7] text-xs">{item.name}</span>
                              <span className="text-[#66FCF1] text-xs font-medium">{item.level}%</span>
                            </div>
                            <div 
                              className="h-1.5 bg-[#0B0C10] rounded-full overflow-hidden"
                              role="progressbar"
                              aria-valuenow={parseInt(item.level)}
                              aria-valuemin="0"
                              aria-valuemax="100"
                              aria-label={`${item.name} proficiency: ${item.level}%`}
                            >
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-[#45A29E] to-[#66FCF1]"
                                style={{ width: `${item.level}%` }}
                                aria-hidden="true"
                              />
                            </div>
                            <p className="text-[#C5C6C7] text-xs mt-1">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Proficiency Overview Section - Uncommented and Enhanced */}
        {/* <section 
          className="py-16 bg-[#1F2833]/30"
          aria-labelledby="proficiency-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-10">
              <span className="text-[#66FCF1] text-xs font-semibold uppercase tracking-widest">
                Expertise Levels
              </span>
              <h2 id="proficiency-heading" className="text-3xl font-bold text-white mt-2">
                Our Technology Proficiency
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
              {proficiencySummary.map((item) => (
                <div 
                  key={item.category}
                  className="bg-[#1F2833] border border-[#45A29E]/20 rounded-xl p-4 text-center hover:border-[#66FCF1]/40 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#66FCF1]/10 border border-[#66FCF1]/20 flex items-center justify-center mx-auto mb-2 text-[#66FCF1]">
                    {item.icon}
                  </div>
                  <div className="text-white font-bold text-lg">{item.average}%</div>
                  <div className="text-[#C5C6C7] text-xs">{item.category}</div>
                </div>
              ))}
            </div>

            <div className="space-y-5" role="list" aria-label="Core skill proficiency levels">
              {[
                { skill: "React & Frontend Development", pct: 95, icon: <Code2 className="w-4 h-4" /> },
                { skill: "Spring Boot & Backend APIs", pct: 90, icon: <Server className="w-4 h-4" /> },
                { skill: "Database Design & Optimization", pct: 85, icon: <Database className="w-4 h-4" /> },
                { skill: "AI & LLM Integration", pct: 82, icon: <Bot className="w-4 h-4" /> },
                { skill: "UI/UX & Design Systems", pct: 80, icon: <Palette className="w-4 h-4" /> },
                { skill: "DevOps & Cloud Deployment", pct: 78, icon: <Cloud className="w-4 h-4" /> },
              ].map((skill) => (
                <div key={skill.skill} className="space-y-2" role="listitem">
                  <div className="flex justify-between items-center">
                    <span className="text-[#C5C6C7] text-sm font-medium flex items-center gap-2">
                      <span className="text-[#66FCF1]">{skill.icon}</span>
                      {skill.skill}
                    </span>
                    <span className="text-[#66FCF1] text-sm font-bold" aria-label={`${skill.pct} percent proficient`}>
                      {skill.pct}%
                    </span>
                  </div>
                  <div 
                    className="h-2.5 bg-[#0B0C10] rounded-full overflow-hidden border border-[#45A29E]/20"
                    role="progressbar"
                    aria-valuenow={skill.pct}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={`${skill.skill} proficiency: ${skill.pct}%`}
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#45A29E] to-[#66FCF1] relative"
                      style={{ width: `${skill.pct}%` }}
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 bg-white/10 animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-[#C5C6C7] text-sm mt-8 italic">
              We continuously invest in learning new technologies to stay at the cutting edge.
            </p>
          </div>
        </section> */}

        {/* Why This Tech Stack Matters */}
        {/* <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Why We Chose <span className="text-[#66FCF1]">This Stack</span>
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Performance First",
                      desc: "React + Vite + TailwindCSS for lightning-fast UIs",
                      icon: <Gauge className="w-4 h-4 text-[#66FCF1]" />
                    },
                    {
                      title: "Scalable Backend",
                      desc: "Spring Boot & Node.js for enterprise-grade applications",
                      icon: <Server className="w-4 h-4 text-[#66FCF1]" />
                    },
                    {
                      title: "Future-Ready AI",
                      desc: "OpenAI & LangChain for intelligent features",
                      icon: <Brain className="w-4 h-4 text-[#66FCF1]" />
                    },
                    {
                      title: "Reliable Infrastructure",
                      desc: "Docker & AWS for robust, scalable deployments",
                      icon: <Cloud className="w-4 h-4 text-[#66FCF1]" />
                    },
                    {
                      title: "Accessibility First",
                      desc: "WCAG 2.1 compliant design and development",
                      icon: <Eye className="w-4 h-4 text-[#66FCF1]" />
                    },
                    {
                      title: "Mobile Responsive",
                      desc: "Mobile-first approach for all devices",
                      icon: <Smartphone className="w-4 h-4 text-[#66FCF1]" />
                    }
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-[#66FCF1]/10 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-medium">{item.title}</h4>
                        <p className="text-[#C5C6C7] text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1F2833] border border-[#45A29E]/20 rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-4">Technology Distribution</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-24 text-[#C5C6C7] text-xs">Frontend</div>
                    <div className="flex-1 h-2 bg-[#0B0C10] rounded-full overflow-hidden">
                      <div className="h-full bg-[#66FCF1] rounded-full" style={{ width: '30%' }} />
                    </div>
                    <span className="text-white text-xs">30%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 text-[#C5C6C7] text-xs">Backend</div>
                    <div className="flex-1 h-2 bg-[#0B0C10] rounded-full overflow-hidden">
                      <div className="h-full bg-[#66FCF1] rounded-full" style={{ width: '25%' }} />
                    </div>
                    <span className="text-white text-xs">25%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 text-[#C5C6C7] text-xs">Database</div>
                    <div className="flex-1 h-2 bg-[#0B0C10] rounded-full overflow-hidden">
                      <div className="h-full bg-[#66FCF1] rounded-full" style={{ width: '15%' }} />
                    </div>
                    <span className="text-white text-xs">15%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 text-[#C5C6C7] text-xs">AI/ML</div>
                    <div className="flex-1 h-2 bg-[#0B0C10] rounded-full overflow-hidden">
                      <div className="h-full bg-[#66FCF1] rounded-full" style={{ width: '15%' }} />
                    </div>
                    <span className="text-white text-xs">15%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 text-[#C5C6C7] text-xs">DevOps</div>
                    <div className="flex-1 h-2 bg-[#0B0C10] rounded-full overflow-hidden">
                      <div className="h-full bg-[#66FCF1] rounded-full" style={{ width: '10%' }} />
                    </div>
                    <span className="text-white text-xs">10%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 text-[#C5C6C7] text-xs">Design</div>
                    <div className="flex-1 h-2 bg-[#0B0C10] rounded-full overflow-hidden">
                      <div className="h-full bg-[#66FCF1] rounded-full" style={{ width: '5%' }} />
                    </div>
                    <span className="text-white text-xs">5%</span>
                  </div>
                </div>
                <p className="text-[#C5C6C7] text-xs mt-4 text-center">
                  *Approximate distribution based on project requirements
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-16" aria-label="Call to action">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-[#1F2833] border border-[#45A29E]/30 p-12 text-center overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#66FCF1]/5 rounded-full blur-3xl" aria-hidden="true" />
              
              {/* Content */}
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to Build with These Technologies?
                </h2>
                <p className="text-[#C5C6C7] text-lg mb-8 max-w-2xl mx-auto">
                  Let's use our tech expertise to bring your project to life with modern, 
                  scalable, and future-proof solutions.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#66FCF1] text-[#0B0C10] font-bold text-base hover:bg-[#45A29E] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833]"
                    aria-label="Contact us to start your project"
                  >
                    <Zap className="w-5 h-5" aria-hidden="true" />
                    Work With Us
                  </button>
                  <button
                    onClick={() => navigate('/services')}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#45A29E] text-[#C5C6C7] hover:border-[#66FCF1] hover:text-[#66FCF1] transition-all focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833]"
                    aria-label="Explore our services"
                  >
                    Our Solutions
                  </button>
                </div>

                {/* Tech stack badge */}
                <div className="mt-6 inline-flex items-center gap-2 bg-[#0B0C10] px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-3 h-3 text-[#66FCF1]" />
                  <span className="text-[#C5C6C7] text-xs">Modern, scalable, and battle-tested technologies</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

