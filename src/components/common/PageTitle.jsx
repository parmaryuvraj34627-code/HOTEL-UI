import React from "react";
import "./PageTitle.css";

const PageTitle = ({ title, subtitle }) => {
  return (
    <section className="page-title">
      <div className="page-title-container">
        <h1>{title}</h1>
        {subtitle && <p className="page-title-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageTitle;
