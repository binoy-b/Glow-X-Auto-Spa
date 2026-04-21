import { useState } from "react";
import logoImg from "../../assets/logo.png";
import "../Navbar/Navbar.css";

const links = [
  { id: "home",     label: "Home" },
  { id: "about",    label: "About Us" },
  { id: "services", label: "Our Services" },
  { id: "booking",  label: "Book Now" },
  { id: "contact",  label: "Contact Us" },
];

export default function Navbar({ navigate, currentPage }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-inner container">
      <button className="nav-logo" onClick={() => navigate("home")}>
          <span className="logo-glow">GLOW</span>
          <span className="logo-x">X</span>
          <span className="logo-sub">AUTO SPA</span>
        </button>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.id}>
              <button
                className={`nav-link ${currentPage === l.id ? "active" : ""} ${l.id === "booking" ? "nav-cta" : ""}`}
                onClick={() => { navigate(l.id); setOpen(false); }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={`bar ${open ? "open" : ""}`} />
          <span className={`bar ${open ? "open" : ""}`} />
          <span className={`bar ${open ? "open" : ""}`} />
        </button>
      </div>
    </nav>
  );
}
