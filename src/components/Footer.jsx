import { salon } from "../config.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <a href="#top" className="brand">
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__name">{salon.name}</span>
        </a>
        <div className="site-footer__meta">
          <span>{salon.hoursSummary}</span>
          <span>
            {salon.address.line1}, {salon.address.city}, {salon.address.state} {salon.address.zip} ·{" "}
            {salon.phoneDisplay}
          </span>
        </div>
      </div>
    </footer>
  );
}
