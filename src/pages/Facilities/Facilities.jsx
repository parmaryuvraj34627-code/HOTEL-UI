import React from "react";
import PageTitle from "../../components/common/PageTitle";
import { facilities } from "../../data/facilitiesData";
import "./Facilities.css";

export default function Facilities() {
  return (
    <main className="facilities-page">
      {/* Page Title */}
      <PageTitle
        title="Our Facilities"
        subtitle="Modern amenities designed for your comfort and convenience"
      />

      {/* Dynamic Facilities Grid */}
      {facilities && facilities.length > 0 ? (
        <section className="facilities-section">
          <div className="container">
            <div className="facilities-grid">
              {facilities.map((item) => (
                <div key={item.id} className="facility-card">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="facility-icon"
                  />
                  <h3 className="facility-title">{item.title}</h3>
                  <p className="facility-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* Fallback / Simple view */
        <div className="facilities-container">
          <h1>Our Facilities</h1>
          <p>We provide the best facilities for our clients.</p>
        </div>
      )}
    </main>
  );
}
