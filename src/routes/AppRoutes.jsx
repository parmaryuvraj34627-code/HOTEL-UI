import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import RoomDetails from "../pages/Rooms/RoomDetails";
import Facilities from "../pages/Facilities/Facilities";
import Location from "../pages/Location/Location";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Rooms */}
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/rooms/:id" element={<RoomDetails />} />

      {/* Facilities */}
      <Route path="/facilities" element={<Facilities />} />

      {/* Location */}
      <Route path="/location" element={<Location />} />

      {/* Gallery */}
      <Route path="/gallery" element={<Gallery />} />

      {/* Contact */}
      <Route path="/contact" element={<Contact />} />

      {/* 404 fallback */}
      <Route path="*" element={<h2 style={{ textAlign: "center", marginTop: "50px" }}>Page Not Found</h2>} />
    </Routes>
  );
}
