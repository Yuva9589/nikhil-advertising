/* =========================================================
   TESTIMONIALS — 5 client reviews
   ========================================================= */
const testimonials = [
  {
    quote:
      '14 stores ka branding sirf 3 hafte mein ho gaya. Wall wraps ki quality top class hai — har store ab premium lagta hai.',
    initials: 'RM',
    name: 'Rajesh Malviya',
    role: 'Owner, Shree Sai Pharmacy Chain — Indore',
  },
  {
    quote:
      'Design se lekar installation tak pura process smooth tha. Naya storefront branding hote hi footfall clearly badhi hai.',
    initials: 'PS',
    name: 'Priya Sharma',
    role: 'Marketing Head, UrbanKart Retail — Indore',
  },
  {
    quote:
      'Hospital signage aur wayfinding professional tareeke se kiya. Saaf kaam, time par, bilkul bhi koi dikkat nahi.',
    initials: 'AV',
    name: 'Dr. Amit Verma',
    role: 'Director, CarePlus Hospitals — Bhopal',
  },
  {
    quote:
      'School branding mein bachchon ke liye suitable design chahiye tha — unhone brief bilkul sahi samjha. Sabko pasand aaya.',
    initials: 'SA',
    name: 'Suresh Agarwal',
    role: 'Founder, TechNova Edustation — Indore',
  },
  {
    quote:
      '2 cities mein 3 gym locations, sab same identity ke saath branded. Har jagah consistent quality. Bulk orders ke liye best.',
    initials: 'NK',
    name: 'Neha Kulkarni',
    role: 'Brand Manager, FitZone Gyms — Mumbai',
  },
];

const star = (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
);

export default function Testimonials() {
  return (
    /* ================= PART 9: TESTIMONIALS ================= */
    <section className="testimonials-premium">
      <div className="container">
        <p className="eyebrow">Client Reviews</p>
        <h2>
          What Our <span className="accent">Clients</span> Say
        </h2>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.name}>
              <div className="testimonial-stars">
                {star}
                {star}
                {star}
                {star}
                {star}
              </div>
              <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
              <div className="testimonial-person">
                <span className="testimonial-avatar">{item.initials}</span>
                <span>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}