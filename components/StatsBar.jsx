'use client';

import { useEffect, useRef, useState } from 'react';

/* =========================================================
   STATS — numbers yahan se badlo
   value = number, suffix = aage ka sign (+, M+, %)
   ========================================================= */
const stats = [
  {
    value: 450,
    decimals: 0,
    suffix: '+',
    label: 'Projects Completed',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
    ),
  },
  {
    value: 1.8,
    decimals: 1,
    suffix: 'M+',
    label: 'Sq. Ft. Printed',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" /></svg>
    ),
  },
  {
    value: 25,
    decimals: 0,
    suffix: '+',
    label: 'Cities Covered',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
    ),
  },
  {
    value: 98,
    decimals: 0,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
    ),
  },
];

/* Number ko 0 se target tak animate karta hai (screen par aane par) */
function Counter({ value, decimals, suffix }) {
  const [display, setDisplay] = useState((0).toFixed(decimals));
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1600;
            const start = performance.now();
            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay((value * eased).toFixed(decimals));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, decimals]);

  return (
    <strong ref={ref}>
      {display}
      {suffix}
    </strong>
  );
}

export default function StatsBar() {
  return (
    /* ================= PART 3: STATS BAR ================= */
    <section className="stats-wrap">
      <div className="container">
        <div className="stats-card">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat-icon">{stat.icon}</span>
              <div>
                <Counter
                  value={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}