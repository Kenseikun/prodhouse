import React from "react";

import { a, b, c, d, e, f, g, h, i, j } from "../assets/images/gallery";

const images = [a, b, c, d, e, f, g, h, i, j];

const Portfolio = () => {
  return (
    <div
      className="portfolio container d-flex flex-column justify-content-center align-items-center mb-5"
      id="portfolio"
    >
      <h2 className="mb-5">Portfolio</h2>

      <div className="portfolio__gallery">
        {images.map((image) => {
          return (
            <>
              <img src={image} alt={image} key={image}  className="me-1"/>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
