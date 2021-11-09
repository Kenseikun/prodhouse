import React from "react";

import { images } from "../assets/images/gallery";

const Portfolio = () => {
  return (
    <section className="portfolio container d-flex flex-column justify-content-center align-items-center my-5">
      <h2 className="mb-5">Portfolio</h2>

      <div className="container-lg">
        <div className="row row-cols-1 row-cols-sm-2 row-row-cols-md-3">
          {images.map((image) => {
            return (
              <>
                <div className="col" key={image.name}>
                  <div className="image" key={image.name}>
                    <a
                      className="image__name"
                      href={`https://${image.domain}`}
                      src={image.url}
                    >
                      {image.name}
                    </a>
                    <a href={`https://${image.domain}`}>
                      <img className="mt-2" src={image.url} alt="" />
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
