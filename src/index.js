import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./modules/core";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
