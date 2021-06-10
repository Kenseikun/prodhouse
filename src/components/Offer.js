import React from "react";
import { CircularProgress } from "@material-ui/core";

const Offer = () => {
  return (
    <>
      <div className="offer container d-flex flex-column justify-content-center align-items-center my-5">
        <h2 className="mb-5">Co oferujemy?</h2>
        
        <div className="d-flex justify-content-around mt-3 w-100">
          
          <div className="offer__tail">
            <CircularProgress className="offer__tail__circural" />
            <p>Photo</p>
          </div>

          <div className="offer__tail">
            <CircularProgress className="offer__tail__circural" color="secondary" />
            <p>Video</p>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Offer;
