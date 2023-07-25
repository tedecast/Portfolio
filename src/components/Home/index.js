import { Link } from "react-router-dom";
import "./index.scss";
import Portrait from "./../../assets/images/Self-Portrait.png";
import { useState } from "react";

const Home = () => {
  const emoji = "\u{2728}";
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["e", "r", "r", "i"];
  return (
    <div className="home-page container">
      <div className="text-zone">
        <div>
          <p className="hi-text">Hi,</p>
          <br />
          <p>I'm &nbsp;</p>
          <p className="t-logo">T</p>
          <p>erri</p>
          <p className="emoji">{emoji}</p>
          <br />
          <p className="job-title">Web Developer</p>
          <Link to="/contact" className="contact-button">
            CONTACT ME
          </Link>
        </div>
        <img className="display-photo fade-in" src={Portrait} alt="portrait" />
      </div>
    </div>
  );
};

export default Home;
