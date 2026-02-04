import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./RoomCard.css";

export default function RoomCard({ room, title, description }) {
  // If room object is provided, use its data; otherwise fallback to title/description
  const cardTitle = room ? room.name : title;
  const cardDesc = room ? room.description : description;
  const cardPrice = room ? room.price : null;
  const cardImage = room ? room.image : null;
  const cardId = room ? room.id : null;

  return (
    <article className="room-card">
      {/* Image */}
      {cardImage && (
        <div className="room-card-image">
          <img src={cardImage} alt={cardTitle} loading="lazy" />
        </div>
      )}

      {/* Content */}
      <div className="room-card-content">
        <h3 className="room-card-title">{cardTitle}</h3>

        {cardDesc && (
          <p className="room-card-desc">
            {cardDesc.length > 80 ? `${cardDesc.slice(0, 80)}...` : cardDesc}
          </p>
        )}

        {/* Footer: only show price & button if room exists */}
        {room && (
          <div className="room-card-footer">
            <span className="room-card-price">
              ₹{cardPrice} <small>/ night</small>
            </span>

            <Link to={`/rooms/${cardId}`}>
              <Button variant="primary">View Details</Button>
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
