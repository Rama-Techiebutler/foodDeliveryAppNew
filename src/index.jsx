import { Provider } from "react-redux";
import App from "./App";
import ReactDOM from "react-dom/client";
import appStore from "./utils/appStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={appStore}>
  <App />
  // </Provider>
);
