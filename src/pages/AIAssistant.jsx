import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Bot, 
  User, 
  Zap, 
  DollarSign, 
  Code2, 
  RefreshCw, 
  Clock, 
  Shield,
  Sparkles,
  MessageCircle,
  ThumbsUp,
  Copy,
  Check,
  Mail,
  MapPin
} from 'lucide-react';
import { Helmet } from "react-helmet-async";


// Enhanced suggestions with categories
const SUGGESTIONS = [
  {
    category: "Services",
    questions: [
      "Can you build an e-commerce website?",
      "Do you offer AI integration services?",
      "Can you redesign my existing website?",
      "Do you build mobile apps?"
    ]
  },
  {
    category: "Pricing",
    questions: [
      "What is your pricing for AI integration?",
      "How much does a full-stack project cost?",
      "What is your payment structure?",
      "Do you offer maintenance packages?"
    ]
  },
  {
    category: "Process",
    questions: [
      "How long does a full-stack project take?",
      "How do we start a project?",
      "What is your development process?",
      "Do you work with startups?"
    ]
  },
  {
    category: "Technology",
    questions: [
      "What tech stack do you use?",
      "Can you integrate payment gateways?",
      "Do you offer post-launch support?",
      "Can you help with SEO?"
    ]
  }
];

// Enhanced FAQ responses with more detailed information
const faqResponses = {
  ecommerce: {
    match: ["e-commerce", "ecommerce", "shop", "shopping", "store", "product", "cart", "checkout", "payment gateway", "razorpay", "stripe"],
    reply: (input) => `**E-Commerce Development** 🛍️

Yes! We specialize in building modern e-commerce platforms with:

**Tech Stack:**
• React frontend with TailwindCSS for fast, responsive UI
• Spring Boot backend for robust API handling
• MySQL/PostgreSQL for product and order management
• Redis for session and cart caching

**Features Included:**
✅ Product catalog with categories & filters
✅ Shopping cart with real-time updates
✅ Secure checkout with payment gateway integration
✅ User accounts & order history
✅ Admin dashboard for inventory management
✅ Wishlists and product reviews

**Timeline & Pricing:**
• Standard e-commerce site: 4-6 weeks
• Starting at ₹40,000 (basic store)
• Custom features and marketplace functionality available

Want a detailed quote? Share your requirements and we'll provide a precise estimate!`
  },
  
  pricing: {
    match: ["price", "cost", "pricing", "how much", "budget", "rupee", "₹", "expensive", "affordable", "estimate", "quote"],
    reply: (input) => `**Project Pricing Guide** 💰

Our starting prices (subject to project complexity):

🚀 **Full Stack Web App** — ₹25,000+
• Complete frontend + backend development
• Database design and API integration
• Deployment and basic SEO

🎨 **UI/UX Design** — ₹15,000+
• User research & wireframing
• High-fidelity prototypes
• Design system creation

⚙️ **Backend API** — ₹18,000+
• RESTful/GraphQL API development
• Database architecture
• Authentication & authorization

🤖 **AI Integration** — ₹20,000+
• ChatGPT/OpenAI integration
• Custom chatbot development
• LangChain implementations

☁️ **DevOps & Hosting** — ₹10,000+
• Cloud deployment (AWS/Azure)
• CI/CD pipeline setup
• 24/7 monitoring

🔄 **Website Redesign** — ₹15,000+
• Modern UI refresh
• Mobile responsiveness
• Performance optimization

🔧 **Maintenance Retainer** — ₹5,000/month
• Security updates & backups
• Bug fixes & monitoring
• Priority support

All packages are custom-tailored. Tell us about your project for an accurate quote!`
  },
  
  timeline: {
    match: ["time", "long", "week", "month", "timeline", "delivery", "deadline", "duration", "how soon", "when"],
    reply: (input) => `**Project Timelines** ⏱️

Typical delivery timelines by project type:

📄 **Landing Page / Brochure Site**
• Timeline: 1-2 weeks
• Includes: Design, development, deployment

🛍️ **E-commerce Platform**
• Timeline: 6-10 weeks
• Includes: Product catalog, cart, payments, admin panel

📚 **LMS or SaaS Product**
• Timeline: 8-16 weeks
• Includes: User roles, subscriptions, analytics

🤖 **AI Integration (add-on)**
• Timeline: 2-4 weeks
• Includes: Model integration, testing, optimization

🔄 **Complete Redesign**
• Timeline: 4-6 weeks
• Includes: Audit, design, development, migration

**MVP Development** (4-8 weeks) - Perfect for startups testing ideas

**Factors affecting timeline:**
• Complexity of features
• Third-party integrations
• Content availability
• Feedback turnaround

We provide a detailed timeline estimate after our discovery call. Want to schedule one?`
  },
  
  techstack: {
    match: ["tech", "stack", "react", "spring", "node", "tailwind", "mongodb", "openai", "tools", "framework", "language", "backend", "frontend", "database"],
    reply: (input) => `**Our Technology Stack** 💻

🎨 **Frontend**
• React 18 with Hooks and Context API
• Next.js for SSR and static sites
• TypeScript for type safety
• TailwindCSS for styling
• Redux Toolkit & Zustand for state management
• Vite for lightning-fast builds
• Framer Motion for animations

⚙️ **Backend**
• Spring Boot (Java) - Enterprise-grade
• Node.js with Express - Lightweight & fast
• RESTful & GraphQL APIs
• WebSocket for real-time features
• JWT & OAuth2 authentication

🗄️ **Database**
• PostgreSQL - Advanced relational DB
• MongoDB - Flexible NoSQL
• MySQL - Reliable and proven
• Redis - High-performance caching
• Prisma & Mongoose ORMs

🤖 **AI & Machine Learning**
• OpenAI API (GPT-4, GPT-3.5)
• LangChain for LLM applications
• Hugging Face Transformers
• Python for data processing
• TensorFlow.js for browser ML

☁️ **DevOps & Cloud**
• Docker containerization
• AWS (EC2, S3, Lambda, RDS)
• GitHub Actions CI/CD
• Nginx & Apache
• Vercel & Netlify hosting

🎯 **Design**
• Figma for collaborative design
• Framer for interactive prototypes
• Adobe XD for UI/UX
• Design system development

We choose the perfect stack for your specific needs. Need something special? Just ask!`
  },
  
  support: {
    match: ["support", "maintenance", "after", "launch", "post", "update", "fix", "bug", "maintain"],
    reply: (input) => `**Post-Launch Support & Maintenance** 🔧

Every project includes **2 weeks free support** after launch!

**Maintenance Retainer Packages:**

🟢 **Basic — ₹5,000/month**
• Security patches & updates
• 24/7 uptime monitoring
• Weekly automated backups
• Critical bug fixes (24h response)
• Monthly performance report

🔵 **Standard — ₹12,000/month**
• Everything in Basic
• Content updates (up to 5 hours)
• Monthly backups with 30-day retention
• Performance optimization
• Quarterly security audit

🟣 **Premium — ₹20,000/month**
• Everything in Standard
• Priority 4-hour response
• 10 hours development time/month
• Monthly strategy call
• Dedicated support channel

**Additional Services:**
• Feature enhancements (hourly rate)
• Third-party integrations
• Migration and scaling
• SEO monitoring

All plans include email support and regular status updates. Need custom terms? Let's talk!`
  },
  
  ai: {
    match: ["ai", "chatbot", "openai", "gpt", "langchain", "automation", "smartdesk", "assistant", "intelligence", "machine learning", "llm", "chatgpt"],
    reply: (input) => `**AI Integration Services** 🤖

We're AI specialists! Here's what we can build:

🗣️ **Custom Chatbots**
• Customer support automation
• Lead qualification bots
• FAQ assistants (like this one!)
• Multi-language support

📄 **Document Intelligence**
• PDF/Word document Q&A
• Contract analysis
• Content summarization
• Data extraction

🎯 **Recommendation Engines**
• Personalized product suggestions
• Content recommendations
• User behavior analysis
• "You might also like" features

⚡ **Workflow Automation**
• Email auto-responses
• Data processing pipelines
• Report generation
• Social media automation

📊 **Analytics & Insights**
• Sentiment analysis
• Trend prediction
• User feedback analysis
• Performance dashboards

**Sample AI Projects:**
• AI Website Builder (coming soon)
• AI Content Creation Platform
• AI Shopping Assistant
• Smart Customer Support Bot

**Pricing:**
• Basic chatbot integration: ₹20,000+
• Advanced AI features: Custom quote
• LLM fine-tuning: By project

Check out our portfolio for live AI examples!`
  },
  
  redesign: {
    match: ["redesign", "existing", "old", "update", "modernize", "refresh", "revamp", "makeover"],
    reply: (input) => `**Website Redesign Service** 🔄

Breathe new life into your existing website!

**Our Redesign Process:**

🔍 **Phase 1: Audit & Analysis**
• Performance evaluation
• UX/UI assessment
• Competitor analysis
• SEO audit

📝 **Phase 2: Planning**
• User journey mapping
• Information architecture
• Content strategy
• Feature prioritization

🎨 **Phase 3: Design**
• Modern, fresh UI concepts
• Mobile-first approach
• Accessibility (WCAG 2.1)
• Design system creation

⚙️ **Phase 4: Development**
• Clean code rebuild
• Performance optimization
• SEO implementation
• Content migration

🚀 **Phase 5: Launch**
• Staging deployment
• Testing & QA
• Analytics setup
• 2-week support

**What We Update:**
• Visual design & branding
• User experience & navigation
• Page speed & Core Web Vitals
• Mobile responsiveness
• SEO & meta tags
• Security & updates

**Pricing:** Starting at ₹25,000 (4-6 weeks)

Share your current site for a custom quote!`
  },
  
  startups: {
    match: ["startup", "founder", "mvp", "minimum viable product", "idea", "new business", "launch", "venture", "funding"],
    reply: (input) => `**🚀 Startup-Friendly Development**

We LOVE working with startups! Here's why founders choose us:

**🎯 MVP Focus**
• Launch quickly with core features
• Validate your idea with real users
• Iterate based on feedback
• Scale when you're ready

**💰 Flexible Pricing**
• Custom packages for bootstrapped founders
• Milestone-based payments
• Deferred payment options available
• No long-term contracts

**📈 Scalable Architecture**
• Built to grow with your user base
• Microservices-ready
• Cloud-native design
• Easy to add features

**🤝 Partnership Mindset**
• We're invested in your success
• Strategic technology advice
• Growth-focused recommendations
• Investor-ready presentations

**🔧 Post-MVP Support**
• User feedback implementation
• Performance optimization
• Feature additions
• Scaling guidance

**Startup Success Stories:**
• WebFlowX - Launched in 8 weeks
• DataDrive Labs - AI integration
• AiDeskPro - MVP to funded startup

**Special Offer:** First consultation free for startups!

Tell us about your idea — we'd love to help you build it!`
  },
  
  payment: {
    match: ["payment", "pay", "structure", "deposit", "installment", "milestone", "upfront", "fee", "terms"],
    reply: (input) => `**Payment Structure** 💳

Transparent, startup-friendly payment terms:

**Standard Payment Schedule:**

1️⃣ **50% Upfront**
• Project kickoff
• Resource allocation
• Initial design phase

2️⃣ **25% at Milestone**
• Core features complete
• Design approval
• Mid-project review

3️⃣ **25% on Completion**
• Final delivery
• Code handover
• Deployment

**For Larger Projects (₹1,00,000+):**
• Flexible installment plans available
• Custom milestone mapping
• Monthly payment options
• Revenue-share discussions for promising startups

**Payment Methods:**
• Bank Transfer (NEFT/IMPS)
• UPI (Google Pay, PhonePe, Paytm)
• Razorpay (Credit Card, Debit Card)
• PayPal (International clients)

**What's Included:**
• Detailed invoice with GST
• Project contract & NDA
• IP rights transfer
• Post-launch support

Need custom terms? Let's discuss what works for you!`
  },
  
  mobile: {
    match: ["mobile", "app", "ios", "android", "react native", "flutter", "phone", "tablet", "responsive"],
    reply: (input) => `**Mobile Solutions** 📱

We offer multiple approaches for mobile:

**Option 1: Responsive Web Apps**
• Works on all devices automatically
• Included in all web packages
• Fast, no app store approval
• Progressive Web App (PWA) features
• Offline support & push notifications

**Option 2: Progressive Web App (PWA)**
• App-like experience
• Install on home screen
• Push notifications
• Offline functionality
• Better performance

**Option 3: React Native (Hybrid App)**
• Dedicated mobile apps
• iOS & Android simultaneously
• Near-native performance
• Access to device features
• App store deployment

**When to Choose Each:**

🌐 **Responsive Web** - Best for content sites, dashboards, most business apps
⚡ **PWA** - Great for e-commerce, news apps, tools used frequently
📱 **React Native** - Required for App Store/Play Store presence, complex native features

**Our Mobile Experience:**
• E-commerce mobile UI design (see portfolio)
• Progressive web apps for startups
• Admin dashboards with mobile views
• Cross-platform compatibility

**Pricing:**
• Responsive Web: Included in web packages
• PWA Enhancement: ₹15,000+
• React Native: Custom quote

Need help choosing the right approach? Let's discuss your use case!`
  },
  
  seo: {
    match: ["seo", "search", "google", "rank", "traffic", "visibility", "optimization", "keywords"],
    reply: (input) => `**SEO & Performance Optimization** 🔍

All our websites are built with SEO best practices:

**Technical SEO (Included in all projects):**
✅ Semantic HTML5 structure
✅ Mobile-first responsive design
✅ Fast loading (Core Web Vitals)
✅ Meta tags & schema markup
✅ Clean URL structure
✅ XML sitemap generation
✅ robots.txt configuration
✅ Image optimization (WebP/AVIF)

**On-Page SEO:**
• Keyword-optimized content
• Header hierarchy (H1, H2, H3)
• Internal linking structure
• Alt text for images
• Breadcrumb navigation
• Social media meta tags

**Performance Metrics We Achieve:**
• Lighthouse Score: 90+
• First Contentful Paint: <1s
• Time to Interactive: <2s
• Largest Contentful Paint: <2.5s
• Cumulative Layout Shift: <0.1

**Advanced SEO Services (Additional):**
• Keyword research & strategy
• Content optimization
• Backlink analysis
• Local SEO setup
• Google Analytics & Search Console
• Monthly performance reports

**SEO Packages:**
• Basic Setup: Included
• Growth Package: ₹5,000/month
• Enterprise: Custom quote

Want better Google rankings? We'll help you get there!`
  },
  
  maintenance: {
    match: ["maintenance", "retainer", "monthly", "keep", "update", "security", "backup"],
    reply: (input) => `**Maintenance & Retainer Packages** 🔧

Keep your website secure, fast, and up-to-date:

**Basic Retainer — ₹5,000/month**
✓ Security patches & updates
✓ 24/7 uptime monitoring
✓ Daily automated backups
✓ Critical bug fixes
✓ Monthly performance report
✓ Email support (24h response)

**Standard Retainer — ₹12,000/month**
✓ Everything in Basic
✓ Content updates (up to 5 hours)
✓ Monthly backups with 30-day retention
✓ Performance optimization
✓ Quarterly security audit
✓ Priority email support (12h response)

**Premium Retainer — ₹20,000/month**
✓ Everything in Standard
✓ Priority 4-hour response
✓ 10 hours development time/month
✓ Monthly strategy call
✓ Dedicated support channel
✓ Proactive monitoring & alerts

**Enterprise Retainer — Custom**
✓ 24/7 phone support
✓ Unlimited development time
✓ On-call developer
✓ Weekly strategy meetings
✓ Custom SLA

**Add-on Services:**
• New feature development (hourly)
• Third-party integrations
• Content creation
• SEO monitoring & reporting

All retainers include quarterly performance reviews and scaling recommendations. Need a custom package? Let's talk!`
  },
  
  differentiator: {
    match: ["different", "unique", "why you", "special", "choose", "compared", "versus", "vs", "better"],
    reply: (input) => `**Why Choose Zelquent Tech?** ⭐

Here's what makes us different:

**🎯 Direct Communication**
• No account managers — talk directly to developers
• Weekly video updates
• Same-day responses
• Complete transparency

**🔧 True Full-Stack Expertise**
• Frontend to database — we handle it all
• Modern tech stack (React, Spring Boot, AI)
• Scalable architecture
• Clean, maintainable code

**🤖 AI Specialists**
• Early adopters of GenAI
• LangChain & OpenAI experts
• Custom AI integration
• Future-proof solutions

**♿ Accessibility First**
• WCAG 2.1 AA compliant by default
• Screen reader optimized
• Keyboard navigation
• Inclusive design

**📦 End-to-End Delivery**
• Design, development, deployment
• DevOps & hosting included
• Post-launch support
• Maintenance options

**💬 Transparent Communication**
• Fixed-price quotes
• No hidden costs
• Milestone-based payments
• Regular progress reports

**⏱️ On-Time Delivery**
• Realistic timelines
• Buffer for contingencies
• 100% on-time record
• Respect for your schedule

**🤝 Partnership Mindset**
• We succeed when you succeed
• Long-term relationships
• Strategic advice
• Growth-focused

Not just developers — your technology partners. Ready to build something amazing?`
  },
  
  start: {
    match: ["start", "begin", "process", "how to", "get started", "first step", "next step", "initiate"],
    reply: (input) => `**Getting Started with Zelquent Tech** 🚀

Simple 6-step process:

**Step 1: Discovery Call (30 min)**
• Discuss your vision & goals
• Understand requirements
• Identify challenges
• No commitment needed

**Step 2: Proposal (1-2 days)**
• Detailed scope document
• Technology recommendations
• Timeline estimate
• Fixed-price quote

**Step 3: Kickoff**
• Contract signing
• 50% upfront payment
• Team introduction
• Project setup

**Step 4: Development**
• Weekly progress updates
• Staging environment access
• Regular feedback loops
• Agile methodology

**Step 5: Testing & QA**
• Comprehensive testing
• Performance optimization
• Security audit
• Client review

**Step 6: Launch & Support**
• Deployment to production
• 2 weeks free support
• Training & documentation
• Maintenance discussion

**Ready to start? Options:**

📧 Email: zelquent.tech@gmail.com
💬 Contact page: Fill out project details
📞 Schedule a call: Let us know your availability

Your idea deserves the best start. Let's make it happen!`
  },
  
  contact: {
    match: ["contact", "reach", "email", "hire", "project", "collaborate", "message", "call", "phone", "whatsapp"],
    reply: (input) => `**Contact Zelquent Tech** 📬

We'd love to hear about your project!

**📧 Email:** zelquent.tech@gmail.com
• Response within 24 hours
• Project inquiries
• Quote requests
• General questions

**💬 Contact Form:** Use our Contact page
• Detailed project description
• Budget & timeline preferences
• File attachments supported

**📞 Phone/WhatsApp:** Available on request
• Schedule a call through email
• Discovery calls (30 min free)
• Video consultations

**📍 Location:** Tiruppur, Tamil Nadu
• Working with clients globally
• Remote collaboration experts
• Flexible time zones

**Response Times:**
• Email: 24 hours
• Proposal: 1-2 days
• Quote: 2-3 days
• Emergency: 4 hours (existing clients)

**What to include in your message:**
• Project overview
• Timeline expectations
• Budget range
• Any specific requirements

Click 'Start Your Project' below to begin, or use the Contact page. We're excited to hear from you!`
  },
  
  default: {
    match: [],
    reply: (input) => `Thanks for your question! I'm here to help with:

**I can tell you about:**
🚀 **Services** - Full-stack development, UI/UX, AI integration
💰 **Pricing** - Cost estimates for different projects
⏱️ **Timelines** - How long things take
💻 **Tech Stack** - React, Spring Boot, AI tools
🔧 **Support** - Maintenance & post-launch help
🎯 **Startups** - MVP development & flexible options

**Try asking:**
• "How much does an e-commerce site cost?"
• "What tech stack do you use?"
• "How long does AI integration take?"
• "Do you work with startups?"
• "What's your payment structure?"

For specific project discussions, please:
📧 Email: zelquent.tech@gmail.com
💬 Use the Contact page

What would you like to know more about?`
  }
};

