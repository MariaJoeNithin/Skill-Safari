import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./HomePage";
import HomeSite from "./HomeSite";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HomePage />
    <HomeSite />
  </>
);
