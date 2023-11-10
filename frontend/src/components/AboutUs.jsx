import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="aboutus-container">
      <video autoPlay muted loop className="background-video">
        <source src="./aboutUs.mp4" type="video/mp4" />
      </video>
      <Link to="/hub">
        <div className="play-button">
          <img src="./home-icon.png" alt="hub" />
        </div>
      </Link>
    </div>
  );
}

export default AboutUs;
