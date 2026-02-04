import PageTitle from "../../components/common/PageTitle";
import RoomCard from "../../components/common/RoomCard";
import { rooms } from "../../data/roomsData";
import "./Rooms.css";

export default function Rooms() {
  return (
    <main className="rooms-page">
      {/* Page Title */}
      <PageTitle
        title="Our Rooms"
        subtitle="Choose from our comfortable and affordable room options"
      />

      {/* Simple Rooms Intro (from basic component) */}
      <section className="rooms-container">
        <h1>Our Rooms</h1>
      </section>

      {/* Rooms List */}
      <section className="rooms-section">
        <div className="container">
          <div className="rooms-grid">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Static Example Cards (optional / demo) */}
      <section className="rooms-container">
        <div className="room-card">
          <h2>Deluxe Room</h2>
          <p>Comfortable room with sea view</p>
        </div>

        <div className="room-card">
          <h2>Standard Room</h2>
          <p>Perfect for short stays</p>
        </div>
      </section>
    </main>
  );
}
