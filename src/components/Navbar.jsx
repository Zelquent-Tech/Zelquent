import { useState, useEffect, useRef } from 'react';
import { Menu, X, Code2, Zap } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Tech Stack', path: '/tech' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'AI Assistant', path: '/ai' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  /* ---------- Scroll Shadow Effect ---------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ---------- Close on Outside Click ---------- */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /* ---------- Close on ESC ---------- */
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  /* ---------- Lock Body Scroll ---------- */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      {/* ---------- FIXED NAVBAR ---------- */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${scrolled
          ? 'bg-[#0B0C10]/95 backdrop-blur-md shadow-lg'
          : 'bg-[#0B0C10]/90 backdrop-blur-sm'
          } border-b border-[#1F2833]`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">

            {/* ---------- Logo ---------- */}
            <NavLink
              to="/"
              className="flex items-center gap-2 group"
              aria-label="Go to homepage"
            >
              <div className="w-8 h-8 rounded-lg bg-[#66FCF1]/10 border border-[#66FCF1]/30 flex items-center justify-center group-hover:border-[#66FCF1] group-hover:bg-[#66FCF1]/20 transition-all">
                <Code2 className="w-4 h-4 text-[#66FCF1]" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Zelquent<span className="text-[#66FCF1]">Tech</span>
              </span>
            </NavLink>

            {/* ---------- Desktop Navigation ---------- */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-[#66FCF1] focus:ring-offset-2 focus:ring-offset-[#0B0C10] ${isActive
                      ? 'text-[#66FCF1] bg-[#66FCF1]/10 font-medium'
                      : 'text-[#C5C6C7] hover:text-[#66FCF1] hover:bg-[#1F2833]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* ---------- Right Section ---------- */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-[#66FCF1] text-[#0B0C10] hover:bg-[#45A29E] transition-all">
                <Zap className="w-3.5 h-3.5" />
                Hire Us
              </button>

              {/* Mobile Toggle */}
              <button
                ref={buttonRef}
                className="lg:hidden text-[#C5C6C7] hover:text-[#66FCF1] p-2 rounded-lg"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                {menuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ---------- MOBILE MENU ---------- */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`lg:hidden fixed inset-x-0 top-16 z-40 bg-[#0B0C10] border-t border-[#1F2833] transition-all duration-300 ${menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0 pointer-events-none"
            }`}
        >
          <div className="px-4 py-4 flex flex-col gap-1">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-sm transition-all ${isActive
                    ? "text-[#66FCF1] bg-[#66FCF1]/10 font-medium"
                    : "text-[#C5C6C7] hover:text-[#66FCF1] hover:bg-[#1F2833]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* 🔥 Proper Mobile CTA */}
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/contact");
              }}
              className="mt-4 w-full flex items-center justify-center gap-2 
      px-4 py-3 rounded-lg text-sm font-semibold 
      bg-[#66FCF1] text-[#0B0C10] 
      hover:bg-[#45A29E] transition-all"
            >
              <Zap className="w-4 h-4" />
              Hire Us
            </button>

          </div>
        </div>
      </nav>

      {/* ---------- HEIGHT RESERVER ---------- */}
      <div className="h-16" />
    </>
  );
}