import Home from "../home/Home";
import About from "../About/About";
import Projects from "../projects/Projects";
import Contact from "../Contact/Contact";
import "./Main.css";
export default function Main({ isSticKy, setIsSticky }) {
  return (
    <main className="main container">
      <Home></Home>
      <About isSticKy={isSticKy} setIsSticky={setIsSticky}></About>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  );
}
