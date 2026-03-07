import { useNavigate } from "react-router-dom";
import { useState, useRef } from 'react';
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  MessageCircle,
  Users,
  Sparkles,
  Copy,
  Check,
  Calendar,
  HelpCircle
} from 'lucide-react';
import { Helmet } from "react-helmet-async";
import { FaXTwitter } from "react-icons/fa6";


// Project types
const projectTypes = [
  { value: "Full Stack Web Development", label: "Full Stack Web Development", icon: "🚀" },
  { value: "UI/UX Design", label: "UI/UX Design", icon: "🎨" },
  { value: "Backend API Development", label: "Backend API Development", icon: "⚙️" },
  { value: "AI Integration", label: "AI Integration", icon: "🤖" },
  { value: "DevOps & Hosting", label: "DevOps & Hosting", icon: "☁️" },
  { value: "Website Redesign", label: "Website Redesign", icon: "🔄" },
  { value: "MVP Development", label: "MVP Development", icon: "🎯" },
  { value: "E-commerce Platform", label: "E-commerce Platform", icon: "🛍️" },
  { value: "Other", label: "Other", icon: "💡" },
];

// Budget ranges
const budgetRanges = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,50,000",
  "₹2,50,000 – ₹5,00,000",
  "₹5,00,000+",
  "Not sure / Need consultation",
];

// Timeline options
const timelineOptions = [
  "ASAP (1-2 weeks)",
  "Within a month",
  "1-3 months",
  "3-6 months",
  "Flexible / Not sure",
];

// How did you hear about us options
const hearAboutOptions = [
  "Google Search",
  "GitHub",
  "LinkedIn",
  "Twitter/X",
  "Friend/Referral",
  "Portfolio",
  "Other",
];

// FAQ data
const faqs = [
  {
    question: "How quickly do you respond?",
    answer: "We respond to all inquiries within 24 hours on business days. For urgent projects, mention it in your message and we'll prioritize it."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! We work with clients globally. Distance is never a barrier — we're experienced in remote collaboration."
  },
  {
    question: "What information should I include in my message?",
    answer: "Include your project vision, key features, timeline expectations, and any specific requirements. The more details, the better we can understand your needs!"
  },
  {
    question: "Is there a free consultation?",
    answer: "Yes! We offer a free 30-minute discovery call to discuss your project, answer questions, and provide initial recommendations."
  }
];

// Quick contact options
const quickContacts = [
  { icon: <Mail className="w-4 h-4" aria-hidden="true" />, label: "Email", value: "zelquent.tech@gmail.com", href: "mailto:zelquent.tech@gmail.com" },
  { icon: <MessageCircle className="w-4 h-4" aria-hidden="true" />, label: "WhatsApp", value: "+91 7010135953", href: "https://wa.me/917010135953" },
  { icon: <Clock className="w-4 h-4" aria-hidden="true" />, label: "Response Time", value: "< 24 hours", href: null },
];

