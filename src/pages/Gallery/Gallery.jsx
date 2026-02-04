import { useState } from "react";
import PageTitle from "../../components/common/PageTitle";
import Modal from "../../components/ui/Modal";
import "./Gallery.css";

// Example gallery images (stored in public/images)
const galleryImages = [
  "/images/hotel-front.jpg",
  "/images/room-economy.jpg",
  "/images/room-deluxe.jpg",
  "/images/room-triple.jpg",
  "/images/hero.jpg"
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  const handleImageClick = (img) => {
    setActiveImage(img);
    setOpen(true);
  };

  return (
    <main className="gallery-page">
      {/* Page Title */}
      <PageTitle
        title="Gallery"
        subtitle="Explore our rooms, facilities, and scenic riverfront views"
      />

      {/* Dynamic Gallery Grid */}
      {galleryImages && galleryImages.length > 0 ? (
        <section className="gallery-section">
          <div className="container gallery-grid">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => handleImageClick(img)}
              >
                <img src={img} alt={`Gallery ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      ) : (
        // Fallback / Simple gallery
        <div className="gallery-container">
          <h1>Gallery</h1>
          <div className="gallery-images">
            <img
              src="https://via.placeholder.com/300"
              alt="Sample 1"
              className="gallery-image"
            />
            <img
              src="https://via.placeholder.com/300"
              alt="Sample 2"
              className="gallery-image"
            />
          </div>
        </div>
      )}

      {/* Modal Lightbox */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Gallery Image"
      >
        <img src={activeImage} alt="Gallery Preview" className="modal-image" />
      </Modal>
    </main>
  );
}
