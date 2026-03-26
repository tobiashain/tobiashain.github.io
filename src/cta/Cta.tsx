import "./cta.scss";

export default function CTA() {
  return (
    <section className="cta">
      <div className="inner">
        <div className="label">Get in touch</div>
        <h2 className="heading">Let's build something great together.</h2>
        <p className="body">
          Whether you have a project in mind, a role to fill, or just want to
          say hello — my inbox is always open.
        </p>
        <div className="actions">
          <a href="mailto:tobias@example.com" className="btn primary">
            Send me an email
          </a>
          <a href="#" className="btn ghost">
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
