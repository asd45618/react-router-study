import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const goToProductPage = () => {
    navigate("/products?q=pants");
  };

  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/about">Go to about page </Link>
      <button onClick={goToProductPage}>Go to product page</button>
    </div>
  );
};

export default HomePage;
