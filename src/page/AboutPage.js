import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const GoToHomePage = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>AboutPage</h1>
      <button onClick={GoToHomePage}>Go to HomePage</button>
    </div>
  );
};

export default AboutPage;
