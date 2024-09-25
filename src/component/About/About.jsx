import "./About.css";
export default function About() {
  return (
    <section className="about  section" id="section--2">
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
            <p>"San Jose, CA"</p>
          </div>

          <div className="statement">
            <div className="command-container">
              <span className="chevron"></span> <h4>Adeeb.contactInfo</h4>
            </div>
            <p>
              ["<a href="#">adeebaljerf2@gmail.com</a>", "
              <a href="#">LinkedIn</a>
              ", "<a href="#">github</a>"]
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
