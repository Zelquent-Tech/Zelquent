import { useNavigate } from "react-router-dom";
import { 
  Monitor, 
  Palette, 
  Server, 
  Bot, 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Zap,
  Shield,
  Clock,
  Users,
  Rocket,
  Code2,
  Gauge
} from 'lucide-react';
import { Helmet } from "react-helmet-async";


// Services data with enhanced details and SEO keywords
const services = [
  {
    icon: <Monitor className="w-7 h-7 text-[#66FCF1]" aria-hidden="true" />,
    title: "Full Stack Web Development",
    shortTitle: "Full Stack Development",
    desc: "End-to-end development: UI, API, DB, hosting. We handle every layer of your product from beautiful frontends to rock-solid backends using modern technologies.",
    longDesc: "From concept to deployment, we build complete web applications that are scalable, secure, and performant. Our full-stack approach ensures seamless integration between frontend and backend.",
    stack: ["React", "Spring Boot", "MySQL", "TailwindCSS", "Node.js", "PostgreSQL"],
    price: "₹25,000+",
    priceRange: "₹25,000 - ₹1,50,000",
    timeline: "4-8 weeks",
    features: [
      "Responsive UI with React & TailwindCSS",
      "RESTful API with Spring Boot/Node.js", 
      "Database design & optimization (SQL/NoSQL)",
      "Cloud deployment (AWS/Vercel/Netlify)",
      "Post-launch support & maintenance",
      "SEO optimization & performance tuning"
    ],
    seo: {
      keywords: ["React development", "Spring Boot backend", "full stack developers", "web application development"],
      description: "Professional full stack web development services using React, Spring Boot, and modern technologies."
    }
  },
  {
    icon: <Palette className="w-7 h-7 text-[#66FCF1]" aria-hidden="true" />,
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    desc: "Wireframing, prototyping & design system creation. We create accessible, WCAG 2.1-compliant interfaces that engage and convert users.",
    longDesc: "User-centered design that combines aesthetics with functionality. We create intuitive interfaces that are both beautiful and accessible to all users.",
    stack: ["Figma", "TailwindCSS", "Framer", "Adobe XD", "Sketch"],
    price: "₹15,000+",
    priceRange: "₹15,000 - ₹80,000",
    timeline: "2-4 weeks",
    features: [
      "User research & journey mapping",
      "Wireframes & interactive prototypes",
      "Design system creation & documentation",
      "WCAG 2.1 AA accessibility compliance",
      "Mobile-first responsive design",
      "Developer handoff with specs"
    ],
    seo: {
      keywords: ["UI UX design services", "accessible design", "WCAG compliance", "Figma design", "prototyping"],
      description: "Professional UI/UX design services with WCAG 2.1 compliance. Create beautiful, accessible interfaces that convert."
    }
  },
  {
    icon: <Server className="w-7 h-7 text-[#66FCF1]" aria-hidden="true" />,
    title: "Backend API Development",
    shortTitle: "API Development",
    desc: "Secure, scalable RESTful services built with best practices. From authentication to data management, we deliver robust server-side solutions.",
    longDesc: "Build powerful, scalable backend systems that can handle millions of requests. We focus on security, performance, and clean architecture.",
    stack: ["Spring Boot", "Node.js", "MongoDB", "PostgreSQL", "Redis", "GraphQL"],
    price: "₹18,000+",
    priceRange: "₹18,000 - ₹1,20,000",
    timeline: "3-6 weeks",
    features: [
      "JWT authentication & OAuth2 integration",
      "RESTful & GraphQL API design",
      "Database schema design & migrations",
      "API documentation (Swagger/Postman)",
      "Performance optimization & caching",
      "Security best practices & rate limiting"
    ],
    seo: {
      keywords: ["API development", "REST API", "GraphQL", "backend development", "Spring Boot", "Node.js"],
      description: "Professional backend API development services. Build scalable, secure RESTful APIs with Spring Boot or Node.js."
    }
  },
  {
    icon: <Bot className="w-7 h-7 text-[#66FCF1]" aria-hidden="true" />,
    title: "AI Integration",
    shortTitle: "AI Integration",
    desc: "Chatbot, text generation, and smart recommendations. Bring the power of GenAI into your product with seamless integrations.",
    longDesc: "Integrate cutting-edge AI capabilities into your applications. From chatbots to content generation, we make AI work for your business.",
    stack: ["OpenAI API", "LangChain", "Python", "React", "TensorFlow.js", "Hugging Face"],
    price: "₹20,000+",
    priceRange: "₹20,000 - ₹2,00,000",
    timeline: "4-8 weeks",
    features: [
      "Custom AI chatbot development",
      "Text generation & content creation",
      "AI-based recommendations & personalization",
      "Context-aware responses with LangChain",
      "Usage analytics & monitoring dashboard",
      "Fine-tuning for domain-specific needs"
    ],
    seo: {
      keywords: ["AI integration services", "ChatGPT integration", "LangChain development", "OpenAI API", "AI chatbot"],
      description: "Professional AI integration services. Add ChatGPT, recommendations, and smart automation to your applications."
    }
  },
  {
    icon: <Cloud className="w-7 h-7 text-[#66FCF1]" aria-hidden="true" />,
    title: "DevOps & Hosting",
    shortTitle: "DevOps Services",
    desc: "CI/CD, Docker, deployment on cloud. We automate your deployment pipeline and ensure your product stays live, fast, and secure.",
    longDesc: "Streamline your development and deployment process with modern DevOps practices. We set up infrastructure that scales with your needs.",
    stack: ["AWS", "Docker", "GitHub Actions", "Nginx", "Kubernetes", "Terraform"],
    price: "₹10,000+",
    priceRange: "₹10,000 - ₹80,000",
    timeline: "2-4 weeks",
    features: [
      "Docker containerization & orchestration",
      "CI/CD pipeline setup (GitHub Actions/GitLab)",
      "AWS/Azure/GCP cloud deployment",
      "SSL/TLS configuration & security",
      "24/7 monitoring & automated alerts",
      "Backup strategies & disaster recovery"
    ],
    seo: {
      keywords: ["DevOps services", "cloud hosting", "CI/CD pipeline", "Docker deployment", "AWS consulting"],
      description: "Professional DevOps and cloud hosting services. Automated deployments, scaling, and 24/7 monitoring."
    }
  },
];

