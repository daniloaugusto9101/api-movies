import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import AplicationRoutes from "./routes/AplicationRoutes";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AplicationRoutes />
    </Provider>
  </React.StrictMode>
);
