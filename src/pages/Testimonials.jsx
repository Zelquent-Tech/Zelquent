import { useNavigate } from "react-router-dom";
import { 
  Star, 
  Quote,
  Users,
  Award,
  Clock,
  Shield,
  MessageCircle,
  ThumbsUp,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Zap
} from 'lucide-react';
import { Helmet } from "react-helmet-async";


// Enhanced testimonials with more details and structured data
const testimonials = [
  {
    quote: "Honestly, working with the Zelquent team was a breath of fresh air. They just got it. Communication was super fast, the code was solid, and we actually launched our platform early. That never happens!",
    name: "Arjun Mehta",
    role: "Founder",
    company: "WebFlowX",
    industry: "SaaS Platform",
    projectType: "Full Stack Development",
    stars: 5,
    date: "January 2025",
    keyPoints: ["Early delivery", "Fast communication", "Clean code"],
    avatar: "AM"
  },
  {
    quote: "I was a bit nervous about messing up our customer system with AI, but they handled the whole integration seamlessly. It was totally stress-free. Now our chatbot handles the bulk of the support questions without us lifting a finger.",
    name: "Priya Singh",
    role: "CEO",
    company: "DataDrive Labs",
    industry: "AI Analytics",
    projectType: "AI Integration",
    stars: 5,
    date: "March 2025",
    keyPoints: ["Stress-free integration", "Automated support", "Seamless deployment"],
    avatar: "PS"
  },
  {
    quote: "These guys are pros. No drama, no delays—just really great work. They delivered everything we asked for, and the UI they built is so clean. Our users keep complimenting it.",
    name: "Rahul Sharma",
    role: "CTO",
    company: "PixelFrame Studio",
    industry: "Creative Agency",
    projectType: "UI/UX Design & Development",
    stars: 5,
    date: "February 2025",
    keyPoints: ["No delays", "Clean UI", "User-friendly"],
    avatar: "RS"
  },
  {
    quote: "We needed our entire e-commerce site built from the ground up, and fast. Zelquent Tech pulled it off in just six weeks. You can tell they really know their way around backend development.",
    name: "Sneha Patel",
    role: "Product Manager",
    company: "BazaarNow",
    industry: "E-commerce",
    projectType: "Full Stack E-commerce",
    stars: 5,
    date: "December 2024",
    keyPoints: ["6-week delivery", "Scalable backend", "Fast turnaround"],
    avatar: "SP"
  },
  {
    quote: "We brought them in for a tricky React and AI project. The code they wrote was not just clean, but actually easy for our team to work with later. Plus, they were great about keeping us in the loop the whole time.",
    name: "Vikram Nair",
    role: "Technical Lead",
    company: "AiDeskPro",
    industry: "AI Software",
    projectType: "React + AI Integration",
    stars: 5,
    date: "April 2025",
    keyPoints: ["Clean code", "Knowledge transfer", "Transparent communication"],
    avatar: "VN"
  },
  {
    quote: "What really stood out was how detail-oriented they were. They pointed out a few things we hadn't even thought of. It's rare to find a team that cares about your project like it's its own.",
    name: "Anjali Iyer",
    role: "Operations Director",
    company: "NestHive Realty",
    industry: "Real Estate",
    projectType: "Web Application",
    stars: 5,
    date: "January 2025",
    keyPoints: ["Detail-oriented", "Proactive suggestions", "Dedicated team"],
    avatar: "AI"
  },
];

// Enhanced statistics
const stats = [
  { 
    icon: <Star className="w-5 h-5 fill-current" />, 
    value: "5.0", 
    label: "Average Rating",
    description: "Perfect 5-star rating from all clients"
  },
  { 
    icon: <Users className="w-5 h-5" />, 
    value: "5+", 
    label: "Happy Clients",
    description: "Trusted by startups and established businesses"
  },
  { 
    icon: <Clock className="w-5 h-5" />, 
    value: "100%", 
    label: "On-Time Delivery",
    description: "Every project delivered on schedule"
  },
  { 
    icon: <MessageCircle className="w-5 h-5" />, 
    value: "50+", 
    label: "Success Stories",
    description: "Real impact across various industries"
  },
];

// Industry categories represented
const industries = [
  "SaaS", "AI/ML", "E-commerce", "Real Estate", "Creative", "Enterprise"
];

// Structured data for aggregate rating
const aggregateRatingStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Zelquent Tech Services",
  "description": "Professional web development, AI integration, and UI/UX design services",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": testimonials.length.toString(),
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": testimonials.map(t => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": t.stars.toString(),
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": t.name
    },
    "reviewBody": t.quote,
    "datePublished": t.date
  }))
};