// Process steps
const steps = [
  { 
    num: "01", 
    title: "Discovery", 
    desc: "We learn about your goals, users, and constraints through a focused kickoff call.",
    icon: <Users className="w-5 h-5" />
  },
  { 
    num: "02", 
    title: "Design", 
    desc: "Wireframes and prototypes are shared for feedback before a single line of code is written.",
    icon: <Palette className="w-5 h-5" />
  },
  { 
    num: "03", 
    title: "Build", 
    desc: "Iterative development with weekly updates and a staging environment for your review.",
    icon: <Code2 className="w-5 h-5" />
  },
  { 
    num: "04", 
    title: "Launch", 
    desc: "Deployment, testing, and 2-week post-launch support to ensure everything runs smoothly.",
    icon: <Rocket className="w-5 h-5" />
  },
];

// Why choose us stats
const stats = [
  { icon: <Clock className="w-4 h-4" />, value: "4-8 weeks", label: "Average delivery time" },
  { icon: <Shield className="w-4 h-4" />, value: "2 weeks", label: "Free post-launch support" },
  { icon: <Gauge className="w-4 h-4" />, value: "99.9%", label: "Uptime guarantee" },
  { icon: <Users className="w-4 h-4" />, value: "24/7", label: "Client support" },
];

// Structured data for services
const servicesStructuredData = services.map(service => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.title,
  "description": service.longDesc,
  "provider": {
    "@type": "Organization",
    "name": "Zelquent Tech"
  },
  "offers": {
    "@type": "Offer",
    "price": service.price.replace('+', ''),
    "priceCurrency": "INR",
    "description": `Starting from ${service.price}`
  }
}));

