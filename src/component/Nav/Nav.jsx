import "./Nav.css";
import { useRef, useEffect, useState } from "react";
export default function Nav({ isSticky }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navRef = useRef(null);

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

  //? scroll to section
  const handleScroll = function (e) {
    e.preventDefault();
    console.log(isSticky);
    setMobileNavOpen(!mobileNavOpen);

    if (e.target.classList.contains("nav__link")) {
      //! use e.target not this
      const id = e.target.getAttribute("href");
      if (id === "#section--1") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };
  const logoScorll = function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //? mobile nav

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  //*--------------------------------------------
  return (
    <nav className={`nav ${isSticky ? "sticky" : ""}`} ref={navRef}>
      <h3 className="nav__logo" onClick={logoScorll}>
        Adeeb.dev
      </h3>

      <ul
        className={`nav__links ${mobileNavOpen ? "nav__links--mobile" : ""}`}
        onClick={handleScroll}
      >
        <li className="nav__item ">
          <a className="nav__link" href="#section--1">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#section--2">
            About
          </a>
        </li>
        <li className="nav__item ">
          <a className="nav__link" href="#section--3">
            Projects
          </a>
        </li>
        <li className="nav__item ">
          <a className="nav__link" href="#section--4">
            Contact
          </a>
        </li>
      </ul>
      <div className="nav__mobile-toggle" onClick={toggleMobileNav}>
        {mobileNavOpen ? (
          <box-icon name="x"></box-icon>
        ) : (
          <box-icon name="menu"></box-icon>
        )}
      </div>
    </nav>
  );
}
