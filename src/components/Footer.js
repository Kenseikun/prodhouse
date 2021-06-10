import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1 d-flex flex-column justify-content-center align-items-center">
              <p className="mt-5">Jesteś zainteresowany współpracą?</p>

              <a href="mailto:prod.house.pl@gmail.com" className="footer__mail mt-3">
                prod.house.pl@gmail.com
              </a>

              <a href="https://www.instagram.com/prod.house.pl/" target="blank" className="footer__instagram">
                <i className="fab fa-instagram-square mt-4 mb-5"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
