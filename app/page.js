import Header from '../components/Header';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import Services from '../components/Services';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import BulkOrders from '../components/BulkOrders';
import Testimonials from '../components/Testimonials';
import CtaFooter from '../components/CtaFooter';

export default function Home() {
  return (
    <>
      {/* ================= PART 1: HEADER / NAVBAR ================= */}
      <Header />

      {/* ================= PART 2: HERO (IMAGE) ================= */}
      <Hero />

      {/* ================= PART 3: STATS BAR ================= */}
      <StatsBar />

      {/* ================= PART 4: SERVICES ================= */}
      <Services />

      {/* ================= PART 5: HOW WE WORK ================= */}
      <Process />

      {/* ================= PART 6: PORTFOLIO ================= */}
      <Portfolio />

      {/* ================= PART 8: BULK ORDERS ================= */}
      <BulkOrders />

      {/* ================= PART 9: TESTIMONIALS ================= */}
      <Testimonials />

      {/* ================= PART 10: CTA + FOOTER (FINAL) ================= */}
      <CtaFooter />
    </>
  );
}