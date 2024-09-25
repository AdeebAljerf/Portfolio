import "./Nav.css";
import { useRef, useEffect } from "react";
export default function Nav() {
  const navRef = useRef(null);
  const navLinksRef = useRef(null);

  //? nav fade
  const handleOver = (value, target) => {
    const siblings = navRef.current.querySelectorAll(".nav__link");
    const logo = navRef.current.querySelector("h3");

    if (
      !target.classList.contains("nav__link") &&
      !target.classList.contains("nav__logo")
    )
      return;

    siblings.forEach((s) => {
      if (s !== target) s.style.opacity = value;
      if (logo !== target) logo.style.opacity = value;
    });
  };

  useEffect(() => {
    const handleMouseOver = (e) => handleOver(0.2, e.target);
    const handleMouseOut = (e) => handleOver(1, e.target);

    const nav = navRef.current;
    if (nav) {
      nav.addEventListener("mouseover", handleMouseOver);
      nav.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      if (nav) {
        nav.removeEventListener("mouseover", handleMouseOver);
        nav.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);

  const handleScroll = function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav__link")) {
      //! use e.target not this
      const id = e.target.getAttribute("href");
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  };

  //*--------------------------------------------
  return (
    <nav className="nav" ref={navRef} id="section--1">
      <h3 className="nav__logo">Adeeb.dev</h3>
      <ul className="nav__links" onClick={handleScroll}>
        <li className="nav__item">
          <a className="nav__link" href="#section--1">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#section--2">
            About
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#section--3">
            Projects
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#section--4">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
