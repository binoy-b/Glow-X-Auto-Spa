import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import Services from "./pages/Services/Services";
import Booking from "./pages/Booking/Booking";
import Contact from "./pages/ContactUs/Contact";
import Footer from "./components/Footer/Footer";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import "./App.css";

export default function App() {
  // Set to "coming-soon" to show that page first,
  // or "home" to go straight to the main site.
  const [page, setPage] = useState("coming-soon");
  // const [page, setPage] = useState("home");

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Coming Soon page: full screen, no Navbar/Footer
  if (page === "coming-soon") {
    return <ComingSoon navigate={navigate} />;
  }

  return (
    <div className="app">
      <Navbar navigate={navigate} currentPage={page} />
      <main>
        {page === "home"     && <Home navigate={navigate} />}
        {page === "about"    && <About navigate={navigate} />}
        {page === "services" && <Services navigate={navigate} />}
        {page === "booking"  && <Booking />}
        {page === "contact"  && <Contact />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}