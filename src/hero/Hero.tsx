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
          <div className="title">
            <div className="line">FULLSTACK</div>
            <div className="line">DEVELOPER</div>
          </div>
          <div className="links">
            <button className="text">Contact me</button>
            <button className="icon">
              <img src="/icons/github.png" alt="" />
            </button>
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
