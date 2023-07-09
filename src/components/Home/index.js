import { Link } from "react-router-dom";
import "./index.scss";

const Home = () => {
  const emoji = "\u{2728}";
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
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
