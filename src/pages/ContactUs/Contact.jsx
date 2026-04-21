import { useState } from "react";
import "./Contact.css";

const faqs = [
  { q: "How long does a full detail take?", a: "A full detail typically takes 4–5 hours. Ceramic coating may take 1–2 days depending on condition." },
  { q: "Do I need to be present during the service?", a: "No! Just drop off your car and we'll handle everything. You'll be notified when it's ready." },
  { q: "What payment methods do you accept?", a: "We accept cash, UPI, credit/debit cards, and all major digital wallets." },
  { q: "Is there a warranty on ceramic coatings?", a: "Yes, we provide a 3–5 year warranty on all ceramic coating packages." },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(null);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="label fade-up">Get In Touch</span>
          <h1 className="section-title fade-up delay-1">CONTACT<br /><span style={{color: 'var(--accent)'}}>US</span></h1>
          <p className="section-sub fade-up delay-2">Have a question or want a custom quote? We're here to help.</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-layout">
          {/* Contact Info */}
          <div className="contact-info">
            <span className="label">Reach Us</span>
            <h2 className="section-title" style={{fontSize: '2rem'}}>LET'S TALK</h2>
            <p className="section-sub" style={{marginBottom: '40px'}}>We'd love to hear from you. Drop in or reach out any time.</p>

            <div className="info-cards">
              {[
                { icon: "📍", title: "Visit Us", lines: ["Glow X Auto Spa Attupuram Uchackada PO", "Thiruvananthapuram, 695506, Kerala"] },
                { icon: "📞", title: "Call Us", lines: ["+91 8078484945", "Mon-Sat: 8AM - 7PM", "Sun: 8AM - 1PM"] },
                { icon: "✉️", title: "Email Us", lines: ["glowxautospa@gmail.com", "Reply within 2 hours"] },
              ].map((c, i) => (
                <div className="info-card card" key={i}>
                  <span className="info-icon">{c.icon}</span>
                  <div>
                    <h4>{c.title}</h4>
                    {c.lines.map((l, li) => <p key={li}>{l}</p>)}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="faq-section">
              <span className="label" style={{marginTop: '40px', display: 'block'}}>FAQ</span>
              <h3 style={{fontFamily: 'var(--font-condensed)', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px'}}>Common Questions</h3>
              {faqs.map((f, i) => (
                <div className="faq-item" key={i}>
                  <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                    <span>{f.q}</span>
                    <span className={`faq-arrow ${open === i ? 'open' : ''}`}>▾</span>
                  </button>
                  {open === i && <p className="faq-a">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form card">
            {sent ? (
              <div className="form-success">
                <div className="success-icon small">✓</div>
                <h3>MESSAGE SENT!</h3>
                <p>Thanks for reaching out, <strong>{form.name}</strong>! We'll get back to you at <strong>{form.email}</strong> within 2 hours.</p>
                <button className="btn btn-outline" style={{marginTop: '20px'}} onClick={() => { setSent(false); setForm({name:'',email:'',phone:'',subject:'',message:''}); }}>Send Another</button>
              </div>
            ) : (
              <>
                <h3 className="form-heading">Send Us a Message</h3>

                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" placeholder="John Doe" value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} />
                </div>

                <div className="form-row-contact">
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" placeholder="john@email.com" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))} />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="e.g. Custom package inquiry" value={form.subject} onChange={e => setForm(f => ({...f, subject: e.target.value}))} />
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea placeholder="Tell us how we can help..." value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))} rows={5} />
                </div>

                <button className="btn btn-primary submit-btn" onClick={handleSubmit}>
                  Send Message →
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div className="map-placeholder">
        <div className="map-overlay">
          <span>📍</span>
          <p>42 Auto Lane, Car Town · Thiruvananthapuram, Kerala</p>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-outline" style={{marginTop: '12px', fontSize: '12px'}}>
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
