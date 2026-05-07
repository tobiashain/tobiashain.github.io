import "./cta.scss";

export default function CTA() {
  return (
    <section className="cta">
      <div className="inner">
        <div className="label" id="contact">
          Get in touch
        </div>
        <h2 className="heading">Let's build something great together.</h2>
        <p className="body">
          Whether you have a project in mind, a role to fill, or just want to
          say hello, my inbox is always open.
        </p>
        <div className="actions">
          <a href="mailto:hain.tobias@outlook.at" className="btn primary">
            Send me an email
          </a>
          <a
            href="https://github.com/tobiashain"
            rel="noopener noreferrer"
            className="btn ghost"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
