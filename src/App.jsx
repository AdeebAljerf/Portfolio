import { useState } from "react";

import Nav from "./component/Nav/Nav";
import Main from "./component/main/Main";
import "./index.css";

// import MouseEffect from "./ui/mouseEffect";

export default function App() {
  const [isSticky, setIsSticky] = useState(false);

  return (
    <>
      {/* <MouseEffect></MouseEffect> */}
      <Nav isSticky={isSticky}></Nav>
      <Main setIsSticky={setIsSticky}></Main>
    </>
  );
}
