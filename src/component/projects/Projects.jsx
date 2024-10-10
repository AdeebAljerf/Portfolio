import "./Projects.css";
import project1 from "../../assets/project-1.jpg";
import project2 from "../../assets/project-2.jpg";
import { useState } from "react";

const allProjects = [
  {
    name: "Tic Tac Toe",
    description:
      " tic tac toe game by react i did this project to practice how  to deal with the dom in the react way",

    // image: "./src/assets/project-1.jpg",
    image: project1,
    category: "react",
    link: "https://adeebaljerf.github.io/TicTacToe/",
  },
  {
    name: "Adeeb Quiz",
    description:
      " Quiz app built with React's useReducer and a fake API for backend simulation, enhancing state management and data fetching skills",

    image: project2,

    category: "react",
    link: "https://adeebaljerf.github.io/AdeebQuiz/",
  },
  {
    name: "Tic Tac Toe",
    description:
      " tic tac toe game by react i did this project to practice how  to deal with the dom in the react way",

    image: project1,

    category: "html",
  },
];
const jsProjects = allProjects.filter((project) => project.category === "js");

const reactProjects = allProjects.filter(
  (project) => project.category === "react"
);
const cssProjects = allProjects.filter(
  (project) => project.category === "html"
);

//?________________________________________________________________________//

export default function Projects() {
  const [currentActive, setCurrentActive] = useState("all");
  const [projects, setProjects] = useState(allProjects);
  return (
    <section className="projects  section reveal-section" id="section--3">
      <section className="left-section">
        <button
          onClick={() => {
            setCurrentActive("all");
            setProjects(allProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => {
            setCurrentActive("js");
            setProjects(jsProjects);
            // setCurrentActive(false);
          }}
          className={currentActive === "js" ? "active" : null}
        >
          javaScript
        </button>
        <button
          onClick={() => {
            setCurrentActive("react");
            setProjects(reactProjects);
            // setCurrentActive(false);
          }}
          className={currentActive === "react" ? "active" : null}
        >
          reactJs
        </button>
        <button
          onClick={() => {
            setCurrentActive("css");
            setProjects(cssProjects);
          }}
          className={currentActive === "css" ? "active" : null}
        >
          html & css
        </button>
      </section>

      <section className="right-section">
        {projects.map((project) => {
          return (
            <article key={project.category} className="card reveal-section">
              <img src={project.image} width={270} height={200} alt="" />
              <div style={{ width: `270px` }} className="box">
                <h1 className="project-title">{project.name}</h1>
                <p className="sup-title">{project.description}</p>

                <div className="card-links">
                  <div style={{ display: `flex`, gap: `10px` }}>
                    <box-icon type="logo" name="github"></box-icon>
                    <box-icon name="link"></box-icon>
                  </div>

                  <div className="demo-container">
                    <a target="_blank" href={project.link}>
                      Demo
                    </a>
                    <box-icon
                      name="right-arrow-alt"
                      className="arrow-icon"
                    ></box-icon>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
}
