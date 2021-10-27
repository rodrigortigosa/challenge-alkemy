import React from "react";
import { HOME } from "../config/router/paths";
import notFound from "../images/404.jpg";

export const NotFoundPage = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center mt-5 mb-3 mx-auto">
        <div>
          <img src={notFound} alt="404" width="300px"></img>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center my-3 mx-auto">
        <p style={{ fontSize: "16px", fontWeight: "bold", margin: "0" }}>
          Parece que la página no existe
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center my-3 mx-auto">
        <a className="d-block" href={HOME}>
          Ir a la página principal
        </a>
      </div>
    </div>
  );
};
