import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import logoImg from "../../assets/logo.png";
import "./ComingSoon.css";

// Target launch date
const LAUNCH_DATE = new Date("2026-06-30T00:00:00Z");
 
function getTimeLeft(target) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}
 
function useCountdown(target) {
  const [time, setTime] = useState(() => getTimeLeft(target));
  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);
  return time;
}
 
export default function ComingSoon() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

const handleNotify = () => {
  if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
    setError("Please enter a valid email address.");
    return;
  }

const templateParams = {
  user_email: email,
  time: new Date().toLocaleString(),
};

  emailjs.send(
    "service_xs1yu1b",
    "template_rsq2gi3",
    templateParams,
    "uOQuTaHpcau6Ztxl3"
  )
  .then(() => {
    setSubmitted(true);
  })
  .catch(() => {
    setError("Something went wrong. Please try again.");
  });
};

  const units = [
    { label: "Days",    value: days },
    { label: "Hours",   value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <div className="cs-page">
      {/* Background layers */}
      <div className="cs-bg">
        <div className="cs-grid" />
        <div className="cs-orb cs-orb-1" />
        <div className="cs-orb cs-orb-2" />
        <div className="cs-orb cs-orb-3" />
        <div className="cs-scanline" />
      </div>

      <div className="cs-inner">

        {/* Logo */}
        <div className="cs-logo fade-up">
          <img src={logoImg} alt="Glow X AutoSpa" className="cs-logo-img" />
        </div>

        {/* Badge */}
        <div className="cs-badge fade-up delay-1">
          <span className="cs-badge-dot" />
          Something Big Is Coming
        </div>

        {/* Heading */}
        <h1 className="cs-title fade-up delay-2">
          WE'RE<br />
          <span className="cs-accent">REVAMPING</span><br />
          OUR LAUNCH
        </h1>

        <p className="cs-tagline fade-up delay-2">— Shine Beyond Limits —</p>

        <p className="cs-desc fade-up delay-3">
          Glow X AutoSpa is getting ready to roll out something extraordinary.
          Our premium auto detailing & spa experience will be available very soon.
          Stay in the loop — be the first to know when we go live.
        </p>

         {/* Countdown */}
        <div className="cs-countdown fade-up delay-3">
          {units.map((u) => (
            <div className="cs-unit" key={u.label}>
              <div className="cs-unit-box">
                <span className="cs-unit-val">
                  {String(u.value).padStart(2, "0")}
                </span>
              </div>
              <span className="cs-unit-label">{u.label}</span>
            </div>
          ))}
        </div>

        {/* Notify form */}
        <div className="cs-notify fade-up delay-4">
          {submitted ? (
            <div className="cs-notify-success">
              <span className="cs-check">✓</span>
              <p>You're on the list! We'll notify you at <strong>{email}</strong> when we launch.</p>
            </div>
          ) : (
            <>
              <p className="cs-notify-label">Get notified on launch day</p>
              <div className="cs-notify-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  className={error ? "cs-input error" : "cs-input"}
                  onKeyDown={(e) => e.key === "Enter" && handleNotify()}
                />
                <button className="btn btn-primary cs-notify-btn" onClick={handleNotify}>
                  Notify Me
                </button>
              </div>
              {error && <span className="cs-error">{error}</span>}
            </>
          )}
        </div>

        {/* Social icons */}
        <div className="cs-socials fade-up delay-5">
          <span className="cs-socials-label">Follow our journey</span>
          <div className="cs-social-links">
            <a href="https://www.instagram.com/glowxautospa" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="cs-social cs-instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/glowxautospa" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="cs-social cs-facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://wa.me/918078484945" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="cs-social cs-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Contact line */}
        <p className="cs-contact fade-up delay-5">
          Questions ? Reach us at&nbsp;
          <a href="mailto:hello@glowxautospa.com">glowxautospa@gmail.com</a>
          &nbsp;·&nbsp;
          <a href="tel:+18001234567">+91 8078484945</a>
        </p>

      </div>
    </div>
  );
}
