import { NavLink } from "react-router-dom";
import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFileText,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
  <div className="navbar">
    <div className="flex-logo">
      <h1 className="t-logo" to="/">
        T
      </h1>
      <h1 className="tedecast">Tedecast</h1>
    </div>

    {/* Nav Icons */}
    <nav className="navbar-links">
      {/* Home */}
      <NavLink exact="true" activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#ff66ff" />
      </NavLink>
      {/* About */}
      <NavLink
        exact="true"
        activeClassName="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#ff66ff" />
      </NavLink>
      {/* Resume */}
      <NavLink
        exact="true"
        activeClassName="active"
        className="resume-link"
        to="/resume"
      >
        <FontAwesomeIcon icon={faFileText} color="#ff66ff" />
      </NavLink>
      {/* Contact */}
      <NavLink
        exact="true"
        activeClassName="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#ff66ff" />
      </NavLink>
      {/* LinkedIn */}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/teresa-de-castro/"
        className="linkedin-link"
      >
        <FontAwesomeIcon icon={faLinkedin} color="#ff66ff" />
      </a>
      {/* GitHub */}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/tedecast"
        className="github-link"
      >
        <FontAwesomeIcon icon={faGithub} color="#ff66ff" />
      </a>
    </nav>
  </div>
);

export default Sidebar;
