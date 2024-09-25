import Home from "../home/Home";
import About from "../About/About";
import Projects from "../projects/Projects";
import "./Main.css";
export default function Main() {
  return (
    <main className="main container">
      <Home></Home>
      <About></About>
      <Projects></Projects>
    </main>
  );
}
