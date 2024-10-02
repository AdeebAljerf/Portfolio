import { useRef, useEffect } from "react";
import "./Home.css";
import homeImg from "/src/assets/img7.jpg";
export default function Home({ setIsSticky }) {
  const heroRef = useRef(null);
  const handleScroll = function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [setIsSticky]);

  return (
    <section
      className="hero section reveal-section"
      id="section--1"
      ref={heroRef}
    >
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

        <button className="hero-btn" onClick={handleScroll} href="#section--4">
          Hire Me!
        </button>
      </div>

      <div className="hero-box-img ">
        <div
          className="hero-img"
          style={{ backgroundImage: `url(${homeImg})` }}
        ></div>
      </div>
    </section>
  );
}
