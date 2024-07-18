import { useContext } from "react";
import { Link } from "react-router-dom";
import ContextoAdministrador from "../context/ContextLoginRegister";
import "./css/nav.css";

const baseURL = "/Proyecto-PodoGonnet"; // Asegúrate de que esto coincide con tu base URL

const Navbar = () => {
  const { usuarioLogeado, logOut } = useContext(ContextoAdministrador);
  return (
    <header>
      <nav className="navbar1">
        <ul className="nav-links-items">
          <li className="nav-link-item btn">
            <Link className="active-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-link-item btn">
            <Link className="active-link" to="/sobre-nosotros">
              Sobre Nosotros
            </Link>
          </li>
        </ul>
        <img
          className="logo"
          src={`${baseURL}/assets/images/podoGonnet-logo.webp`}
          alt="Podo Estetica"
        />
        <ul className="nav-links-items">
          <li className="nav-link-item btn">
            <Link className="active-link" to={"/registro"}>
              Registrarse
            </Link>
          </li>
          <li className="nav-link-item btn">
            {usuarioLogeado.Auth == false ? (
              <>
                <Link className="active-link" to={"/login"}>
                  Login
                </Link>{" "}
              </>
            ) : (
              <Link
                onClick={() => {
                  logOut();
                }}
              >
                Cerrar Sesion
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
