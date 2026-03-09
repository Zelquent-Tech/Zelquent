import { useNavigate } from 'react-router-dom';
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
  Zap,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Enhanced testimonials with more details and structured data
const testimonials = [
  {
    quote:
      'Honestly, working with the Zelquent team was a breath of fresh air. They just got it. Communication was super fast, the code was solid, and we actually launched our platform early. That never happens!',
    name: 'Arjun Mehta',
    role: 'Founder',
    company: 'WebFlowX',
    industry: 'SaaS Platform',
    projectType: 'Full Stack Development',
    stars: 5,
    date: 'January 2025',
    keyPoints: ['Early delivery', 'Fast communication', 'Clean code'],
    avatar: 'AM',
  },
  {
    quote:
      'I was a bit nervous about messing up our customer system with AI, but they handled the whole integration seamlessly. It was totally stress-free. Now our chatbot handles the bulk of the support questions without us lifting a finger.',
    name: 'Priya Singh',
    role: 'CEO',
    company: 'DataDrive Labs',
    industry: 'AI Analytics',
    projectType: 'AI Integration',
    stars: 5,
    date: 'March 2025',
    keyPoints: ['Stress-free integration', 'Automated support', 'Seamless deployment'],
    avatar: 'PS',
  },
  {
    quote:
      'These guys are pros. No drama, no delays—just really great work. They delivered everything we asked for, and the UI they built is so clean. Our users keep complimenting it.',
    name: 'Rahul Sharma',
    role: 'CTO',
    company: 'PixelFrame Studio',
    industry: 'Creative Agency',
    projectType: 'UI/UX Design & Development',
    stars: 5,
    date: 'February 2025',
    keyPoints: ['No delays', 'Clean UI', 'User-friendly'],
    avatar: 'RS',
  },
  {
    quote:
      'We needed our entire e-commerce site built from the ground up, and fast. Zelquent Tech pulled it off in just six weeks. You can tell they really know their way around backend development.',
    name: 'Sneha Patel',
    role: 'Product Manager',
    company: 'BazaarNow',
    industry: 'E-commerce',
    projectType: 'Full Stack E-commerce',
    stars: 5,
    date: 'December 2024',
    keyPoints: ['6-week delivery', 'Scalable backend', 'Fast turnaround'],
    avatar: 'SP',
  },
  {
    quote:
      'We brought them in for a tricky React and AI project. The code they wrote was not just clean, but actually easy for our team to work with later. Plus, they were great about keeping us in the loop the whole time.',
    name: 'Vikram Nair',
    role: 'Technical Lead',
    company: 'AiDeskPro',
    industry: 'AI Software',
    projectType: 'React + AI Integration',
    stars: 5,
    date: 'April 2025',
    keyPoints: ['Clean code', 'Knowledge transfer', 'Transparent communication'],
    avatar: 'VN',
  },
  {
    quote:
      "What really stood out was how detail-oriented they were. They pointed out a few things we hadn't even thought of. It's rare to find a team that cares about your project like it's its own.",
    name: 'Anjali Iyer',
    role: 'Operations Director',
    company: 'NestHive Realty',
    industry: 'Real Estate',
    projectType: 'Web Application',
    stars: 5,
    date: 'January 2025',
    keyPoints: ['Detail-oriented', 'Proactive suggestions', 'Dedicated team'],
    avatar: 'AI',
  },
];

// Enhanced statistics
const stats = [
  {
    icon: <Star className="h-5 w-5 fill-current" />,
    value: '5.0',
    label: 'Average Rating',
    description: 'Perfect 5-star rating from all clients',
  },
  {
    icon: <Users className="h-5 w-5" />,
    value: '5+',
    label: 'Happy Clients',
    description: 'Trusted by startups and established businesses',
  },
  {
    icon: <Clock className="h-5 w-5" />,
    value: '100%',
    label: 'On-Time Delivery',
    description: 'Every project delivered on schedule',
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    value: '50+',
    label: 'Success Stories',
    description: 'Real impact across various industries',
  },
];

// Industry categories represented
const industries = ['SaaS', 'AI/ML', 'E-commerce', 'Real Estate', 'Creative', 'Enterprise'];

