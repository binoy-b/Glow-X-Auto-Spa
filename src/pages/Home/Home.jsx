import logoImg from "../../assets/logo.png";
import "./Home.css";

const stats = [
  { val: "8K+",  label: "Cars Detailed" },
  { val: "4.9★", label: "Average Rating" },
  { val: "12+",  label: "Pro Technicians" },
  { val: "100%", label: "Satisfaction Rate" },
];

const features = [
  { icon: "✦", title: "Premium Products",  desc: "Only the finest ceramic-grade solutions used on every vehicle, every time." },
  { icon: "⚡", title: "Express Service",   desc: "Quick turnaround without compromising on quality, detail, or finish." },
  { icon: "🛡", title: "Paint Protection",  desc: "Industry-leading coatings that safeguard your vehicle's finish for years." },
  { icon: "♻", title: "Eco Friendly",      desc: "Water-efficient processes that care for your car and the planet." },
];

export default function Home({ navigate }) {
  return (
    <div className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-orb orb-1" />
          <div className="hero-orb orb-2" />
          <div className="hero-orb orb-3" />
        </div>

        <div className="container hero-layout">

          {/* LEFT — text */}
          <div className="hero-content">
            <h1 className="hero-title fade-up delay-1">
              YOUR VEHICLE<br />
              <span className="hero-accent">DESERVES</span><br />
              THE GLOW
            </h1>

            <span className="hero-tagline fade-up delay-2">— Shine Beyond Limits —</span>

            <p className="hero-desc fade-up delay-3">
              Premium auto detailing & spa services that restore brilliance,
              protect your investment, and make every drive feel brand new.
            </p>

            <div className="hero-actions fade-up delay-4">
              <button className="btn btn-primary" onClick={() => navigate("booking")}>
                Book Your Appointment →
              </button>
              <button className="btn btn-outline" onClick={() => navigate("services")}>
                Explore Services
              </button>
            </div>
          </div>

          {/* RIGHT — logo */}
          <div className="hero-logo-col fade-up delay-2">
            <img src={logoImg} alt="Glow X AutoSpa" className="hero-logo-side" />
          </div>

        </div>
      </section>

      {/* Stats */}
      {/* <section className="stats-bar">
        <div className="container stats-inner">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-val">{s.val}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section> */}

      {/* Features */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <span className="label">Why Choose Us</span>
            <h2 className="section-title">THE GLOW X<br />DIFFERENCE</h2>
            <p className="section-sub">We treat every vehicle as a masterpiece — with precision, passion, and premium care.</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card card" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <span className="label">Limited Slots Daily</span>
            <h2 className="section-title">READY TO SHINE ?</h2>
            <p className="section-sub">Secure your spot today and experience the Glow X standard.</p>
          </div>
          <div className="cta-band-actions">
            <button className="btn btn-red" onClick={() => navigate("booking")}>Pre-Book Now</button>
            <button className="btn btn-outline" onClick={() => navigate("contact")}>Contact Us</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="section testimonials-section">
        <div className="container">
          <span className="label">Customer Love</span>
          <h2 className="section-title">WHAT THEY SAY</h2>
          <div className="testimonials-grid">
            {[
              { name: "Rahul M.",  car: "BMW 3 Series", text: "Absolutely blown away. My car looks better than the day I bought it. The ceramic coating is flawless.", stars: 5 },
              { name: "Priya S.",  car: "Honda CR-V",   text: "Quick, professional, and the result was stunning. Booked the full detail package — worth every rupee!", stars: 5 },
              { name: "James T.",  car: "Audi A6",      text: "The interior detailing was surgical. Not a speck of dust left behind. Glow X is now my go-to.", stars: 5 },
            ].map((t, i) => (
              <div className="testimonial-card card" key={i}>
                <div className="stars">{"★".repeat(t.stars)}</div>
                <p className="test-text">"{t.text}"</p>
                <div className="test-author">
                  <div className="test-avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.car}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

    </div>
  );
}
