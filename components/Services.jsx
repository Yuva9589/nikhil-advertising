/* =========================================================
   SERVICES — naya service add karna ho to ye list badlo
   ========================================================= */
const services = [
  {
    name: 'Digital Wall Wraps',
    desc: 'High quality wall wraps for interior & exterior spaces',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>
    ),
  },
  {
    name: 'Outdoor Branding',
    desc: 'Hoardings, uniplex, kiosks & outdoor advertising',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21v-4" /><path d="M16 21v-4" /></svg>
    ),
  },
  {
    name: 'Hoarding',
    desc: 'Big hoarding prints for maximum visibility',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="11" rx="1" /><path d="M6 21v-5" /><path d="M18 21v-5" /><path d="M7 9h6" /><path d="M7 12h4" /></svg>
    ),
  },
  {
    name: 'Billboard',
    desc: 'High impact billboard branding',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="10" rx="1" /><path d="M12 13v8" /><path d="M8 21h8" /></svg>
    ),
  },
  {
    name: 'Glow Sign Board',
    desc: 'Neon & glow signage for night visibility',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2z" /></svg>
    ),
  },
  {
    name: 'Sign Board',
    desc: 'Premium sign boards for your business',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41 12 22l-8.59-8.59A2 2 0 0 1 3 12V4a1 1 0 0 1 1-1h8a2 2 0 0 1 1.41.59l7.18 7.18a2 2 0 0 1 0 2.64z" /><circle cx="7.5" cy="7.5" r="1" /></svg>
    ),
  },
  {
    name: 'Corporate Branding',
    desc: 'Office, showroom, factory & warehouse branding',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-4h6v4" /></svg>
    ),
  },
  {
    name: 'Retail Store Branding',
    desc: 'Storefronts, interiors, displays & retail signage',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l1.5-5h15L21 9" /><path d="M3 9h18v11H3z" /><path d="M7 20v-6h10v6" /></svg>
    ),
  },
  {
    name: 'Fleet Branding',
    desc: 'Vehicle wraps, fleet graphics & branding',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></svg>
    ),
  },
  {
    name: 'ACP & Glass Branding',
    desc: 'ACP signs, glass graphics & frosting solutions',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M4 8h16" /><path d="M8 12h8" /><path d="M8 16h5" /></svg>
    ),
  },
  {
    name: 'Large Format Printing',
    desc: 'Flex, vinyl, fabric & UV printing for all needs',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" rx="1" /></svg>
    ),
  },
  {
    name: 'Pan India Service',
    desc: 'Installation & service across all of India',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
    ),
  },
];

export default function Services() {
  return (
    /* ================= PART 4: SERVICES ================= */
    <section className="services-premium">
      <div className="container">
        <div className="services-head">
          <div>
            <p className="eyebrow">Our Services</p>
            <h2>
              Complete Branding Solutions<br />
              <span className="accent">Under One Roof</span>
            </h2>
          </div>
          <a href="#" className="btn btn-outline-red">
            Explore All Services
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </a>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <div className="service-card" key={service.name}>
              <span className="service-icon">{service.icon}</span>
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}