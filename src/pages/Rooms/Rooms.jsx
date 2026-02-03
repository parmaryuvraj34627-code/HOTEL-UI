import PageTitle from "../../components/common/PageTitle";
import RoomCard from "../../components/common/RoomCard";
import { rooms } from "../../data/roomsData";
import "./rooms.css";

export default function Rooms() {
  return (
    <main className="rooms-page">
      {/* Page Title */}
      <PageTitle
        title="Our Rooms"
        subtitle="Choose from our comfortable and affordable room options"
      />

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
    </main>
  );
}
