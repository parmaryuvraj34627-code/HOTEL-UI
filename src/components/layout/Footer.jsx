import { Link } from "react-router-dom";
import PhoneIcon from "../../assets/icons/Phone.svg";
import mailIcon from "../../assets/icons/mail.svg";
import locationIcon from "../../assets/icons/location.svg";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h3 className="footer-title">Hotel Riverfront</h3>
          <p className="footer-text">
            Experience comfortable and affordable stays near the river with
            modern amenities and warm hospitality.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4 className="footer-heading">Contact Us</h4>

          <div className="footer-contact">
            <img src={locationIcon} alt="Location" />
            <span>Riverfront Road, City Center, India</span>
          </div>

          <div className="footer-contact">
            <img src={PhoneIcon} alt="Phone" />
            <span>+91 98765 43210</span>
          </div>

          <div className="footer-contact">
            <img src={mailIcon} alt="Email" />
            <span>hotelriverfront@gmail.com</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Hotel Riverfront. All rights reserved.
      </div>
    </footer>
  );
}
