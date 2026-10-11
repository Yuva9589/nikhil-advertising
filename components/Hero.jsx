'use client';

import { useEffect, useState } from 'react';

/* =========================================================
   HERO VIDEO SLIDESHOW
   Apni videos public/videos/ folder mein daalo:
   video1.mp4, video2.mp4, video3.mp4, video4.mp4, video5.mp4
   Videos kam hain to niche ki extra lines hata do
   (kam se kam 1 video honi chahiye).
   ========================================================= */
const heroVideos = [
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/video3.mp4',
  '/videos/video4.mp4',
  '/videos/video5.mp4',
];

const VIDEO_TIME = 6000; // 6 second baad agla video chalega

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % heroVideos.length);
    }, VIDEO_TIME);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <>
      {/* ================= PART 2: HERO SECTION (VIDEO) ================= */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <p className="eyebrow">India's Trusted Partner For — Pan India Service Available</p>
            <h1>
              Digital Wall Wraps &amp;<br />
              <span className="accent">Outdoor Branding</span><br />
              Solutions
            </h1>

            <ul className="hero-checks">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                Premium Quality
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                Bulk Orders
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                Pan India Service
              </li>
            </ul>

            <p className="hero-sub">
              From concept to installation — we deliver high-impact branding
              solutions that make your brand visible everywhere.
            </p>

            <div className="hero-buttons">
              <a href="#" className="btn btn-orange">
                Get Bulk Quote
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
              <a href="#" className="btn btn-ghost">
                View Our Work
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m10 8 6 4-6 4z" /></svg>
              </a>
            </div>
          </div>

          {/* HERO VIDEO (right side) — ek-ek karke chalega */}
          <div className="hero-visual">
            <video
              key={activeIndex}
              src={heroVideos[activeIndex]}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="hero-dots">
              {heroVideos.map((video, i) => (
                <button
                  key={video}
                  className={`hero-dot ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Video ${i + 1} chalao`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Red badge */}
        <div className="hero-badge">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.5 5 5 8.6 5 13a7 7 0 0 0 14 0c0-4.4-3.5-8-7-11z" /><circle cx="12" cy="13" r="3" fill="#0b0f14" /></svg>
          <span>Serving Clients<br /><strong>Across India</strong></span>
        </div>
      </section>

      {/* Floating quick actions (WhatsApp + Call) */}
      <div className="float-actions">
        <a href="https://wa.me/919589001822" className="float-btn wa" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.483-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
        </a>
        <a href="tel:+919589001822" className="float-btn call" aria-label="Call">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
        </a>
      </div>
    </>
  );
}