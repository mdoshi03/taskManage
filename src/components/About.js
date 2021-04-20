import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h3 style={{ verticalAlign: "20px" }}>Created by MEET DOSHI</h3>

      <p></p>
      <Link style={{ verticalAlign: "20px" }} to="/">
        Go Back
      </Link>
    </div>
  );
};

export default About;
