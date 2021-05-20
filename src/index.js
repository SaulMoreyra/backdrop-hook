import ReactDOM from "react-dom";
import { BackdropProvider } from "./context";
import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  // RODEAMOS AL COMPONENTE PRINCIPAL CON EL PROVEEDOR
  // PARA QUE EL BACKROP ESTÉ DISPOBIBLE PARA TODOS LOS HIJOS
  <BackdropProvider>
    <App />
  </BackdropProvider>,
  rootElement
);
