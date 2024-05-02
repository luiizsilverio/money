import icons from "../../styles/icons";
import "./navbar.css";

export function NavBar() {
  return (
    <header className="navbar">
      <img src={icons.logo} alt="logotipo" />

      <div>
        <input type="text" className="input-busca" />
        <button className="btn btn-blue btn-busca">Buscar</button>
      </div>

      <div className="total">
        <div>Total de Gastos</div>
        <span className="titulo">R$ 1250,00</span>
      </div>
    </header>
  )
}