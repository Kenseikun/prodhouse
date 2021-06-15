import React, { useState } from "react";
import { LogoSmall } from "../assets/images";

const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <div className="navbar__wrapper container-fluid">
      <nav className="navbar navbar-expand-lg">
        <a href="/">
          <img src={LogoSmall} alt="Logo sign" className="navbar__logo" />
        </a>
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon d-flex justify-content-center align-items-center">
            <i class="fas fa-ellipsis-h"></i>
          </span>
        </button>

        <div
          className={`${
            isNavCollapsed ? "collapse" : ""
          } navbar-collapse d-md-flex justify-content-end`}
        >
          <a className="nav-link" href="#header">
            O nas
          </a>
          <a className="nav-link" href="#offer">
            Oferta
          </a>
          <a className="nav-link" href="#portfolio">
            Portfolio
          </a>
          <a className="nav-link" href="#contact">
            Kontakt
          </a>
          <a
            className="nav-link"
            href="https://www.instagram.com/prod.house.pl/"
            target="blank"
          >
            <i className="fab fa-instagram-square"></i>
          </a>
          <div className="nav-link navbar__numbers d-flex flex-column align-items-center w-sm-100">
            <a href="tel:+48516586965" className="mb-2">
              516 586 965
            </a>
            <a href="tel:+48725108738">725 108 738</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
