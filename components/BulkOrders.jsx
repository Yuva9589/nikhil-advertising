/* =========================================================
   BULK ORDERS — "Need Branding At Scale?"
   ========================================================= */
const points = [
  'Multi-location rollouts — 5 to 500+ stores',
  'Fleet & vehicle branding at scale',
  'Bulk hoarding & billboard campaigns',
  'Dedicated project manager + on-time guarantee',
];

export default function BulkOrders() {
  return (
    /* ================= PART 8: BULK ORDERS ================= */
    <section className="bulk-premium">
      <div className="container bulk-inner">
        <div className="bulk-content">
          <p className="eyebrow">For Big Budgets</p>
          <h2>
            Need Branding <span className="accent">At Scale?</span>
          </h2>

          <p className="bulk-sub">
            Retail chains, hospitals, schools, corporate offices aur fleet
            brands — jab bhi volume zyada ho, humein call karo. Bulk orders par
            special pricing aur faster turnaround.
          </p>

          <ul className="bulk-list">
            {points.map((point) => (
              <li key={point}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                {point}
              </li>
            ))}
          </ul>

          <a href="tel:+919589001822" className="btn btn-orange">
            Get Bulk Quote
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </a>
        </div>

        <div className="bulk-visual">
          <img src="/images/printer.jpg" alt="Large Format Printing" loading="lazy" />
          <div className="bulk-chip">
            <strong>50,000+ sq.ft</strong>
            <span>Single Project Capacity</span>
          </div>
        </div>
      </div>
    </section>
  );
}