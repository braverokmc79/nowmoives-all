import React from "react";
import { hydrate, render } from "react-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,

    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  );
} else {
  root.render(
    // <BrowserRouter basename={`${process.env.REACT_APP_API_URL=== "localhost" ? "" : "netflix"}`} >
    //   <App />
    // </BrowserRouter>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
