import "./header.scss";
export default function Header() {
  return (
    <>
      <nav>
        <a href="#">
          <button className="nav">Home</button>
        </a>
        <a href="#tobiOS">
          <button className="nav">TobiOS</button>
        </a>
        <a href="#experience">
          <button className="nav">Experience</button>
        </a>
        <a href="#projects">
          <button className="nav">Projects</button>
        </a>
        <a href="#contact">
          <button className="nav">Contact</button>
        </a>
      </nav>
    </>
  );
}
