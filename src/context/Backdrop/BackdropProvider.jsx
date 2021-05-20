import { useCallback, useState } from "react";
import BackdropContext from "./BackdropContext";
import { Backdrop } from "../../components";

export default function BackdropProvider({ children }) {
  // IMPLEMENTACIÓN DE STATE QUE VA A CONTROLAR EL OPEN Y CLOSE
  const [backdrop, setBackdrop] = useState(false);

  // METODO QUE CAMBIA EL STATE A TRUE PARA QUE SE MUESTRE
  const open = useCallback(() => {
    setBackdrop(true);
  }, []);

  // METODO QUE CAMBIA EL STATE A FALSE PARA QUE SE OCULTE
  const close = useCallback(() => {
    setBackdrop(false);
  }, []);

  // SE EXPORTAN LOS METODOS DEL BACKDROP
  // SE RENDERIZA EL O LOS HIJOS CON CHILDREN
  // SE RENDERIZA EL BACKDROP PARA QUE ESTÉ VISIBLE SOBRE TODOS LOS HIJOS
  return (
    <BackdropContext.Provider value={{ open, close }}>
      {children}
      <Backdrop open={backdrop} />
    </BackdropContext.Provider>
  );
}
