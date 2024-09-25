import "./Home.css";
import homeImg from "/src/assets/img7.jpg";
export default function Home() {
  const handleScroll = function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="hero section">
      <div className="hero-text">
        <h1>Front-End React Developer 👋</h1>
        <p>
          Hi, I'm Adeeb Aljerf. My passion is building simple, beautiful user
          experiences. Check out my{" "}
          <a
            className="projects-link"
            onClick={handleScroll}
            href="#section--3"
          >
            side-projects
          </a>{" "}
          below.
        </p>

        <button className="hero-btn">Hire Me!</button>
      </div>

      <div className="hero-box-img">
        <div
          className="hero-img"
          style={{ backgroundImage: `url(${homeImg})` }}
        ></div>
      </div>
    </section>
  );
}
