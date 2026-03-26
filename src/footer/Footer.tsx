import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="left">
        <span className="name">Tobias Hain</span>
        <span className="copy">
          © {new Date().getFullYear()} — All rights reserved
        </span>
      </div>
      <div className="links">
        <a href="#" className="link">
          Home
        </a>
        <a href="#" className="link">
          Projects
        </a>
        <a href="#" className="link">
          TobiOS
        </a>
        <a href="#" className="link">
          Contact
        </a>
      </div>
      <div className="socials">
        <a href="#" className="icon">
          <img src="/icons/github.png" alt="GitHub" />
        </a>
      </div>
    </footer>
  );
}
