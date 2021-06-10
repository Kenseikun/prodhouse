import React from "react";
import { CircularProgress } from "@material-ui/core";

const Offer = () => {
  return (
    <>
      <h2>Oferujemy</h2>
      <CircularProgress color="primary" />
      <p>Fotografia</p>
      <CircularProgress />
      <p>Video</p>
    </>
  );
};

export default Offer;
