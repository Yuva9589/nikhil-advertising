'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ---------- Header par scroll karne se shadow ---------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">

        {/* Logo + Name */}
        <a href="#" className="logo" aria-label="Nikhil Advertising Home">
          <img src="/images/logo.jpg" alt="Nikhil Advertising" className="logo-img" />
          <span className="logo-text">Nikhil <span className="dot">Advertising</span></span>
        </a>

        {/* Menu */}
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li className="has-dropdown">
              <a href="#">Services <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6" /></svg></a>
              <div className="dropdown">
                <a href="#">Digital Wall Wraps</a>
<a href="#">Outdoor Branding</a>
<a href="#">Hoarding</a>
<a href="#">Billboard</a>
<a href="#">Glow Sign Board</a>
<a href="#">Sign Board</a>
<a href="#">Corporate Branding</a>
<a href="#">Retail Store Branding</a>
<a href="#">Fleet Branding</a>
<a href="#">ACP &amp; Glass Branding</a>
<a href="#">Large Format Printing</a>
<a href="#">Pan India Service</a>
              </div>
            </li>
            <li className="has-dropdown">
              <a href="#">Industries <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6" /></svg></a>
              <div className="dropdown">
                <a href="#">Real Estate &amp; Builders</a>
                <a href="#">Healthcare</a>
                <a href="#">Automotive</a>
                <a href="#">Hospitality</a>
                <a href="#">Government</a>
              </div>
            </li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>

        {/* Right side: phone + Get Quote */}
        <div className="header-actions">
          <a href="tel:+919589001822" className="phone-pill">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            <span>95890 01822</span>
          </a>
          <a href="#" className="btn btn-orange btn-sm">Get Quote</a>

          {/* Mobile hamburger */}
          <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>

      </div>
    </header>
  );
}
