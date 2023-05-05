import "./intro.scss"
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      
      backDelay: 1500,
      backSpeed:60,
      strings: ["Designer", "Web Developer", "Hybrid App Dev"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/man.png.png" alt=""/>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hey There Buddy, I'm</h2>
            <h1>Harsh Sharma</h1>
            <h3>GLA Student <span ref={textRef}></span>
            </h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt=""/>
          </a>
        </div>
    </div>
  )
}
