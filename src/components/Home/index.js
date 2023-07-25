import { Link } from "react-router-dom";
import "./index.scss";
import Portrait from "./../../assets/images/Self-Portrait.png";
import { useEffect, useState } from "react";

const Home = () => {
  const emoji = "\u{2728}";
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["e", "r", "r", "i"];
  const jobTitle = "Web Developer";
  const jobArray = jobTitle
    .split("")
    .map((letter) => (letter === " " ? "\u00A0" : letter));

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="home-page container">
      <div className="text-zone">
        <div>
          <p className={`hi-text ${letterClass}`}>H</p>
          <p className={`hi-text ${letterClass} _12`}>i,</p>
          <br />
          <p className={`${letterClass} _13`}>I'</p>
          <p className={`${letterClass} _14`}>m &nbsp;</p>
          <p className={`t-logo ${letterClass} _15`}>T</p>
          {nameArray.map((letter, index) => (
            <p
              key={index}
              className={`${letterClass} name-label _${index + 16}`}
            >
              {letter}
            </p>
          ))}
          <p className={`emoji ${letterClass} name-label _20`}>{emoji}</p>
          <br />
          <p className="job-title">
            {jobArray.map((letter, index) => (
              <span
                key={index}
                className={`${letterClass} name-label _${index + 21}`}
              >
                {letter}
              </span>
            ))}
            <br />
          </p>
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
