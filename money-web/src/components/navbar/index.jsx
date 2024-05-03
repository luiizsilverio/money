import { useState } from "react";
import icons from "../../styles/icons";
import { useContexto } from "../../context";
import "./navbar.css";

export function NavBar() {
  const { setBusca, vTotal, showBusca } = useContexto();
  const [filtro, setFiltro] = useState("");

  return (
    <header className="navbar">
      <img src={icons.logo} alt="logotipo" />

      {showBusca && <>
        <div>
          <input 
            type="text" 
            className="input-busca" 
            value={filtro} 
            onChange={(ev) => setFiltro(ev.target.value)}
          />
          <button 
            className="btn btn-blue btn-busca" 
            onClick={() => setBusca(filtro)}
          >
            Buscar
          </button>
        </div>

        <div className="total">
          <div>Total de Gastos</div>
          <span className="titulo">
            {
              vTotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })
            }
          </span>
        </div>
      </>}

    </header>
  )
}