import PageTitle from "../../components/common/PageTitle";
import Button from "../../components/common/Button";
import "./contact.css";

export default function Contact() {
  return (
    <main className="contact-page">
      {/* Page Title */}
      <PageTitle
        title="Contact Us"
        subtitle="We’d love to hear from you. Get in touch for bookings or inquiries."
      />

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container contact-grid">
          
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Hotel Riverfront</h2>
            <p>Riverfront Road, City Center, India</p>
            <p>Phone: +91 98765 43210</p>
            <p>Email: hotelriverfront@gmail.com</p>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form
              action="#"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted! (demo only)");
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>

              <Button type="submit">Send Message</Button>
            </form>
          </div>

        </div>

        {/* Map */}
        <div className="contact-map">
          <iframe
            title="Hotel Riverfront Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31577.123456!2d72.123456!3d21.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c123456!2sHotel+Riverfront!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </section>
    </main>
  );
}
