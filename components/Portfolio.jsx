/* =========================================================
   PORTFOLIO — apni photos daalni ho to public/images/ mein
   wahi filenames par replace kar do:
   corporate.jpg, retail.jpg, school.jpg, factory.jpg,
   hospital.jpg, building-wrap.jpg
   ========================================================= */
const projects = [
  { img: '/images/corporate.jpg', title: 'Corporate Office Branding' },
  { img: '/images/retail.jpg', title: 'Retail Store Branding' },
  { img: '/images/school.jpg', title: 'School Wall Branding' },
  { img: '/images/factory.jpg', title: 'Factory Branding' },
  { img: '/images/hospital.jpg', title: 'Hospital Branding' },
  { img: '/images/building-wrap.jpg', title: 'Building Wraps' },
];

export default function Portfolio() {
  return (
    /* ================= PART 6: PORTFOLIO ================= */
    <section className="portfolio-premium">
      <div className="container">
        <div className="portfolio-head">
          <div>
            <p className="eyebrow">Our Work</p>
            <h2>
              Brands We Have <span className="accent">Transformed</span>
            </h2>
          </div>
          <a href="#" className="btn btn-outline-red">
            View Full Portfolio
          </a>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <figure className="portfolio-card" key={project.title}>
              <img src={project.img} alt={project.title} loading="lazy" />
              <figcaption>{project.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}