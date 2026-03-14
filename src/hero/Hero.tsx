import "./hero.scss";
export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="content">
          <div className="introduction">
            <div className="image">
              <img src="https://picsum.photos/200" alt="" />
            </div>
            <h1 className="name">Tobias Hain</h1>
          </div>
          <div className="title">Fullstack Developer</div>
          <div className="links">
            <button className="text">Contact me</button>
            <button className="icon">Github</button>
            <button className="icon">TobiOS</button>
          </div>
          <div className="immersive-portfolio">
            Prefer to go beyond the minimal?{" "}
            <button className="text">Get to the fun side</button> Experience the
            immersive portfolio.
          </div>
        </div>
      </div>
    </>
  );
}
