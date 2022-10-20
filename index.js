import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "./main.scss";
import App from "./src/App";
import store from "./src/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
