import "./About.css";
export default function About() {
  //? nav sticky
  // useEffect(() => {
  //   if (aboutRef.current) {
  //     const boundingRect = aboutRef.current.getBoundingClientRect();
  //     setCoords(boundingRect);
  //   }
  // }, []);
  // window.addEventListener("scroll", () => {
  //   if (window.scrollY >= coords.top) {
  //     setIsSticky(true);
  //   } else {
  //     setIsSticky(false);
  //   }
  // });

  return (
    <section className="about section reveal-section" id="section--2">
      <h2 className="about-title">About me</h2>

      <div className="terminal  ">
        <div className="terminal-header">
          <div className="header-button red"></div>
          <div className="header-button yellow"></div>
          <div className="header-button green"></div>
        </div>

        <div className="terminal-window">
          <div className="statement">
            <div className="command-container">
              <span className="chevron"></span> <h4>Adeeb.currentLocation</h4>
            </div>
            <p>"Syria , Damascus"</p>
          </div>

          <div className="statement">
            <div className="command-container">
              <span className="chevron"></span> <h4>Adeeb.contactInfo</h4>
            </div>
            <p>
              ["
              <a target="_blank" href="https://adeebaljerf2@gmail.com">
                adeebaljerf2@gmail.com
              </a>
              ", "
              <a
                target="_blank"
                href=" https://www.linkedin.com/in/adeeb-aljerf-5591b72b4
"
              >
                LinkedIn
              </a>
              ", "<a href="https://github.com/AdeebAljerf">github</a>"]
            </p>
          </div>

          <div className="statement">
            <div className="command-container">
              <span className="chevron"></span> <h4>Adeeb.cv</h4>
            </div>
            <p>
              "<a href="#">adeeb.pdf</a>"
            </p>
          </div>

          <div className="statement">
            <div className="command-container">
              <span className="chevron"></span> <h4>Adeeb.education</h4>
            </div>
            <p>
              "Information technology engineering - International University for
              Science and Technology"
            </p>
          </div>

          <div className="statement">
            <div className="command-container">
              <span className="chevron"></span> <h4>Adeeb.skills</h4>
            </div>

            <p>
              ["html" ,"css", "JavaScript", "React", "React Router", "Redux",
              "git"]
            </p>
          </div>

          <div className="statement">
            <div className="command-container">
              <span className="chevron"></span>
              <p className="typingEffect"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
