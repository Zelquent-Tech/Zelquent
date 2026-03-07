import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import {
  Code2,
  Linkedin,
  Heart,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = React.memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const quickLinksLeft = [
    { name: "Home", page: "/" },
    { name: "Services", page: "/services" },
    { name: "Tech Stack", page: "/tech" },
    { name: "AI Assistant", page: "/ai" },
  ];

  const quickLinksRight = [
    { name: "About", page: "/about" },
    { name: "Portfolio", page: "/portfolio" },
    { name: "Testimonials", page: "/testimonials" },
    { name: "Contact", page: "/contact" },
  ];

  const services = [
    "Full Stack Development",
    "UI/UX Design",
    "AI Integration",
    "Backend API",
    "DevOps & Hosting",
  ];

  return (
    <footer
      className="bg-[#1F2833] border-t border-[#45A29E]/20 pt-16 pb-8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12 min-h-[320px]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#66FCF1]/10 border border-[#66FCF1]/30 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-[#66FCF1]" />
              </div>
              <span className="text-white font-bold text-lg">
                Zelquent<span className="text-[#66FCF1]">Tech</span>
              </span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-xs">
              Empowering businesses with scalable, accessible, and AI-driven web
              solutions. Built with passion from Tiruppur, Tamil Nadu.
            </p>

            <div className="flex flex-wrap gap-2 mb-4 min-h-[60px]">
              {services.map((service) => (
                <span
                  key={service}
                  className="text-xs bg-[#0B0C10] border border-[#45A29E]/30 text-gray-300 px-2 py-1 rounded-md"
                >
                  {service}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {[
                { href: "https://www.instagram.com/zelquent_tech", icon: <Instagram className="w-4 h-4" />, label: "Instagram" },
                { href: "https://www.linkedin.com/in/zelquent-tech", icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
                { href: "https://x.com/Zelquent_Tech", icon: <FaXTwitter className="w-4 h-4" />, label: "Twitter" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-[#0B0C10] border border-[#45A29E]/30 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#66FCF1] transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              QUICK LINKS
            </h3>

            <div className="grid grid-cols-2 gap-2">
              {[quickLinksLeft, quickLinksRight].map((group, i) => (
                <div key={i} className="space-y-2">
                  {group.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.page}
                      className="block text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              GET IN TOUCH
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <div className="text-white text-xs font-medium mb-1">Email</div>
                <a
                  href="mailto:zelquent.tech@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  zelquent.tech@gmail.com
                </a>
              </div>

              <div>
                <div className="text-white text-xs font-medium mb-1">
                  Location
                </div>
                <p className="text-gray-300">
                  Tiruppur, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Start Your Project
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Ready to build something amazing?
            </p>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#66FCF1] text-[#0B0C10] text-sm font-medium hover:bg-[#45A29E] transition-all"
            >
              Get Free Consultation
              <ArrowRight className="w-3.5 h-3.5" />
            </NavLink>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#45A29E]/20 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p className="flex items-center gap-1 text-center md:text-left">
              © {currentYear} Zelquent Tech. Crafted with
              <Heart className="w-3 h-3 text-[#66FCF1]" />
              using React & Spring Boot.
            </p>

            <div className="flex items-center gap-4">
              <span>WCAG 2.1 Compliant</span>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
});

export default Footer;