export default function Contact() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    hearAbout: '',
    message: '',
    newsletter: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const formRef = useRef(null);



  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) errs.email = "Enter a valid email address";
    if (!form.projectType) errs.projectType = "Please select a project type";
    if (!form.message.trim()) errs.message = "Tell us about your project";
    else if (form.message.trim().length < 20) errs.message = "Please provide more details (at least 20 characters)";
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstError = document.querySelector('.border-red-500');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setSending(true);
    setSubmitError('');

    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        company: form.company || 'Not specified',
        project_type: projectTypes.find(t => t.value === form.projectType)?.label || form.projectType,
        budget: form.budget || 'Not specified',
        timeline: form.timeline || 'Not specified',
        hear_about: form.hearAbout || 'Not specified',
        message: form.message,
        newsletter: form.newsletter ? 'Yes' : 'No',
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      if (result.status === 200) {
        setSubmitted(true);
        try {
          await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
              to_name: form.name,
              to_email: form.email,
              message: "Thank you for contacting Zelquent Tech! We've received your message and will get back to you within 24 hours.",
            },
            {
              publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            }
          );
        } catch (autoReplyError) {
          console.log('Auto-reply not sent');
        }
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitError('Failed to send message. Please try again or email us directly.');
    } finally {
      setSending(false);
    }
  }

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  }

  return (
    <>
      <Helmet>
        <title>Contact Zelquent Tech | Start Your Web Development & AI Project</title>
        <meta
          name="description"
          content="Contact Zelquent Tech for your web development needs. Get a free quote for full-stack development, AI integration, UI/UX design, and more. We respond within 24 hours."
        />
        <meta
          name="keywords"
          content="contact Zelquent Tech, web development inquiry, hire React developers, get project quote, India web development agency"
        />
        <meta name="author" content="Zelquent Tech" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Zelquent Tech | Start Your Web Development & AI Project" />
        <meta property="og:description" content="Get in touch for your next web development project. Free consultation, quick response." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zelquent.com/contact" />
        <link rel="canonical" href="https://zelquent.com/contact" />
      </Helmet>



      <div className="min-h-screen bg-[#0B0C10]">
        {/* Hero Section */}
        <section
          className="grid-bg relative py-16 border-b border-[#1F2833] overflow-hidden"
          aria-labelledby="contact-hero-heading"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#66FCF1]/5 via-transparent to-transparent" aria-hidden="true" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <span className="text-[#66FCF1] text-xs font-semibold uppercase tracking-widest">
              Get In Touch
            </span>
            <h1
              id="contact-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4 cyan-glow"
            >
              {"Let's Build Something"} <span className="text-[#66FCF1]">Amazing</span>
            </h1>
            <p className="text-[#C5C6C7] text-lg sm:text-xl max-w-2xl mx-auto">
              Have a project in mind? We typically respond within 24 hours. Drop us a message below
              and let's start the conversation.
            </p>

            {/* Quick contact stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {quickContacts.map((contact, index) => (
                <div key={index} className="flex items-center gap-2 bg-[#1F2833] px-4 py-2 rounded-lg border border-[#45A29E]/20">
                  <span className="text-[#66FCF1]">{contact.icon}</span>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-white text-sm hover:text-[#66FCF1] transition-colors"
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-white text-sm">{contact.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Left Column - Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact Info Card */}
                <div className="bg-[#1F2833] border border-[#45A29E]/20 rounded-2xl p-6">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 text-[#66FCF1]" />
                    Contact Info
                  </h2>

                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-3 group">
                      <div className="w-10 h-10 rounded-lg bg-[#66FCF1]/10 border border-[#66FCF1]/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-[#66FCF1]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white text-sm font-medium mb-1">Email</div>
                        <div className="flex items-center gap-2">
                          <a
                            href="mailto:zelquent.tech@gmail.com"
                            className="text-[#C5C6C7] text-sm hover:text-[#66FCF1] transition-colors break-all"
                          >
                            zelquent.tech@gmail.com
                          </a>
                          <button
                            onClick={() => copyToClipboard('zelquent.tech@gmail.com')}
                            className="text-[#C5C6C7] hover:text-[#66FCF1] transition-colors p-1"
                            aria-label="Copy email address"
                          >
                            {copiedEmail ? (
                              <Check className="w-3.5 h-3.5 text-[#66FCF1]" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                        <p className="text-[#C5C6C7]/40 text-xs mt-1">Response within 24h</p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3 group">
                      <div className="w-10 h-10 rounded-lg bg-[#66FCF1]/10 border border-[#66FCF1]/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-[#66FCF1]" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium mb-1">Location</div>
                        <div className="text-[#C5C6C7] text-sm">Tiruppur, Tamil Nadu, India</div>
                        <p className="text-[#C5C6C7]/40 text-xs mt-1">Serving clients globally</p>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-3 group">
                      <div className="w-10 h-10 rounded-lg bg-[#66FCF1]/10 border border-[#66FCF1]/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-[#66FCF1]" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium mb-1">Working Hours</div>
                        <div className="text-[#C5C6C7] text-sm">Monday - Friday: 9:00 AM - 6:00 PM IST</div>
                        <div className="text-[#C5C6C7] text-sm">Saturday: 10:00 AM - 2:00 PM IST</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-[#1F2833] border border-[#45A29E]/20 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#66FCF1]" />
                    Follow Us
                  </h3>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="https://github.com/ZelqentTech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#0B0C10] border border-[#45A29E]/30 flex items-center justify-center text-[#C5C6C7] hover:border-[#66FCF1] hover:text-[#66FCF1] hover:scale-110 transition-all"
                      aria-label="Visit our GitHub page"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com/company/zelquent"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#0B0C10] border border-[#45A29E]/30 flex items-center justify-center text-[#C5C6C7] hover:border-[#66FCF1] hover:text-[#66FCF1] hover:scale-110 transition-all"
                      aria-label="Visit our LinkedIn page"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com/zelquent"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#0B0C10] border border-[#45A29E]/30 flex items-center justify-center text-[#C5C6C7] hover:border-[#66FCF1] hover:text-[#66FCF1] hover:scale-110 transition-all"
                      aria-label="Visit our Twitter page"
                    >
                      <FaXTwitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="bg-gradient-to-br from-[#1F2833] to-[#1A222A] border border-[#66FCF1]/20 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#66FCF1]/10 border border-[#66FCF1]/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-[#66FCF1]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Quick Response Guarantee</h3>
                      <p className="text-[#C5C6C7] text-sm leading-relaxed">
                        We respond to all inquiries within <span className="text-[#66FCF1] font-semibold">24 hours</span> on business days.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-[#1F2833] border border-[#45A29E]/20 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#66FCF1]" />
                    Quick FAQs
                  </h3>
                  <div className="space-y-3">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-[#45A29E]/20 last:border-0 pb-3 last:pb-0">
                        <button
                          onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                          className="flex items-start gap-2 w-full text-left"
                          aria-expanded={activeFaq === index}
                        >
                          <span className="text-[#66FCF1] text-sm font-medium">{index + 1}.</span>
                          <span className="text-white text-sm flex-1">{faq.question}</span>
                        </button>
                        {activeFaq === index && (
                          <p className="text-[#C5C6C7] text-xs mt-2 pl-5">{faq.answer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <div
                    className="bg-[#1F2833] border border-[#66FCF1]/30 rounded-2xl p-10 flex flex-col items-center text-center gap-4"
                    role="alert"
                    aria-live="polite"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#66FCF1]/10 border border-[#66FCF1]/30 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-[#66FCF1]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                    <p className="text-[#C5C6C7] max-w-md">
                      Thanks for reaching out, {form.name}! We've received your message and will get back to you
                      within 24 hours.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: '', email: '', company: '', projectType: '', budget: '', timeline: '', hearAbout: '', message: '', newsletter: false });
                        }}
                        className="px-6 py-3 rounded-xl bg-[#66FCF1] text-[#0B0C10] font-bold text-sm hover:bg-[#45A29E] transition-all"
                      >
                        Send Another Message
                      </button>
                      <button
                        onClick={() => navigate('/portfolio')}
                        className="px-6 py-3 rounded-xl border border-[#45A29E] text-[#C5C6C7] hover:border-[#66FCF1] hover:text-[#66FCF1] transition-all"
                      >
                        View Our Work
                      </button>
                    </div>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="bg-[#1F2833] border border-[#45A29E]/20 rounded-2xl p-8 space-y-6"
                    noValidate
                  >
                    {submitError && (
                      <div
                        className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3"
                        role="alert"
                      >
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-red-500 text-sm">{submitError}</p>
                      </div>
                    )}

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-white text-sm font-medium mb-1.5">
                          Full Name <span className="text-[#66FCF1]">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className={`w-full bg-[#0B0C10] border rounded-xl px-4 py-3 text-[#C5C6C7] text-sm placeholder-[#C5C6C7]/30 focus:outline-none focus:border-[#66FCF1] focus:ring-2 focus:ring-[#66FCF1]/20 transition-colors ${errors.name ? 'border-red-500' : 'border-[#45A29E]/30'}`}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          required
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-white text-sm font-medium mb-1.5">
                          Email Address <span className="text-[#66FCF1]">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={`w-full bg-[#0B0C10] border rounded-xl px-4 py-3 text-[#C5C6C7] text-sm placeholder-[#C5C6C7]/30 focus:outline-none focus:border-[#66FCF1] focus:ring-2 focus:ring-[#66FCF1]/20 transition-colors ${errors.email ? 'border-red-500' : 'border-[#45A29E]/30'}`}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          required
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Company (Optional) */}
                    <div>
                      <label htmlFor="company" className="block text-white text-sm font-medium mb-1.5">
                        Company / Organization <span className="text-[#C5C6C7]/40 text-xs">(optional)</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Your company name"
                        value={form.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className="w-full bg-[#0B0C10] border border-[#45A29E]/30 rounded-xl px-4 py-3 text-[#C5C6C7] text-sm placeholder-[#C5C6C7]/30 focus:outline-none focus:border-[#66FCF1] focus:ring-2 focus:ring-[#66FCF1]/20 transition-colors"
                        autoComplete="organization"
                      />
                    </div>

                    {/* Project Type & Budget Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="projectType" className="block text-white text-sm font-medium mb-1.5">
                          Project Type <span className="text-[#66FCF1]">*</span>
                        </label>
                        <select
                          id="projectType"
                          value={form.projectType}
                          onChange={(e) => handleChange('projectType', e.target.value)}
                          className={`w-full bg-[#0B0C10] border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#66FCF1] focus:ring-2 focus:ring-[#66FCF1]/20 transition-colors appearance-none ${errors.projectType ? 'border-red-500' : 'border-[#45A29E]/30'}`}
                          aria-invalid={!!errors.projectType}
                          aria-describedby={errors.projectType ? "projectType-error" : undefined}
                          required
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          {projectTypes.map((t) => (
                            <option key={t.value} value={t.value}>
                              {t.icon} {t.label}
                            </option>
                          ))}
                        </select>
                        {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType}</p>}
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-white text-sm font-medium mb-1.5">
                          Budget Range <span className="text-[#C5C6C7]/40 text-xs">(optional)</span>
                        </label>
                        <select
                          id="budget"
                          value={form.budget}
                          onChange={(e) => handleChange('budget', e.target.value)}
                          className="w-full bg-[#0B0C10] border border-[#45A29E]/30 rounded-xl px-4 py-3 text-[#C5C6C7] text-sm focus:outline-none focus:border-[#66FCF1] focus:ring-2 focus:ring-[#66FCF1]/20 transition-colors appearance-none"
                          autoComplete="off"
                        >
                          <option value="">
                            Select budget (optional)
                          </option>
                          {budgetRanges.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Timeline & How Heard Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="timeline"
                          className="block text-white text-sm font-medium mb-1.5"
                        >
                          Timeline <span className="text-[#C5C6C7]/40 text-xs">(optional)</span>
                        </label>

                        <select
                          id="timeline"
                          value={form.timeline}
                          onChange={(e) => handleChange('timeline', e.target.value)}
                          className="w-full bg-[#0B0C10] border border-[#45A29E]/30 rounded-xl px-4 py-3 text-[#C5C6C7] text-sm focus:outline-none focus:border-[#66FCF1] focus:ring-2 focus:ring-[#66FCF1]/20 transition-colors appearance-none"
                          autoComplete="off"
                        >
                          <option value="">
                            Select timeline (optional)
                          </option>

                          {timelineOptions.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="hearAbout"
                          className="block text-white text-sm font-medium mb-1.5"
                        >
                          How did you hear about us?
                          <span className="text-[#C5C6C7]/40 text-xs">(optional)</span>
                        </label>

                        <select
                          id="hearAbout"
                          value={form.hearAbout}
                          onChange={(e) => handleChange('hearAbout', e.target.value)}
                          className="w-full bg-[#0B0C10] border border-[#45A29E]/30 rounded-xl px-4 py-3 text-[#C5C6C7] text-sm focus:outline-none focus:border-[#66FCF1] focus:ring-2 focus:ring-[#66FCF1]/20 transition-colors appearance-none"
                          autoComplete="off"
                        >
                          <option value="">
                            Select an option (optional)
                          </option>

                          {hearAboutOptions.map((h) => (
                            <option key={h} value={h}>
                              {h}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-white text-sm font-medium mb-1.5"
                      >
                        Project Description <span className="text-[#66FCF1]">*</span>
                      </label>

                      <textarea
                        id="message"
                        rows={6}
                        placeholder="Tell us about your project idea, goals, and any specific requirements."
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className={`w-full bg-[#0B0C10] border rounded-xl px-4 py-3 text-[#C5C6C7] text-sm placeholder-[#C5C6C7]/30 focus:outline-none focus:border-[#66FCF1] focus:ring-2 focus:ring-[#66FCF1]/20 transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-[#45A29E]/30'
                          }`}
                        aria-invalid={!!errors.message}
                        aria-describedby="message-error message-help"
                        required
                      />

                      {/* Error Message */}
                      {errors.message && (
                        <p
                          id="message-error"
                          className="text-red-400 text-xs mt-1"
                          role="alert"
                        >
                          {errors.message}
                        </p>
                      )}

                      {/* Character Counter */}
                      <p
                        id="message-help"
                        className="text-[#C5C6C7]/40 text-xs mt-1"
                      >
                        {form.message.length} characters (minimum 20 recommended)
                      </p>
                    </div>

                    {/* Newsletter Checkbox */}
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="newsletter"
                        checked={form.newsletter}
                        onChange={(e) => handleChange('newsletter', e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-[#45A29E]/30 bg-[#0B0C10] text-[#66FCF1] focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833] transition-colors"
                        aria-describedby="newsletter-help"
                      />

                      <div>
                        <label
                          htmlFor="newsletter"
                          className="text-[#C5C6C7] text-sm cursor-pointer"
                        >
                          Keep me updated with tech insights and company news
                        </label>

                        <p
                          id="newsletter-help"
                          className="text-[#C5C6C7]/40 text-xs mt-1"
                        >
                          You can unsubscribe anytime.
                        </p>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={sending}
                      aria-busy={sending}
                      aria-live="polite"
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#66FCF1] text-[#0B0C10] font-bold text-base transition-all hover:bg-[#45A29E] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#1F2833] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {sending ? (
                        <>
                          <div
                            className="w-5 h-5 border-2 border-[#0B0C10] border-t-transparent rounded-full animate-spin"
                            aria-hidden="true"
                          />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" aria-hidden="true" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <p className="text-center text-[#C5C6C7]/40 text-xs">
                      By submitting this form, you agree to our privacy policy. We'll never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-[#1F2833] to-[#1A222A] border border-[#66FCF1]/20 rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Prefer to chat on a call?
              </h2>
              <p className="text-[#C5C6C7] text-lg mb-6 max-w-xl mx-auto">
                Schedule a free 30-minute discovery call to discuss your project in detail.
              </p>
              <button
                onClick={() => window.location.href = 'mailto:zelquent.tech@gmail.com?subject=Schedule%20a%20Discovery%20Call&body=Hi%20Zelquent%20Tech%20team,%0A%0AI\'d%20like%20to%20schedule%20a%20discovery%20call%20to%20discuss%20my%20project.'}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#66FCF1] text-[#0B0C10] font-bold text-base hover:bg-[#45A29E] transition-all hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

