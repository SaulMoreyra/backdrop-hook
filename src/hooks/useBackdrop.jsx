import { useContext, useEffect, useMemo } from "react";
import { BackdropContext } from "../context";

// EL HOOK PUEDE RECIBIR POR DEFECTO UN VALOR
// EN CASO DE QUE SE QUIERA ABIERTO CUANDO SE CREA EL COMPONENTE
// POR DEFECTO NO SE MUESTRA
export default function useBackdrop(isOpen = false) {
  // SE LLAMA EL CONTREXTO DEL BACKDROP Y SE DESCRUTURAN LOS METODOS DEL PROVIDER
  const { open, close } = useContext(BackdropContext);

  // USAMOS UN EFECTO PARA ABRIR EL BACKDROP SI EL VALOR
  // isOpen ES TRUE
  useEffect(() => {
    isOpen && open();
  }, [isOpen, open]);

  // USAMOS LA MEMORIZACIÓN DE LOS METODOS PARA ENVITAR RENDER LOOPS
  const backdrop = useMemo(
    () => ({
      open,
      close
    }),
    [open, close]
  );

  // RETORNAMOS LOS METODOS MEMORIZADOS
  return backdrop;
}
