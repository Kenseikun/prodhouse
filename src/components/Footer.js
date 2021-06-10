import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1 d-flex flex-column justify-content-center align-items-center">
              <p className="mt-5">Jesteś zainteresowany współpracą?</p>
              <button className="mt-3">Napisz</button>

              <i className="fab fa-instagram-square mt-5 mb-5"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
