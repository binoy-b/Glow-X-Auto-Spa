import logoImg from "../../assets/logo.png";
import "../Footer/Footer.css";

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer-glow-line" />
      <div className="container footer-inner">
        <div className="footer-brand">
          <button className="footer-logo-btn" onClick={() => navigate("home")}>
            <img src={logoImg} alt="Glow X AutoSpa" className="footer-logo-img" />
          </button>
          <p>Where your vehicle gets the luxury treatment it deserves. Professional detailing, premium products, flawless results.</p>
          <p className="footer-tagline">— SHINE BEYOND LIMITS —</p>
                 <div className="footer-socials">
            {/* Instagram */}
            <a href="https://www.instagram.com/glowxautospa" target="_blank" aria-label="Instagram" className="social-icon social-instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="social-icon social-facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="social-icon social-youtube">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#000"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/918078484945" target="_blank" aria-label="WhatsApp" className="social-icon social-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {["home","about","services","booking","contact"].map(p => (
              <li key={p}><button onClick={() => navigate(p)}>{p.charAt(0).toUpperCase()+p.slice(1)}</button></li>
            ))}
          </ul>
        </div>

        {/* <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {["Premium Car Wash","Foam Wash","Express Wash","Interior Spa","Detail Cleaning","Paint Protection","Detailing","Polishing","Under Body Coating"].map(s => (
              <li key={s}><span>{s}</span></li>
            ))}
          </ul>
        </div> */}

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>📍 Poovar Attupuram TVM 695506</li>
            <li>📞 +91 8078484945</li>
            <li>✉️ glowxautospa@gmail.com</li>
            <li>🕐 Mon - Sat: 8AM - 7PM Sun: 8AM - 1PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© 2026 Glow X AutoSpa — Shine Beyond Limits —</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}
