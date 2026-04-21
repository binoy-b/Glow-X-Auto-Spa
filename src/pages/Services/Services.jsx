import "./Services.css";

const services = [
  {
    name: "Express Wash",
    tag: "Quick & Clean",
    price: "₹499",
    duration: "30 min",
    desc: "Full exterior rinse, foam wash, hand-dry, and tire dressing. Perfect for a quick refresh.",
    features: ["Exterior hand wash", "Foam pre-soak", "Wheel & tire clean", "Window wipe-down", "Air freshener"],
    accent: "var(--accent)",
    popular: false,
  },
  {
    name: "Interior Detail",
    tag: "Deep Clean Inside",
    price: "₹1,299",
    duration: "2–3 hrs",
    desc: "Complete interior deep-clean: vacuuming, upholstery shampoo, dashboard polish, and odor elimination.",
    features: ["Full vacuum", "Seat shampoo", "Dashboard detail", "Door panel wipe", "Odor treatment", "Glass clean"],
    accent: "var(--gold)",
    popular: false,
  },
  {
    name: "Full Detail",
    tag: "Most Popular",
    price: "₹2,499",
    duration: "4–5 hrs",
    desc: "Our signature service — exterior + interior in full detail, leaving your car showroom-ready.",
    features: ["Express Wash included", "Full interior detail", "Paint decontamination", "Clay bar treatment", "Tyre dressing", "Engine bay clean", "Final inspection"],
    accent: "var(--accent)",
    popular: true,
  },
  {
    name: "Ceramic Coating",
    tag: "Long-Term Protection",
    price: "₹8,999",
    duration: "1–2 days",
    desc: "Professional-grade nano-ceramic coating that protects your paint from UV, scratches, and contaminants for years.",
    features: ["Paint correction", "Surface decontamination", "Nano-ceramic application", "3–5 year protection", "Hydrophobic finish", "UV resistance", "Warranty included"],
    accent: "#c084fc",
    popular: false,
  },
  {
    name: "Paint Correction",
    tag: "Swirl Removal",
    price: "₹5,499",
    duration: "6–8 hrs",
    desc: "Multi-stage machine polishing to remove swirls, scratches, water spots, and oxidation from your paint.",
    features: ["Stage 1 compound", "Stage 2 polish", "Swirl removal", "Light scratch removal", "Paint enhancement", "Gloss maximization"],
    accent: "var(--red)",
    popular: false,
  },
  {
    name: "Engine Bay",
    tag: "Under the Hood",
    price: "₹999",
    duration: "1.5 hrs",
    desc: "Safe and thorough engine bay degreasing, cleaning, and dressing to keep everything looking factory-fresh.",
    features: ["Degreasing", "Rinse & dry", "Plastic dressing", "Rubber seal protection", "Final inspection"],
    accent: "var(--gold)",
    popular: false,
  },
];

export default function Services({ navigate }) {
  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="label fade-up">What We Offer</span>
          <h1 className="section-title fade-up delay-1">OUR<br /><span style={{color: 'var(--accent)'}}>SERVICES</span></h1>
          <p className="section-sub fade-up delay-2">From a quick express wash to a full ceramic shield — we have a service for every need and every budget.</p>
        </div>
      </section>

      <section className="section services-list-section">
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <div className={`service-card card ${s.popular ? 'service-popular' : ''}`} key={i}
                   style={{'--svc-accent': s.accent}}>
                {s.popular && <div className="popular-badge">MOST POPULAR</div>}
                <div className="svc-header">
                  <div>
                    <span className="svc-tag">{s.tag}</span>
                    <h3 className="svc-name">{s.name}</h3>
                  </div>
                  <div className="svc-price-block">
                    <span className="svc-price">{s.price}</span>
                    <span className="svc-duration">{s.duration}</span>
                  </div>
                </div>
                <p className="svc-desc">{s.desc}</p>
                <ul className="svc-features">
                  {s.features.map((f, fi) => (
                    <li key={fi}><span className="check">✓</span> {f}</li>
                  ))}
                </ul>
                <button className="btn btn-primary svc-btn" onClick={() => navigate("booking")}>
                  Book This →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-note">
        <div className="container" style={{textAlign: 'center'}}>
          <span className="label">Need Something Custom?</span>
          <h2 className="section-title">CAN'T FIND WHAT<br />YOU'RE LOOKING FOR?</h2>
          <p className="section-sub" style={{margin: '0 auto 32px', textAlign: 'center'}}>
            Contact us for custom packages tailored to your vehicle's specific needs.
          </p>
          <div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <button className="btn btn-gold" onClick={() => navigate("contact")}>Get a Custom Quote</button>
            <button className="btn btn-outline" onClick={() => navigate("booking")}>Standard Booking</button>
          </div>
        </div>
      </section>
    </div>
  );
}
