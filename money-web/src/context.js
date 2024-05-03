import { useContext, createContext, useState } from "react";

const Contexto = createContext({});

function ContextoProvider({ children }) {
  const [busca, setBusca] = useState("");
  const [vTotal, setVtotal] = useState(0);
  const [showBusca, setShowBusca] = useState(true);

  return (
    <Contexto.Provider value={{ 
      busca, 
      setBusca, 
      vTotal, 
      setVtotal,
      showBusca, 
      setShowBusca
    }}>
      { children }
    </Contexto.Provider>
  )
}

const useContexto = () => useContext(Contexto);

export { ContextoProvider, useContexto };
