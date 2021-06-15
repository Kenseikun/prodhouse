import React from "react";
import { LogoSmall } from "../assets/images";

const Copyrights = () => {
  return (
    <div className="container-fluid copyrights pt-5">
      <div className="container copyrights__wrapper">
        <div className="row">
          <div className="col-12 d-flex flex-column flex-md-row justify-content-md-between text-center">
            
            <div className="d-flex flex-column justify-content-center align-items-center mb-3">
              <img src={LogoSmall} alt="logo" className="copyrights__logo" />
              <p>Pełna obsługa fotograficzna eventów.</p>
            </div>

            <div className="d-flex flex-column flex-md-row">
              <div className="mb-2 me-md-5">
                <h4>Lokalizacja</h4>
                <p>Warszawa</p>
              </div>
              <div>
                <h4>Kontakt</h4>
                <p className="mb-1">516 586 965</p>
                <p>725 108 738</p>
                <p>prod.house.pl@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 d-flex justify-content-center pb-3 pt-2">
          <p className="m-0">Copyrights © ProductionHouse</p>
        </div>
      </div>
    </div>
  );
};

export default Copyrights;
