import ImageSlider from "../../components/ui/ImageSlider";
import RoomCard from "../../components/common/RoomCard";
import Button from "../../components/common/Button";
import { rooms } from "../../data/roomsData";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const sliderImages = [
    "/images/hero.jpg",
    "/images/hotel-front.jpg",
    "/images/room-deluxe.jpg"
  ];

  return (
    <main className="home-page">
      {/* Simple Home Intro */}
      <section className="home">
        <h1>Home Page</h1>
        <p>Welcome to the home page</p>
      </section>

      {/* Hero Slider */}
      <section className="home-hero">
        <ImageSlider images={sliderImages} />
      </section>

      {/* About Section */}
      <section className="home-about">
        <div className="container">
          <h2>Welcome to Hotel Riverfront</h2>
          <p>
            Located near the serene riverfront, our hotel offers clean,
            comfortable rooms, modern facilities, and warm hospitality
            for business and leisure travelers.
          </p>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="home-rooms">
        <div className="container">
          <div className="section-header">
            <h2>Our Rooms</h2>
            <Link to="/rooms" className="view-all">
              View All Rooms →
            </Link>
          </div>

          <div className="rooms-grid">
            {rooms.slice(0, 3).map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="home-cta">
        <h2>Ready to Book Your Stay?</h2>
        <Link to="/contact">
          <Button>Contact Us</Button>
        </Link>
      </section>
    </main>
  );
}
