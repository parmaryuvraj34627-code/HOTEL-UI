import { useParams, Link } from "react-router-dom";
import PageTitle from "../../components/common/PageTitle";
import Button from "../../components/common/Button";
import Modal from "../../components/ui/Modal";
import { rooms } from "../../data/roomsData";
import { useState } from "react";
import "./RoomDetails.css";

export default function RoomDetails() {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === Number(id));
  const [open, setOpen] = useState(false);

  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
  });

  if (!room) {
    // Fallback for room not found
    return (
      <main className="room-details-page">
        <PageTitle title="Room Not Found" />
        <div className="container">
          <p>Sorry, the requested room does not exist.</p>

          {/* Static fallback example from simpler component */}
          <div className="room-details">
            <h1>Room Details</h1>
            <div className="room-info">
              <h2>Deluxe Room</h2>
              <p>Spacious room with AC, WiFi, and balcony.</p>
              <p>Price: $120 / night</p>
            </div>
          </div>

          <Link to="/rooms">
            <Button>Back to Rooms</Button>
          </Link>
        </div>
      </main>
    );
  }

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", bookingData);
    alert("Booking request submitted!");
    setOpen(false);
  };

  return (
    <main className="room-details-page">
      <PageTitle
        title={room.name}
        subtitle="Comfort, convenience, and quality stay"
      />

      <section className="room-details-section">
        <div className="container room-details-grid">

          {/* Room Image */}
          <div className="room-details-image">
            <img src={room.image} alt={room.name} />
          </div>

          {/* Room Info */}
          <div className="room-details-info">
            <h2>{room.name}</h2>
            <p className="room-details-desc">{room.description}</p>
            <p className="room-details-price">
              ₹{room.price} <span>/ night</span>
            </p>

            <div className="room-details-actions">
              <Button onClick={() => setOpen(true)}>Book This Room</Button>
              <Link to="/rooms">
                <Button variant="outline">Back to Rooms</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Book This Room">
        <form className="booking-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input
              type="text"
              name="name"
              required
              value={bookingData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              required
              value={bookingData.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Check-in Date
            <input
              type="date"
              name="checkIn"
              required
              value={bookingData.checkIn}
              onChange={handleChange}
            />
          </label>

          <label>
            Check-out Date
            <input
              type="date"
              name="checkOut"
              required
              value={bookingData.checkOut}
              onChange={handleChange}
            />
          </label>

          <Button type="submit">Confirm Booking</Button>
        </form>
      </Modal>
    </main>
  );
}