export default function Testimonials() {
  const navigate = useNavigate();
  return (
    <>
      {/* Enhanced Page-specific SEO */}
      <Helmet>
        <title>Client Testimonials & Success Stories | Zelquent Tech Reviews</title>
        <meta
          name="description"
          content="Read authentic client testimonials for Zelquent Tech. See how we've helped startups and businesses with web development, AI integration, and UI/UX design. 5-star rated with 100% on-time delivery."
        />
        <meta
          name="keywords"
          content="Zelquent Tech reviews, client testimonials, web development reviews, AI integration feedback, UI/UX design reviews, client success stories, software development testimonials, React developers reviews, startup tech partner, client satisfaction"
        />
        <meta name="author" content="Zelquent Tech" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Client Testimonials & Success Stories | Zelquent Tech" />
        <meta property="og:description" content="See why clients rate us 5-stars for web development, AI integration, and design services. 100% on-time delivery guarantee." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zelquent.com/testimonials" />
        <meta property="og:image" content="https://zelquent.com/testimonials-og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Client Testimonials & Success Stories | Zelquent Tech" />
        <meta name="twitter:description" content="See why clients rate us 5-stars for web development and AI integration." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://zelquent.com/testimonials" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(aggregateRatingStructuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0B0C10]">
        {/* Hero Section */}
        <section 
          className="grid-bg relative py-16 border-b border-[#1F2833] overflow-hidden"
          aria-labelledby="testimonials-hero-heading"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#66FCF1]/5 via-transparent to-transparent" aria-hidden="true" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <span className="text-[#66FCF1] text-xs font-semibold uppercase tracking-widest">
              Client Love
            </span>
            <h1 
              id="testimonials-hero-heading" 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4 cyan-glow"
            >
              What Our <span className="text-[#66FCF1]">Clients Say</span>
            </h1>
            <p className="text-[#C5C6C7] text-lg sm:text-xl max-w-2xl mx-auto">
              Real words from real clients who trusted Zelquent Tech to bring their vision to life. 
              We're proud to have earned their trust and 5-star ratings.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="flex items-center gap-1 text-xs bg-[#1F2833] px-3 py-1.5 rounded-full border border-[#45A29E]/20">
                <Award className="w-3 h-3 text-[#66FCF1]" /> 5-Star Rated
              </span>
              <span className="flex items-center gap-1 text-xs bg-[#1F2833] px-3 py-1.5 rounded-full border border-[#45A29E]/20">
                <Shield className="w-3 h-3 text-[#66FCF1]" /> Verified Reviews
              </span>
              <span className="flex items-center gap-1 text-xs bg-[#1F2833] px-3 py-1.5 rounded-full border border-[#45A29E]/20">
                <ThumbsUp className="w-3 h-3 text-[#66FCF1]" /> 100% Satisfaction
              </span>
            </div>
          </div>
        </section>

        {/* Stats Grid - Enhanced */}
        <section 
          className="py-12 bg-[#1F2833]/30 border-b border-[#45A29E]/10"
          aria-label="Company statistics"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6" role="list">
              {stats.map((stat) => (
                <div 
                  key={stat.label} 
                  className="text-center p-4 bg-[#1F2833] border border-[#45A29E]/20 rounded-xl hover:border-[#66FCF1]/40 transition-all"
                  role="listitem"
                >
                  <div className="text-[#66FCF1] mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white" aria-label={`${stat.value} ${stat.label}`}>
                    {stat.value}
                  </div>
                  <div className="text-[#C5C6C7] text-xs mt-1">{stat.label}</div>
                  <span className="sr-only">{stat.description}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Tags */}
        <section className="py-8" aria-label="Industries we serve">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-[#C5C6C7] text-sm mb-3">Trusted by companies in:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {industries.map((industry) => (
                <span 
                  key={industry}
                  className="px-3 py-1.5 rounded-full bg-[#1F2833] border border-[#45A29E]/20 text-[#C5C6C7] text-xs"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section 
          className="py-12"
          aria-labelledby="testimonials-grid-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="testimonials-grid-heading" className="sr-only">Client Testimonials</h2>
            
            {/* Featured Testimonial (first one highlighted) */}
            <div className="mb-8">
              <article 
                className="relative bg-gradient-to-br from-[#1F2833] to-[#1A222A] border-2 border-[#66FCF1]/30 rounded-2xl p-8 overflow-hidden"
                itemScope
                itemType="https://schema.org/Review"
              >
                <Quote className="absolute top-6 right-6 w-16 h-16 text-[#66FCF1]/10" aria-hidden="true" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#66FCF1]/20 border-2 border-[#66FCF1] flex items-center justify-center text-[#66FCF1] font-bold">
                    {testimonials[0].avatar}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg" itemProp="author">{testimonials[0].name}</div>
                    <div className="text-[#66FCF1] text-sm">{testimonials[0].role} at {testimonials[0].company}</div>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {Array.from({ length: testimonials[0].stars }).map((_, si) => (
                      <Star key={si} className="w-5 h-5 text-[#66FCF1] fill-[#66FCF1]" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <p className="text-[#C5C6C7] text-lg leading-relaxed" itemProp="reviewBody">
                  "{testimonials[0].quote}"
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {testimonials[0].keyPoints.map((point) => (
                    <span key={point} className="text-xs bg-[#0B0C10] border border-[#66FCF1]/30 text-[#66FCF1] px-2 py-1 rounded-md">
                      {point}
                    </span>
                  ))}
                </div>
                <meta itemProp="reviewRating" content="5" />
              </article>
            </div>

            {/* Rest of testimonials grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {testimonials.slice(1).map((testimonial, index) => (
                <article 
                  key={index} 
                  className="card-hover bg-[#1F2833] border border-[#45A29E]/20 rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden hover:border-[#66FCF1]/40 transition-all"
                  role="listitem"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-[#66FCF1]/10" aria-hidden="true" />
                  
                  {/* Client info and rating */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#66FCF1]/10 border border-[#66FCF1]/30 flex items-center justify-center text-[#66FCF1] font-bold text-sm flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm" itemProp="author">{testimonial.name}</div>
                      <div className="text-[#66FCF1] text-xs">{testimonial.role}</div>
                      <div className="text-[#C5C6C7] text-xs">{testimonial.company}</div>
                    </div>
                    <div className="flex gap-0.5" aria-label={`Rating: ${testimonial.stars} out of 5 stars`}>
                      {Array.from({ length: testimonial.stars }).map((_, si) => (
                        <Star 
                          key={si} 
                          className="w-3 h-3 text-[#66FCF1] fill-[#66FCF1]" 
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-[#C5C6C7] text-sm leading-relaxed flex-1" itemProp="reviewBody">
                    "{testimonial.quote}"
                  </p>

                  {/* Project type and key points */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#66FCF1]" aria-hidden="true" />
                      <span className="text-[#66FCF1] text-xs">{testimonial.projectType}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {testimonial.keyPoints.map((point) => (
                        <span key={point} className="text-xs bg-[#0B0C10] border border-[#45A29E]/40 text-[#45A29E] px-2 py-0.5 rounded-md">
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Date */}
                  <div className="text-[#C5C6C7] text-xs mt-2">
                    {testimonial.date}
                  </div>

                  <meta itemProp="reviewRating" content="5" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Clients Love Us */}
        <section className="py-16 bg-[#1F2833]/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Why Clients <span className="text-[#66FCF1]">Love Working</span> With Us
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "On-Time Delivery",
                  desc: "Every project delivered on schedule, no exceptions",
                  icon: <Clock className="w-5 h-5 text-[#66FCF1]" />
                },
                {
                  title: "Clean Code",
                  desc: "Maintainable, well-documented code that's easy to work with",
                  icon: <CheckCircle2 className="w-5 h-5 text-[#66FCF1]" />
                },
                {
                  title: "Transparent Communication",
                  desc: "Regular updates and clear communication throughout",
                  icon: <MessageCircle className="w-5 h-5 text-[#66FCF1]" />
                },
                {
                  title: "Proactive Suggestions",
                  desc: "We bring ideas to improve your project",
                  icon: <Sparkles className="w-5 h-5 text-[#66FCF1]" />
                },
                {
                  title: "Post-Launch Support",
                  desc: "We don't disappear after launch",
                  icon: <Shield className="w-5 h-5 text-[#66FCF1]" />
                },
                {
                  title: "Stress-Free Process",
                  desc: "We handle the complexity so you don't have to",
                  icon: <ThumbsUp className="w-5 h-5 text-[#66FCF1]" />
                }
              ].map((item) => (
                <div 
                  key={item.title}
                  className="bg-[#1F2833] border border-[#45A29E]/20 rounded-xl p-4 hover:border-[#66FCF1]/40 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#66FCF1]/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white text-sm font-medium">{item.title}</h3>
                      <p className="text-[#C5C6C7] text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20" aria-label="Call to action">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-[#1F2833] border border-[#45A29E]/30 p-12 text-center overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#66FCF1]/5 rounded-full blur-3xl" aria-hidden="true" />
              
              {/* Content */}
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to Join Our Happy Clients?
                </h2>
                <p className="text-[#C5C6C7] text-lg mb-8 max-w-2xl mx-auto">
                  Let's build something remarkable together and add your success story to our collection.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#66FCF1] text-[#0B0C10] font-bold text-base hover:bg-[#45A29E] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833]"
                    aria-label="Start a project with Zelquent Tech"
                  >
                    <Zap className="w-5 h-5" aria-hidden="true" />
                    Let's Build Together
                  </button>
                  <button
                    onClick={() => navigate('/portfolio')}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#45A29E] text-[#C5C6C7] hover:border-[#66FCF1] hover:text-[#66FCF1] transition-all focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833]"
                    aria-label="View our portfolio"
                  >
                    View Our Work <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>

                {/* Social proof badges */}
                <div className="flex flex-wrap justify-center gap-6 mt-8">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {testimonials.slice(0, 3).map((t, i) => (
                        <div 
                          key={i}
                          className="w-6 h-6 rounded-full bg-[#66FCF1]/20 border border-[#66FCF1] flex items-center justify-center text-[#66FCF1] text-xs font-bold"
                        >
                          {t.avatar}
                        </div>
                      ))}
                    </div>
                    <span className="text-[#C5C6C7] text-xs">Join 5+ happy clients</span>
                  </div>
                  <span className="text-[#C5C6C7] text-xs flex items-center gap-1">
                    <Shield className="w-3 h-3 text-[#66FCF1]" /> Satisfaction guaranteed
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

