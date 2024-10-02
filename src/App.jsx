import { useState, useEffect } from "react";

import Nav from "./component/Nav/Nav";
import Main from "./component/main/Main";
import "./index.css";

// import MouseEffect from "./ui/mouseEffect";

export default function App() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const revealSection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("section--hidden");
          entry.target.classList.add("section--visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    const sections = document.querySelectorAll(".reveal-section");
    sections.forEach((section) => {
      sectionObserver.observe(section);
      section.classList.add("section--hidden");
    });

    return () => {
      sections.forEach((section) => sectionObserver.unobserve(section));
    };
  }, []);
  return (
    <>
      {/* <MouseEffect></MouseEffect> */}
      <Nav isSticky={isSticky}></Nav>
      <Main setIsSticky={setIsSticky}></Main>
    </>
  );
}
