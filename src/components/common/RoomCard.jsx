import { Link } from "react-router-dom";
import Button from "./Button";
import "./roomCard.css";

export default function RoomCard({ room }) {
  if (!room) return null;

  const { id, name, price, image, description } = room;

  return (
    <article className="room-card">
      {/* Image */}
      <div className="room-card-image">
        <img src={image} alt={name} loading="lazy" />
      </div>

      {/* Content */}
      <div className="room-card-content">
        <h3 className="room-card-title">{name}</h3>

        {description && (
          <p className="room-card-desc">
            {description.slice(0, 80)}...
          </p>
        )}

        <div className="room-card-footer">
          <span className="room-card-price">
            ₹{price} <small>/ night</small>
          </span>

          <Link to={`/rooms/${id}`}>
            <Button variant="primary">View Details</Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
