import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          The LEELA
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav">
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/rooms" className="nav-link">Rooms</NavLink>
          <NavLink to="/facilities" className="nav-link">Facilities</NavLink>
          <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
          <NavLink to="/location" className="nav-link">Location</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </nav>

        {/* CTA */}
        <Link to="/rooms" className="book-btn">
          Book Now
        </Link>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <NavLink onClick={() => setMenuOpen(false)} to="/">Home</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} to="/rooms">Rooms</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} to="/facilities">Facilities</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} to="/gallery">Gallery</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} to="/location">Location</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} to="/contact">Contact</NavLink>
      </div>
    </header>
  );
}
