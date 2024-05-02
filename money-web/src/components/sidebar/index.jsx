import { Link } from "react-router-dom";
import icons from "../../styles/icons.js";
import "./sidebar.css";

function Sidebar() {
  return (
    <section className="sidebar">
      <Link to="/">
        <img src={icons.home} className="icon" alt="Início" />
      </Link>
      <Link to="/despesa/add">
        <img src={icons.add} className="icon" alt="Incluir" />
      </Link>
      <Link to="#"><img src={icons.config} className="icon" alt="Configurações" /></Link>
      <Link to="#"><img src={icons.logout} className="icon" alt="Logout" /></Link>
    </section>
  )
}

export { Sidebar }