// Enhanced reply function with context awareness
function getReply(input, conversationHistory = []) {
  const lower = input.toLowerCase();
  
  // Check all FAQ patterns
  for (const key in faqResponses) {
    const entry = faqResponses[key];
    if (entry.match.some((kw) => lower.includes(kw))) {
      return entry.reply(input);
    }
  }
  
  // Check for follow-up questions
  if (conversationHistory.length > 0) {
    const lastBotMessage = [...conversationHistory].reverse().find(m => m.role === 'bot');
    if (lastBotMessage && (lower.includes('more') || lower.includes('detail') || lower.includes('explain'))) {
      return "I'd be happy to provide more details! Could you specify which aspect you'd like to know more about? For example: pricing, timeline, features, or technology stack?";
    }
  }
  
  // Return default response if no match
  return faqResponses.default.reply(input);
}

// Format message with markdown-like styling
function formatMessage(text) {
  return text.split('\n').map((line, i) => {
    if (line.startsWith('**') && line.endsWith('**')) {
      return <strong key={i} className="text-white block mt-2 first:mt-0">{line.slice(2, -2)}</strong>;
    }
    if (line.startsWith('•')) {
      return <div key={i} className="flex items-start gap-2 ml-2 mt-1">
        <span className="text-[#66FCF1]">•</span>
        <span>{line.slice(1)}</span>
      </div>;
    }
    if (line.match(/^\d+\./)) {
      return <div key={i} className="flex items-start gap-2 ml-2 mt-1">
        <span className="text-[#66FCF1] font-medium">{line.split('.')[0]}.</span>
        <span>{line.split('.').slice(1).join('.').trim()}</span>
      </div>;
    }
    return <div key={i} className={i > 0 ? 'mt-2' : ''}>{line}</div>;
  });
}

