import React from "react";

import { LogoNoBg } from "../assets/images";

const Header = () => {
  return (
    <div className="header" id="header">
      <img src={LogoNoBg} alt="logo" className="header__logo" />
      <div className="header__wrapper container">
        <div className="row">
          <div className="col-10 offset-1 d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-5">Production House</h1>
            <p className="mt-3">
              Współpracujemy z agencjami eventowymi oraz reklamowymi przy
              produkcjach Foto i Video
            </p>
            <a href="#contact" className="mt-2">
              Kontakt
            </a>

            <div className="scroll mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
