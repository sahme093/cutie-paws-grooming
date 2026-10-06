import { salon } from "../config.js";

function PawIcon() {
  return (
    <svg viewBox="0 0 64 64" className="service-card__icon" aria-hidden="true">
      <g fill="currentColor">
        <ellipse cx="32" cy="41" rx="11" ry="9" />
        <ellipse cx="17.5" cy="29" rx="5" ry="6.2" transform="rotate(-18 17.5 29)" />
        <ellipse cx="26" cy="19.5" rx="5" ry="6.6" transform="rotate(-6 26 19.5)" />
        <ellipse cx="38" cy="19.5" rx="5" ry="6.6" transform="rotate(6 38 19.5)" />
        <ellipse cx="46.5" cy="29" rx="5" ry="6.2" transform="rotate(18 46.5 29)" />
      </g>
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container section-inner">
        <div className="section-heading">
          <div className="section-heading__text">
            <span className="section-label">Services</span>
            <h2 className="section-title">Cuts &amp; care for every cutie</h2>
          </div>
        </div>

        <div className="service-groups">
          {salon.services.map((service) => (
            <div className="service-card" key={service.name}>
              <PawIcon />
              <h3>{service.name}</h3>
              <p className="service-card__text">{service.description}</p>
              {salon.showPrices && service.price != null && (
                <span className="service-row__price">from ${service.price}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