// Structured data for aggregate rating
const aggregateRatingStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zelquent Tech',
  url: 'https://zelquent.com',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: testimonials.length.toString(),
    bestRating: '5',
    worstRating: '1',
  },
  review: testimonials.map((t) => ({
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      name: 'Zelquent Tech',
    },
    author: {
      '@type': 'Person',
      name: t.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: t.stars.toString(),
      bestRating: '5',
    },
    reviewBody: t.quote,
  })),
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
        <meta
          property="og:description"
          content="See why clients rate us 5-stars for web development, AI integration, and design services. 100% on-time delivery guarantee."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zelquent.com/testimonials" />
        <meta property="og:image" content="https://zelquent.com/testimonials-og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Client Testimonials & Success Stories | Zelquent Tech"
        />
        <meta
          name="twitter:description"
          content="See why clients rate us 5-stars for web development and AI integration."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://zelquent.com/testimonials" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(aggregateRatingStructuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-[#0B0C10]">
        {/* Hero Section */}
        <section
          className="grid-bg relative overflow-hidden border-b border-[#1F2833] py-16"
          aria-labelledby="testimonials-hero-heading"
        >
          {/* Background decoration */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#66FCF1]/5 via-transparent to-transparent"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#66FCF1]">
              Client Love
            </span>
            <h1
              id="testimonials-hero-heading"
              className="cyan-glow mb-4 mt-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            >
              What Our <span className="text-[#66FCF1]">Clients Say</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[#C5C6C7] sm:text-xl">
              Real words from real clients who trusted Zelquent Tech to bring their vision to life.
              We're proud to have earned their trust and 5-star ratings.
            </p>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="flex items-center gap-1 rounded-full border border-[#45A29E]/20 bg-[#1F2833] px-3 py-1.5 text-xs">
                <Award className="h-3 w-3 text-[#66FCF1]" /> 5-Star Rated
              </span>
              <span className="flex items-center gap-1 rounded-full border border-[#45A29E]/20 bg-[#1F2833] px-3 py-1.5 text-xs">
                <Shield className="h-3 w-3 text-[#66FCF1]" /> Verified Reviews
              </span>
              <span className="flex items-center gap-1 rounded-full border border-[#45A29E]/20 bg-[#1F2833] px-3 py-1.5 text-xs">
                <ThumbsUp className="h-3 w-3 text-[#66FCF1]" /> 100% Satisfaction
              </span>
            </div>
          </div>
        </section>

        {/* Stats Grid - Enhanced */}
        <section
          className="border-b border-[#45A29E]/10 bg-[#1F2833]/30 py-12"
          aria-label="Company statistics"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4" role="list">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-[#45A29E]/20 bg-[#1F2833] p-4 text-center transition-all hover:border-[#66FCF1]/40"
                  role="listitem"
                >
                  <div className="mb-2 flex justify-center text-[#66FCF1]">{stat.icon}</div>
                  <div
                    className="text-2xl font-bold text-white"
                    aria-label={`${stat.value} ${stat.label}`}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-[#C5C6C7]">{stat.label}</div>
                  <span className="sr-only">{stat.description}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Tags */}
        <section className="py-8" aria-label="Industries we serve">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-center text-sm text-[#C5C6C7]">Trusted by companies in:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-[#45A29E]/20 bg-[#1F2833] px-3 py-1.5 text-xs text-[#C5C6C7]"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-12" aria-labelledby="testimonials-grid-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="testimonials-grid-heading" className="sr-only">
              Client Testimonials
            </h2>

            {/* Featured Testimonial (first one highlighted) */}
            <div className="mb-8">
              <article
                className="relative overflow-hidden rounded-2xl border-2 border-[#66FCF1]/30 bg-gradient-to-br from-[#1F2833] to-[#1A222A] p-8"
                itemScope
                itemType="https://schema.org/Review"
              >
                <Quote
                  className="absolute right-6 top-6 h-16 w-16 text-[#66FCF1]/10"
                  aria-hidden="true"
                />
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#66FCF1] bg-[#66FCF1]/20 font-bold text-[#66FCF1]">
                    {testimonials[0].avatar}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white" itemProp="author">
                      {testimonials[0].name}
                    </div>
                    <div className="text-sm text-[#66FCF1]">
                      {testimonials[0].role} at {testimonials[0].company}
                    </div>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {Array.from({ length: testimonials[0].stars }).map((_, si) => (
                      <Star
                        key={si}
                        className="h-5 w-5 fill-[#66FCF1] text-[#66FCF1]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-[#C5C6C7]" itemProp="reviewBody">
                  "{testimonials[0].quote}"
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {testimonials[0].keyPoints.map((point) => (
                    <span
                      key={point}
                      className="rounded-md border border-[#66FCF1]/30 bg-[#0B0C10] px-2 py-1 text-xs text-[#66FCF1]"
                    >
                      {point}
                    </span>
                  ))}
                </div>
                <meta itemProp="reviewRating" content="5" />
              </article>
            </div>

            {/* Rest of testimonials grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" role="list">
              {testimonials.slice(1).map((testimonial, index) => (
                <article
                  key={index}
                  className="card-hover relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[#45A29E]/20 bg-[#1F2833] p-6 transition-all hover:border-[#66FCF1]/40"
                  role="listitem"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <Quote
                    className="absolute right-4 top-4 h-8 w-8 text-[#66FCF1]/10"
                    aria-hidden="true"
                  />

                  {/* Client info and rating */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#66FCF1]/30 bg-[#66FCF1]/10 text-sm font-bold text-[#66FCF1]">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white" itemProp="author">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-[#66FCF1]">{testimonial.role}</div>
                      <div className="text-xs text-[#C5C6C7]">{testimonial.company}</div>
                    </div>
                    <div
                      className="flex gap-0.5"
                      aria-label={`Rating: ${testimonial.stars} out of 5 stars`}
                    >
                      {Array.from({ length: testimonial.stars }).map((_, si) => (
                        <Star
                          key={si}
                          className="h-3 w-3 fill-[#66FCF1] text-[#66FCF1]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <p
                    className="flex-1 text-sm leading-relaxed text-[#C5C6C7]"
                    itemProp="reviewBody"
                  >
                    "{testimonial.quote}"
                  </p>

                  {/* Project type and key points */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-[#66FCF1]" aria-hidden="true" />
                      <span className="text-xs text-[#66FCF1]">{testimonial.projectType}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {testimonial.keyPoints.map((point) => (
                        <span
                          key={point}
                          className="rounded-md border border-[#45A29E]/40 bg-[#0B0C10] px-2 py-0.5 text-xs text-[#45A29E]"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Date */}
                  <div className="mt-2 text-xs text-[#C5C6C7]">{testimonial.date}</div>

                  <meta itemProp="reviewRating" content="5" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Clients Love Us */}
        <section className="bg-[#1F2833]/30 py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-white">
              Why Clients <span className="text-[#66FCF1]">Love Working</span> With Us
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'On-Time Delivery',
                  desc: 'Every project delivered on schedule, no exceptions',
                  icon: <Clock className="h-5 w-5 text-[#66FCF1]" />,
                },
                {
                  title: 'Clean Code',
                  desc: "Maintainable, well-documented code that's easy to work with",
                  icon: <CheckCircle2 className="h-5 w-5 text-[#66FCF1]" />,
                },
                {
                  title: 'Transparent Communication',
                  desc: 'Regular updates and clear communication throughout',
                  icon: <MessageCircle className="h-5 w-5 text-[#66FCF1]" />,
                },
                {
                  title: 'Proactive Suggestions',
                  desc: 'We bring ideas to improve your project',
                  icon: <Sparkles className="h-5 w-5 text-[#66FCF1]" />,
                },
                {
                  title: 'Post-Launch Support',
                  desc: "We don't disappear after launch",
                  icon: <Shield className="h-5 w-5 text-[#66FCF1]" />,
                },
                {
                  title: 'Stress-Free Process',
                  desc: "We handle the complexity so you don't have to",
                  icon: <ThumbsUp className="h-5 w-5 text-[#66FCF1]" />,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#45A29E]/20 bg-[#1F2833] p-4 transition-all hover:border-[#66FCF1]/40"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#66FCF1]/10">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white">{item.title}</h3>
                      <p className="mt-1 text-xs text-[#C5C6C7]">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20" aria-label="Call to action">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-[#45A29E]/30 bg-[#1F2833] p-12 text-center">
              {/* Background effects */}
              <div className="grid-bg absolute inset-0 opacity-40" aria-hidden="true" />
              <div
                className="absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#66FCF1]/5 blur-3xl"
                aria-hidden="true"
              />

              {/* Content */}
              <div className="relative">
                <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                  Ready to Join Our Happy Clients?
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-[#C5C6C7]">
                  Let's build something remarkable together and add your success story to our
                  collection.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#66FCF1] px-8 py-4 text-base font-bold text-[#0B0C10] transition-all hover:scale-105 hover:bg-[#45A29E] focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833]"
                    aria-label="Start a project with Zelquent Tech"
                  >
                    <Zap className="h-5 w-5" aria-hidden="true" />
                    Let's Build Together
                  </button>
                  <button
                    onClick={() => navigate('/portfolio')}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#45A29E] px-8 py-4 text-[#C5C6C7] transition-all hover:border-[#66FCF1] hover:text-[#66FCF1] focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833]"
                    aria-label="View our portfolio"
                  >
                    View Our Work <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                {/* Social proof badges */}
                <div className="mt-8 flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {testimonials.slice(0, 3).map((t, i) => (
                        <div
                          key={i}
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-[#66FCF1] bg-[#66FCF1]/20 text-xs font-bold text-[#66FCF1]"
                        >
                          {t.avatar}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-[#C5C6C7]">Join 5+ happy clients</span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-[#C5C6C7]">
                    <Shield className="h-3 w-3 text-[#66FCF1]" /> Satisfaction guaranteed
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
