import { useCallback, useEffect, useRef } from "react";
import useBackdrop from "./hooks/useBackdrop";
import "./styles.css";

export default function App() {
  // LLAMAMOS AL HOOK (ES POSIBLE DESTRUCUTURAR {OPEN, CLOSE})
  // PERO LO DEJAMOS COMO BACKDROP PARA QUE SEA MÁS ENTENDIBLE
  const backdrop = useBackdrop();

  // TAMBIÉN ES POSIBLE PASAR UN PARAMETRO PARA QUE ESTÉ ABIERTO
  // POR DEFECTO UNA VEZ CREADO EL COMPONENT
  // const backdrop = useBackdrop(true);

  // USAMOS UNA REFERENCIA PARA EL TIMER
  // SOLO ES PARA IMITAR UN TIEMPO DE CARGA
  const timerRef = useRef();

  // METODO PARA ABRIR EL BACKDROP Y CERRARLO DESÚES DE UN TIEMPO
  const openBackdrop = useCallback(() => {
    // UNICAMENTE DEBE APARECER UN OPEN EN CONSOLA CUANDO
    // SE CREA EL COMPONENTE
    console.log("opeeeen");

    // SE ABRE BACKDROP
    backdrop.open();

    // USAMOS EL TIMER PARA CERRARLO DESPÚES DE UN TIEMPO
    timerRef.current = setTimeout(() => {
      backdrop.close();
    }, 3000);

    //PASAMOS LAS DEPENDENCIAS EN EL CALLBACK
  }, [backdrop, timerRef]);

  // USAMOS UN EFECTO PARA MOSTAR EL BACKDROP
  // AL CREAR EL COMPONENTE
  useEffect(() => {
    openBackdrop();

    // ESTA FUNCION SE EJECUTA CUANDO SE DESMONTA EL COMPONENTE
    // CERRAMOS EL BACKDROP AL SALIR DEL COMPONENTE
    // YA QUE ESTÁ DISPONIBLE PARA TODOS SI NO SE CIERRA QUEDARÁ VISIBLE
    // EN CASO DE IR A OTRA PANTALLA
    return () => {
      backdrop.close();

      // LIMPIAMOS LA REFERENCIA (SOLO FINES DIDÁCTICOS)
      timerRef.current = null;
    };
  }, [openBackdrop, timerRef, backdrop]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={openBackdrop}>open</button>
    </div>
  );
}
