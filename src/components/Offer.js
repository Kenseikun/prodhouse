import React from "react";

const Offer = () => {
  return (
    <>
      <div className="offer container d-flex flex-column justify-content-center align-items-center my-5"
      id="offer">
        <h2 className="mb-5">Co oferujemy?</h2>

        <div className="d-flex justify-content-around mt-3 w-100">
          <div className="offer__tail">
            <p className="offer__title">Photo & Video</p>
            <p className="text-center">
              Pełna obsługa fotograficzna eventów. Współpracujemy z agencjami
              eventowymi, PR-owymi oraz bezpośrednio z klientami korporacyjnymi.
              Dzięki 10-letniemu doświadczeniu w fotografii eventowej
              gwarantujemy najwyższą jakość usług.
              <br />
              Za nami setki realizacji i ogrom zadowolonych klientów.
            </p>

            <div className="offer__check">
              <p>zapytaj o wycenę</p>
              <a
                href="mailto:prod.house.pl@gmail.com"
                className="offer__check__button"
              >
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
