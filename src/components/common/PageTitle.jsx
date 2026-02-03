import "./pageTitle.css";

export default function PageTitle({ title, subtitle }) {
  return (
    <section className="page-title">
      <div className="page-title-container">
        <h1>{title}</h1>
        {subtitle && <p className="page-title-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
