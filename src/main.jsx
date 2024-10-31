import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Data_providr from "./context/Moviescontext.jsx";
import Variable_providr from "./context/Variablecontext.jsx";
import Dash_providr from "./context/Dash_context.jsx";
import Auth_provider from "./context/Auth_Context.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Variable_providr>
      <Auth_provider>
        <Dash_providr>
          <Data_providr>
            <Router>
              <App />
            </Router>
          </Data_providr>
        </Dash_providr>
      </Auth_provider>
    </Variable_providr>
  </React.StrictMode>
);
