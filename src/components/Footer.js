import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer container-fluid" id="contact">
        
        
        <div className="container pt-4">
          <div className="row">
            <div className="col-10 offset-1 d-flex flex-column justify-content-center align-items-center">
              <p className="footer__text mt-5">Jesteś zainteresowany współpracą?</p>

              <a
                href="mailto:prod.house.pl@gmail.com"
                className="footer__mail mt-3"
              >
                prod.house.pl@gmail.com
              </a>

              <p className="footer__more mt-4 mb-1">Sprawdz więcej na:</p>
              <a
                href="https://www.instagram.com/prod.house.pl/"
                target="blank"
                className="footer__instagram"
              >
                <i className="fab fa-instagram-square mb-5"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
