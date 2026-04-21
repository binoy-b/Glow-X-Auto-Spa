import { useState } from "react";
import "./Booking.css";

const serviceOptions = [
  "Express Wash – ₹499",
  "Interior Detail – ₹1,299",
  "Full Detail – ₹2,499",
  "Ceramic Coating – ₹8,999",
  "Paint Correction – ₹5,499",
  "Engine Bay Clean – ₹999",
  "Custom Package",
];

const timeSlots = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
  "4:00 PM", "5:00 PM",
];

export default function Booking() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", vehicle: "",
    service: "", date: "", slot: "", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim())   e.phone = "Phone number is required";
    if (!form.vehicle.trim()) e.vehicle = "Vehicle info is required";
    if (!form.service)        e.service = "Please select a service";
    if (!form.date)           e.date = "Please select a date";
    if (!form.slot)           e.slot = "Please select a time slot";
    return e;
  };

  const handleChange = (k, v) => {
    setForm(f => ({...f, [k]: v}));
    if (errors[k]) setErrors(e => ({...e, [k]: ""}));
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="booking-page">
        <div className="booking-success">
          <div className="success-icon">✓</div>
          <h2>BOOKING CONFIRMED!</h2>
          <p>Thank you, <strong>{form.name}</strong>! Your appointment for <strong>{form.service.split('–')[0]}</strong> on <strong>{form.date}</strong> at <strong>{form.slot}</strong> has been received.</p>
          <p style={{marginTop:'8px'}}>We'll confirm via email at <strong>{form.email}</strong> within 2 hours.</p>
          <button className="btn btn-primary" style={{marginTop: '32px'}} onClick={() => setSubmitted(false)}>Make Another Booking</button>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <span className="label fade-up">Reserve Your Spot</span>
          <h1 className="section-title fade-up delay-1">PRE-BOOK<br /><span style={{color: 'var(--accent)'}}>YOUR SERVICE</span></h1>
          <p className="section-sub fade-up delay-2">Fill in the form below and we'll confirm your appointment within 2 hours.</p>
        </div>
      </section>

      <section className="booking-section section">
        <div className="container booking-layout">
          {/* Form */}
          <div className="booking-form card">
            <div className="form-section-title">
              <span className="label">Step 1</span>
              <h3>Your Details</h3>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={e => handleChange("name", e.target.value)}
                  className={errors.name ? "error" : ""}
                />
                {errors.name && <span className="err-msg">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  placeholder="john@email.com"
                  value={form.email}
                  onChange={e => handleChange("email", e.target.value)}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && <span className="err-msg">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={e => handleChange("phone", e.target.value)}
                  className={errors.phone ? "error" : ""}
                />
                {errors.phone && <span className="err-msg">{errors.phone}</span>}
              </div>
              <div className="form-group">
                <label>Vehicle Make & Model *</label>
                <input
                  type="text"
                  placeholder="e.g. Honda City 2022"
                  value={form.vehicle}
                  onChange={e => handleChange("vehicle", e.target.value)}
                  className={errors.vehicle ? "error" : ""}
                />
                {errors.vehicle && <span className="err-msg">{errors.vehicle}</span>}
              </div>
            </div>

            <div className="form-section-title" style={{marginTop: '8px'}}>
              <span className="label">Step 2</span>
              <h3>Choose Your Service</h3>
            </div>

            <div className="form-group">
              <label>Service *</label>
              <select
                value={form.service}
                onChange={e => handleChange("service", e.target.value)}
                className={errors.service ? "error" : ""}
              >
                <option value="">Select a service</option>
                {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.service && <span className="err-msg">{errors.service}</span>}
            </div>

            <div className="form-section-title" style={{marginTop: '8px'}}>
              <span className="label">Step 3</span>
              <h3>Pick Date & Time</h3>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Preferred Date *</label>
                <input
                  type="date"
                  value={form.date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={e => handleChange("date", e.target.value)}
                  className={errors.date ? "error" : ""}
                />
                {errors.date && <span className="err-msg">{errors.date}</span>}
              </div>
            </div>

            <div className="form-group">
              <label>Time Slot *</label>
              {errors.slot && <span className="err-msg" style={{display:'block',marginBottom:'6px'}}>{errors.slot}</span>}
              <div className="time-slots">
                {timeSlots.map(t => (
                  <button
                    key={t}
                    type="button"
                    className={`slot-btn ${form.slot === t ? "selected" : ""}`}
                    onClick={() => handleChange("slot", t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Special Notes (optional)</label>
              <textarea
                placeholder="Any specific concerns, add-ons, or requests..."
                value={form.notes}
                onChange={e => handleChange("notes", e.target.value)}
                rows={3}
              />
            </div>

            <button className="btn btn-red submit-btn" onClick={handleSubmit}>
              Confirm Pre-Booking →
            </button>
          </div>

          {/* Sidebar */}
          <div className="booking-sidebar">
            <div className="booking-info card">
              <h4>📍 Find Us</h4>
              <p>42 Auto Lane, Car Town<br />Thiruvananthapuram, Kerala</p>
            </div>
            <div className="booking-info card">
              <h4>🕐 Working Hours</h4>
              <ul>
                <li><span>Mon – Fri</span><span>8AM – 7PM</span></li>
                <li><span>Saturday</span><span>8AM – 6PM</span></li>
                <li><span>Sunday</span><span>10AM – 4PM</span></li>
              </ul>
            </div>
            <div className="booking-info card">
              <h4>📞 Quick Contact</h4>
              <p>+1 (800) GLOW-XXX</p>
              <p style={{marginTop:'6px'}}>hello@glowxautospa.com</p>
            </div>
            <div className="booking-note">
              <span className="label">Note</span>
              <p>Bookings are confirmed within 2 hours via email. Cancellations must be made 24 hours in advance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
