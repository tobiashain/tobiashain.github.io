import "./hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <div className="introduction">
          <div className="image">
            <img src="https://picsum.photos/200" alt="Tobias Hain" />
          </div>
          <div className="intro-text">
            <div className="status">
              <span className="dot" />
              Available for work
            </div>
            <h1 className="name">Tobias Hain</h1>
          </div>
        </div>

        <div className="title">
          <div className="line">FULLSTACK</div>
          <div className="line">DEVELOPER</div>
        </div>

        <p className="tagline">
          I build fast, thoughtful web experiences — from pixel-perfect UIs to
          rock-solid backends.
        </p>

        <div className="links">
          <button className="primary">Contact me</button>
          <button className="icon">
            <img src="/icons/github.png" alt="GitHub" />
          </button>
        </div>
      </div>

      {/* TobiOS teaser — full-bleed below hero content */}
      <div className="tobios-teaser">
        <div className="teaser-inner">
          <div className="teaser-label">
            You're looking at the minimal version.
          </div>
          <h2 className="teaser-heading">
            The real portfolio is an entire operating system.
          </h2>
          <p className="teaser-sub">
            TobiOS is a fully interactive Windows-style desktop — with real
            apps, a file system, a taskbar, and everything about my work living
            inside it.
          </p>

          {/* Fake OS window chrome */}
          <div className="os-window">
            <div className="titlebar">
              <div className="titlebar-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="titlebar-title">TobiOS — Portfolio.exe</div>
              <div className="titlebar-spacer" />
            </div>
            <div className="os-body">
              <div className="desktop-icons">
                {[
                  { icon: "📁", label: "Projects" },
                  { icon: "💼", label: "Experience" },
                  { icon: "⚙️", label: "Tech Stack" },
                  { icon: "📬", label: "Contact" },
                  { icon: "🎮", label: "Games" },
                  { icon: "📝", label: "About me" },
                ].map(({ icon, label }) => (
                  <div className="icon-item" key={label}>
                    <div className="icon-img">{icon}</div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <div className="taskbar">
                <div className="start-btn">⊞</div>
                <div className="taskbar-items">
                  <div className="taskbar-item active">Portfolio.exe</div>
                  <div className="taskbar-item">Terminal</div>
                  <div className="taskbar-item">Chrome</div>
                </div>
                <div className="clock">10:24 AM</div>
              </div>
            </div>
          </div>

          <button className="teaser-cta">
            <span className="win-icon">⊞</span>
            Launch TobiOS
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