const initialMessages = [
  {
    role: 'bot',
    text: "Hi there! 👋 I'm the Zelquent Tech AI assistant. I can help you explore our services, get cost estimates, learn about our tech stack, and answer any questions about working with us.\n\n**Try asking me:**\n• What services do you offer?\n• How much does a project cost?\n• What tech stack do you use?\n• How do I start a project?\n\nWhat would you like to know?",
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
];

export default function AIAssistant() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  function sendMessage(text) {
    if (!text.trim()) return;
    
    const userMsg = {
      role: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    setShowSuggestions(false);
    
    // Simulate API delay
    setTimeout(() => {
      const botMsg = {
        role: 'bot',
        text: getReply(text, messages),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setLoading(false);
    }, 900);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  function copyToClipboard(text, index) {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  }

  return (
    <>
      {/* Enhanced Page-specific SEO */}
      <Helmet>
        <title>AI Assistant | Zelquent Tech - Instant Project Estimates & Answers</title>
        <meta
          name="description"
          content="Chat with Zelquent Tech's AI assistant to get instant answers about web development services, pricing, timelines, tech stack, and project estimates. Available 24/7 for quick responses."
        />
        <meta
          name="keywords"
          content="AI assistant, chatbot, project estimator, web development cost, instant quote, FAQ bot, Zelquent Tech assistant, live chat, instant answers, project planner"
        />
        <meta name="author" content="Zelquent Tech" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Assistant | Zelquent Tech - Instant Project Estimates" />
        <meta property="og:description" content="Chat with our AI assistant for instant answers about web development services, pricing, and tech stack." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zelquent.com/ai-assistant" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Assistant | Zelquent Tech" />
        <meta name="twitter:description" content="Get instant answers about web development services." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://zelquent.com/ai-assistant" />
      </Helmet>

      <div className="min-h-screen bg-[#0B0C10] ">
        {/* Hero Section */}
        <section 
          className="grid-bg relative py-12 border-b border-[#1F2833] overflow-hidden"
          aria-labelledby="ai-hero-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <span className="text-[#66FCF1] text-xs font-semibold uppercase tracking-widest">
              GenAI Feature
            </span>
            <h1 
              id="ai-hero-heading" 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4 cyan-glow"
            >
              Ask <span className="text-[#66FCF1]">Zelquent Tech</span>
            </h1>
            <p className="text-[#C5C6C7] text-lg sm:text-xl max-w-2xl mx-auto">
              Get instant answers about services, pricing, timelines, and tech stack. 
              Available 24/7 for quick responses.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Quick action chips */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center" role="group" aria-label="Quick question categories">
              <button
                onClick={() => sendMessage("What services do you offer?")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1F2833] border border-[#45A29E]/30 text-[#C5C6C7] text-xs hover:border-[#66FCF1] hover:text-[#66FCF1] transition-all"
              >
                <Bot className="w-3.5 h-3.5 text-[#66FCF1]" /> Services
              </button>
              <button
                onClick={() => sendMessage("How much does a project cost?")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1F2833] border border-[#45A29E]/30 text-[#C5C6C7] text-xs hover:border-[#66FCF1] hover:text-[#66FCF1] transition-all"
              >
                <DollarSign className="w-3.5 h-3.5 text-[#66FCF1]" /> Pricing
              </button>
              <button
                onClick={() => sendMessage("What tech stack do you use?")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1F2833] border border-[#45A29E]/30 text-[#C5C6C7] text-xs hover:border-[#66FCF1] hover:text-[#66FCF1] transition-all"
              >
                <Code2 className="w-3.5 h-3.5 text-[#66FCF1]" /> Tech Stack
              </button>
              <button
                onClick={() => sendMessage("How long does a project take?")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1F2833] border border-[#45A29E]/30 text-[#C5C6C7] text-xs hover:border-[#66FCF1] hover:text-[#66FCF1] transition-all"
              >
                <Clock className="w-3.5 h-3.5 text-[#66FCF1]" /> Timeline
              </button>
              <button
                onClick={() => sendMessage("Do you offer maintenance?")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1F2833] border border-[#45A29E]/30 text-[#C5C6C7] text-xs hover:border-[#66FCF1] hover:text-[#66FCF1] transition-all"
              >
                <Shield className="w-3.5 h-3.5 text-[#66FCF1]" /> Support
              </button>
            </div>

            {/* Chat window */}
            <div className="bg-[#1F2833] border border-[#45A29E]/20 rounded-2xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#45A29E]/20 bg-[#0B0C10]/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#66FCF1]/10 border border-[#66FCF1]/30 flex items-center justify-center animate-pulse-glow">
                    <Bot className="w-5 h-5 text-[#66FCF1]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold flex items-center gap-2">
                      Zelquent Tech Assistant
                      <Sparkles className="w-3.5 h-3.5 text-[#66FCF1]" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#66FCF1] animate-pulse" aria-hidden="true" />
                      <span className="text-[#66FCF1] text-xs">Online</span>
                      <span className="text-[#C5C6C7] text-xs ml-2">Powered by GenAI</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setMessages(initialMessages);
                    setShowSuggestions(true);
                  }}
                  className="text-[#C5C6C7] hover:text-[#66FCF1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#0B0C10] rounded-lg p-1.5"
                  aria-label="Reset conversation"
                >
                  <RefreshCw className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              {/* Messages */}
              <div className="h-[400px] overflow-y-auto p-5 space-y-4" role="log" aria-label="Chat messages">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.role === 'bot' && (
                      <div className="w-8 h-8 rounded-xl bg-[#66FCF1]/10 border border-[#66FCF1]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Bot className="w-4 h-4 text-[#66FCF1]" aria-hidden="true" />
                      </div>
                    )}
                    <div className={`max-w-xs sm:max-w-md lg:max-w-lg ${msg.role === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                      <div
                        className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-[#66FCF1] text-[#0B0C10] font-medium rounded-br-sm'
                            : 'bg-[#0B0C10] text-[#C5C6C7] border border-[#45A29E]/20 rounded-bl-sm'
                        }`}
                      >
                        {msg.role === 'bot' ? (
                          <div className="space-y-1">
                            {formatMessage(msg.text)}
                          </div>
                        ) : (
                          msg.text
                        )}
                      </div>
                      <div className="flex items-center gap-2 px-1">
                        <span className="text-[#C5C6C7]/40 text-xs">{msg.time}</span>
                        {msg.role === 'bot' && (
                          <button
                            onClick={() => copyToClipboard(msg.text, i)}
                            className="text-[#C5C6C7]/40 hover:text-[#66FCF1] transition-colors"
                            aria-label="Copy response"
                          >
                            {copiedIndex === i ? (
                              <Check className="w-3 h-3" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                    {msg.role === 'user' && (
                      <div className="w-8 h-8 rounded-xl bg-[#45A29E]/20 border border-[#45A29E]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <User className="w-4 h-4 text-[#45A29E]" aria-hidden="true" />
                      </div>
                    )}
                  </div>
                ))}
                {loading && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-xl bg-[#66FCF1]/10 border border-[#66FCF1]/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-[#66FCF1]" aria-hidden="true" />
                    </div>
                    <div className="bg-[#0B0C10] border border-[#45A29E]/20 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#66FCF1] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} aria-hidden="true" />
                      <div className="w-1.5 h-1.5 bg-[#66FCF1] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} aria-hidden="true" />
                      <div className="w-1.5 h-1.5 bg-[#66FCF1] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} aria-hidden="true" />
                      <span className="sr-only">Assistant is typing...</span>
                    </div>
                  </div>
                )}
                <div ref={endRef} />
              </div>

              {/* Input Area */}
              <div className="px-4 py-4 border-t border-[#45A29E]/20 bg-[#0B0C10]/30">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about services, pricing, or tech stack..."
                    className="flex-1 bg-[#0B0C10] border border-[#45A29E]/30 rounded-xl px-4 py-3 text-[#C5C6C7] text-sm placeholder-[#C5C6C7]/30 focus:outline-none focus:border-[#66FCF1] focus:ring-2 focus:ring-[#66FCF1]/20 transition-colors"
                    aria-label="Type your question"
                  />
                  <button
                    onClick={() => sendMessage(input)}
                    disabled={!input.trim() || loading}
                    className="w-11 h-11 rounded-xl bg-[#66FCF1] text-[#0B0C10] flex items-center justify-center hover:bg-[#45A29E] disabled:opacity-40 disabled:cursor-not-allowed transition-all flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#0B0C10]"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

                {/* Suggestions */}
                {showSuggestions && (
                  <div className="mt-4">
                    <p className="text-[#C5C6C7] text-xs mb-2 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#66FCF1]" /> Suggested questions:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {SUGGESTIONS.flatMap(cat => 
                        cat.questions.slice(0, 2).map(q => (
                          <button
                            key={q}
                            onClick={() => sendMessage(q)}
                            className="text-xs text-left px-3 py-2 rounded-lg bg-[#1F2833] border border-[#45A29E]/20 text-[#C5C6C7] hover:text-[#66FCF1] hover:border-[#66FCF1]/40 transition-all"
                          >
                            {q}
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-[#C5C6C7]/40 text-xs mt-4">
              This AI assistant provides instant answers based on our services and expertise. 
              For detailed project discussions, please{' '}
              <button 
                onClick={() => navigate('/contact')}
                className="text-[#66FCF1] hover:underline focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#0B0C10] rounded"
              >
                contact us directly
              </button>.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section 
          className="py-16 bg-[#1F2833]/30"
          aria-labelledby="features-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="features-heading" className="sr-only">AI Assistant Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6" role="list">
              {[
                { 
                  icon: <MessageCircle className="w-5 h-5 text-[#66FCF1]" />, 
                  title: "24/7 Availability", 
                  desc: "Get instant answers anytime, anywhere" 
                },
                { 
                  icon: <Zap className="w-5 h-5 text-[#66FCF1]" />, 
                  title: "Instant Estimates", 
                  desc: "Quick project cost and timeline estimates" 
                },
                { 
                  icon: <Code2 className="w-5 h-5 text-[#66FCF1]" />, 
                  title: "Tech Stack Info", 
                  desc: "Learn about our technologies and tools" 
                },
                { 
                  icon: <ThumbsUp className="w-5 h-5 text-[#66FCF1]" />, 
                  title: "No Commitment", 
                  desc: "Ask anything, no pressure to hire" 
                },
              ].map((feature) => (
                <div 
                  key={feature.title} 
                  className="bg-[#1F2833] border border-[#45A29E]/20 rounded-xl p-5 text-center hover:border-[#66FCF1]/40 transition-all"
                  role="listitem"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#66FCF1]/10 border border-[#66FCF1]/20 flex items-center justify-center mx-auto mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-medium text-sm mb-1">{feature.title}</h3>
                  <p className="text-[#C5C6C7] text-xs leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                  Ready to Start Your Project?
                </h2>
                <p className="text-[#C5C6C7] text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss your ideas in detail and create something amazing together.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#66FCF1] text-[#0B0C10] font-bold text-base hover:bg-[#45A29E] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833]"
                  >
                    <Zap className="w-5 h-5" />
                    Kickstart Your Project
                  </button>
                  <button
                    onClick={() => sendMessage("What services do you offer?")}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#45A29E] text-[#C5C6C7] hover:border-[#66FCF1] hover:text-[#66FCF1] transition-all focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833]"
                  >
                    <Bot className="w-5 h-5" />
                    Continue Chat
                  </button>
                </div>

                {/* Contact options */}
                <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-[#C5C6C7]">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3 text-[#66FCF1]" /> zelquent.tech@gmail.com
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#66FCF1]" /> Tiruppur, India
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3 text-[#66FCF1]" /> Response within 24h
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

