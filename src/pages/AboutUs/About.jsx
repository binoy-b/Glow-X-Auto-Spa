import "./About.css";

const values = [
  { icon: "◈", title: "Precision", desc: "Every surface, every seam, every detail gets our full attention." },
  { icon: "◉", title: "Integrity", desc: "Honest pricing, transparent service, no hidden fees — ever." },
  { icon: "◫", title: "Innovation", desc: "We use the latest techniques and professional-grade products." },
  { icon: "◬", title: "Passion", desc: "We love cars. That love shows in everything we do." },
];

export default function About({ navigate }) {
  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="label fade-up">Our Story</span>
          <h1 className="section-title fade-up delay-1">ABOUT<br /><span style={{color: 'var(--accent)'}}>GLOW <span className="section-title-x ">X</span></span></h1>
          <p className="section-sub fade-up delay-2">
            Born from a love of vehicles and a relentless pursuit of perfection, Glow X Auto Spa is where passion meets professionalism.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section story-section">
        <div className="container story-grid">
          <div className="story-visual">
            <div className="story-img-box">
              <div className="story-img-placeholder">
                <span>EST.</span>
                <strong>2025</strong>
                <span>Auto Spa</span>
              </div>
              <div className="story-img-badge">
                <strong>4.9</strong>
                <span>★ Rating</span>
              </div>
            </div>
          </div>

          <div className="story-text">
            <span className="label">The Beginning</span>
            <span className="accent-line" />
            <h2 className="section-title">WE STARTED<br />WITH A VISION</h2>
            <p>
              In 2025, two friends opened Glow X with one mission: to give every vehicle the care it deserves.
              What started as a one-bay garage in downtown has grown into a premier auto spa facility
              trusted by thousands of vehicle owners across the region.
            </p>
            <p style={{marginTop: '18px'}}>
              We combine old-school craftsmanship with modern detailing science — from hand-polished paintwork
              to nano-ceramic coatings — delivering results that simply speak for themselves.
            </p>
            <button className="btn btn-primary" style={{marginTop: '32px'}} onClick={() => navigate("booking")}>
              Book a Session →
            </button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header" style={{textAlign: 'center', marginBottom: '56px'}}>
            <span className="label">What We Stand For</span>
            <h2 className="section-title">OUR CORE VALUES</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card card" key={i}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container" style={{textAlign: 'center'}}>
          <span className="label">Join the Family</span>
          <h2 className="section-title">READY TO EXPERIENCE<br />THE DIFFERENCE?</h2>
          <div style={{display: 'flex', gap: '14px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap'}}>
            <button className="btn btn-primary" onClick={() => navigate("booking")}>Book Now</button>
            <button className="btn btn-outline" onClick={() => navigate("services")}>View Services</button>
          </div>
        </div>
      </section>
    </div>
  );
}
