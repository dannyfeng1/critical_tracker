import React from "react";
import { Link } from "react-router-dom";

const RoutingError = props => {
  return (
    <h1 id="error-page">
      <div>404 Critical Error: Page not Found</div>
      <img src="https://img2.svgdesigns.com/printart/xlarge/SunnyBunnySVG/PGSB1116.jpg" alt="" />
      <Link to="/">Click here to go back to the homepage</Link>
    </h1>
  )
}

export default RoutingError;