export default function Services() {
  const navigate = useNavigate();
  return (
    <>
      {/* Enhanced Page-specific SEO */}
      <Helmet>
        <title>Professional Web Development & AI Integration Services | Zelquent Tech</title>
        <meta
          name="description"
          content="Explore Zelquent Tech's comprehensive services: Full Stack Web Development, UI/UX Design, Backend API Development, AI Integration, and DevOps. Custom solutions with React, Spring Boot, and OpenAI integration."
        />
        <meta
          name="keywords"
          content="web development services India, UI UX design agency, backend API development, AI integration company, DevOps consulting, React development services, Spring Boot development, OpenAI integration, full stack development company, custom web applications, cloud hosting services, WCAG compliance services"
        />
        <meta name="author" content="Zelquent Tech" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Professional Web Development & AI Integration Services | Zelquent Tech" />
        <meta property="og:description" content="Full-stack development, UI/UX design, AI integration, and DevOps services. Custom solutions with modern technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zelquent.com/services" />
        <meta property="og:image" content="https://zelquent.com/services-og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Web Development & AI Integration Services" />
        <meta name="twitter:description" content="Full-stack development, UI/UX design, AI integration, and DevOps services." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://zelquent.com/services" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(servicesStructuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0B0C10] ">
        {/* Hero Section */}
        <section 
          className="grid-bg relative py-16 border-b border-[#1F2833] overflow-hidden"
          aria-labelledby="services-hero-heading"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#66FCF1]/5 via-transparent to-transparent" aria-hidden="true" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <span className="text-[#66FCF1] text-xs font-semibold uppercase tracking-widest">
              What We Offer
            </span>
            <h1 
              id="services-hero-heading" 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4 cyan-glow"
            >
              Services Built to <span className="text-[#66FCF1]">Scale</span>
            </h1>
            <p className="text-[#C5C6C7] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
              Custom packages available on request. Starting prices are guidelines — we tailor every project 
              to your exact needs with transparent pricing and no hidden costs.
            </p>
            
            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {stats.map(stat => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="text-[#66FCF1]">{stat.icon}</span>
                  <span className="text-white text-sm font-medium">{stat.value}</span>
                  <span className="text-[#C5C6C7] text-xs">{stat.label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#66FCF1] text-[#0B0C10] font-bold text-base hover:bg-[#45A29E] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#0B0C10]"
              aria-label="Request a custom quote for your project"
            >
              <Zap className="w-5 h-5" aria-hidden="true" />
              Request a Custom Quote
            </button>
          </div>
        </section>

        {/* Services Grid */}
        <section 
          className="py-20"
          aria-labelledby="services-grid-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="services-grid-heading" className="sr-only">Our Services</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" role="list">
              {services.map((service) => (
                <article 
                  key={service.title} 
                  className="card-hover bg-[#1F2833] border border-[#45A29E]/20 rounded-2xl p-8 flex flex-col gap-4 hover:border-[#66FCF1]/40 transition-all"
                  role="listitem"
                  aria-label={`${service.title} service`}
                >
                  {/* Header with icon and price */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-16 h-16 rounded-xl bg-[#66FCF1]/10 border border-[#66FCF1]/20 flex items-center justify-center flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-[#66FCF1] font-bold text-2xl" aria-label={`Starting price ${service.price}`}>
                        {service.price}
                      </span>
                      <div className="text-[#C5C6C7] text-xs">starting from</div>
                      <div className="text-[#C5C6C7] text-xs mt-1">{service.timeline}</div>
                    </div>
                  </div>

                  {/* Title and description */}
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-3">{service.title}</h3>
                    <p className="text-[#C5C6C7] text-sm leading-relaxed">{service.longDesc}</p>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-2.5 mt-2" aria-label={`${service.title} features`}>
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#66FCF1] flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-[#C5C6C7] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology stack */}
                  <div 
                    className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#45A29E]/20" 
                    aria-label={`Technologies used for ${service.title}`}
                  >
                    {service.stack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs bg-[#0B0C10] border border-[#45A29E]/40 text-[#45A29E] px-3 py-1.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action button */}
                  <button
                    onClick={() => navigate('/contact')}
                    className="flex items-center gap-2 text-[#66FCF1] text-sm font-medium hover:gap-3 transition-all focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833] rounded-md px-2 py-1.5 w-fit mt-2"
                    aria-label={`Request ${service.title} service`}
                  >
                    Request this service <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section 
          className="py-20 bg-[#1F2833]/30"
          aria-labelledby="process-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-12">
              <span className="text-[#66FCF1] text-xs font-semibold uppercase tracking-widest">
                How We Work
              </span>
              <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
                Our Development Process
              </h2>
              <p className="text-[#C5C6C7] max-w-2xl mx-auto">
                A transparent, collaborative approach that ensures your project stays on track and meets your goals.
              </p>
            </div>

            {/* Process steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
              {steps.map((step, index) => (
                <div 
                  key={step.num} 
                  className="relative group"
                  role="listitem"
                >
                  <div className="bg-[#1F2833] border border-[#45A29E]/20 rounded-2xl p-8 h-full hover:border-[#66FCF1]/40 transition-all">
                    {/* Step number with icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#66FCF1]/10 border border-[#66FCF1]/20 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <span className="text-[#66FCF1] font-bold text-3xl opacity-40 group-hover:opacity-60 transition-opacity">
                        {step.num}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-white font-semibold text-xl mb-2">{step.title}</h3>
                    <p className="text-[#C5C6C7] text-sm leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Connector arrow (desktop only) */}
                  {index < steps.length - 1 && (
                    <div 
                      className="hidden lg:flex absolute top-1/2 -right-4 z-10 w-8 h-8 items-center justify-center bg-[#1F2833] border border-[#45A29E]/30 rounded-full group-hover:border-[#66FCF1]/50 transition-all"
                      aria-hidden="true"
                    >
                      <ArrowRight className="w-4 h-4 text-[#45A29E] group-hover:text-[#66FCF1]" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Timeline indicator */}
            <div className="flex justify-center mt-8">
              <div className="bg-[#1F2833] border border-[#45A29E]/20 rounded-full px-6 py-3 inline-flex items-center gap-4">
                <span className="text-[#C5C6C7] text-sm">Average project timeline:</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#66FCF1]" />
                  <span className="text-white font-medium">4-8 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#66FCF1]" />
                  <span className="text-white font-medium">Weekly updates</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div>
                <span className="text-[#66FCF1] text-xs font-semibold uppercase tracking-widest">
                  Why Choose Us
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-6">
                  More Than Just <span className="text-[#66FCF1]">Code</span>
                </h2>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Transparent Pricing",
                      desc: "No hidden costs. We provide detailed quotes and stick to them."
                    },
                    {
                      title: "Quality Guarantee",
                      desc: "2 weeks free post-launch support and 30-day bug fix guarantee."
                    },
                    {
                      title: "Modern Tech Stack",
                      desc: "We use the latest technologies to ensure your product is future-proof."
                    },
                    {
                      title: "Accessibility First",
                      desc: "All our products meet WCAG 2.1 standards for inclusive design."
                    }
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#66FCF1] flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-white font-medium">{item.title}</h3>
                        <p className="text-[#C5C6C7] text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right content - Stats cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { number: "10+", label: "Projects Delivered", icon: <Rocket className="w-5 h-5" /> },
                  { number: "5+", label: "Technologies Mastered", icon: <Code2 className="w-5 h-5" /> },
                  { number: "100%", label: "Client Satisfaction", icon: <Users className="w-5 h-5" /> },
                  { number: "24/7", label: "Support Available", icon: <Clock className="w-5 h-5" /> },
                ].map((stat) => (
                  <div 
                    key={stat.label}
                    className="bg-[#1F2833] border border-[#45A29E]/20 rounded-2xl p-6 text-center hover:border-[#66FCF1]/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#66FCF1]/10 border border-[#66FCF1]/20 flex items-center justify-center mx-auto mb-3 text-[#66FCF1]">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-[#C5C6C7] text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Teaser / CTA */}
        <section className="py-20" aria-label="Call to action">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-[#1F2833] border border-[#45A29E]/30 p-12 text-center overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#66FCF1]/5 rounded-full blur-3xl" aria-hidden="true" />
              
              {/* Content */}
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Not Sure Which Service You Need?
                </h2>
                <p className="text-[#C5C6C7] text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss your project requirements and find the perfect solution together. 
                  We offer free 30-minute consultation calls.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#66FCF1] text-[#0B0C10] font-bold text-base hover:bg-[#45A29E] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833]"
                    aria-label="Contact us for a free consultation"
                  >
                    <Zap className="w-5 h-5" aria-hidden="true" />
                    Get Free Consultation
                  </button>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#45A29E] text-[#C5C6C7] hover:border-[#66FCF1] hover:text-[#66FCF1] transition-all focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833]"
                    aria-label="Browse all services"
                  >
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    Browse All Services
                  </button>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-[#C5C6C7]">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-[#66FCF1]" /> No-obligation quote
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-[#66FCF1]" /> Transparent pricing
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-[#66FCF1]" /> Post-launch support
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

