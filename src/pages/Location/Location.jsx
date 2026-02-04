import React from "react";
import PageTitle from "../../components/common/PageTitle";
import "./Location.css";

export default function Location() {
  const hasMap = true; // Change to false if you want to show placeholder

  return (
    <main className="location-page">
      {/* Page Title */}
      <PageTitle
        title="Our Location"
        subtitle="Find us at the riverfront, city center, India"
      />

      {hasMap ? (
        // Full Map Layout
        <section className="location-section">
          <div className="container location-content">
            
            {/* Address Info */}
            <div className="location-info">
              <h2>Hotel Riverfront</h2>
              <p>Riverfront Road, City Center, India</p>
              <p>Phone: +91 98765 43210</p>
              <p>Email: hotelriverfront@gmail.com</p>
            </div>

            {/* Map Embed */}
            <div className="location-map">
              <iframe
                title="Hotel Riverfront Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31577.123456!2d72.123456!3d21.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c123456!2sHotel+Riverfront!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </section>
      ) : (
        // Placeholder Layout
        <div className="location-container">
          <h1>Our Location</h1>
          <p>We are located in the heart of the city.</p>
          <div className="map-placeholder">
            <p>Map would go here</p>
          </div>
        </div>
      )}
    </main>
  );
}
