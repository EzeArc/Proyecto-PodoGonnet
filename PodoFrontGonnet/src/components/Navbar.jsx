import { Link } from "react-router-dom";
import "../pages/css/nav.css";
import { useContext } from "react";
import ContextoAdministrador from "../context/ContextLoginRegister";

const Navbar = () => {
  const { usuarioLogeado, logOut } = useContext(ContextoAdministrador);
  return (
    <header>
      <nav className="navbar1">
        <ul className="nav-list2">
          <li className="nav-item2 btn">
            <Link to="/">Inicio</Link>
          </li>
          <li className="nav-item btn">
            <Link to="/sobre-nosotros">Sobre Nosotros</Link>
          </li>
        </ul>
        <img
          className="logo"
          src="/src/assets/ImagenesOptimizadas/CC2E1AA6-02E9-4DF2-BBD6-8BD62A378986.webp"
          alt="Podo Estetica"
        />
        <ul className="nav-list2">
          <li className="nav-item2 btn">
            <Link to={"/registro"}>Registrarse</Link>
          </li>
          <li className="nav-item2 btn">
            {usuarioLogeado.Auth == false ? (
              <>
                <Link to={"/login"}>Login</Link>{" "}
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

    /*     <div className="row justify-content-center align-items-center my-3 nav">
    
          <div className="col-3 j d-flex justify-content-center">
            <Link to={"/"} className="botonNav  ">Inicio</Link>
            <Link to={"/nosotros"} className="botonNav ">Nosotros</Link>
          </div>
          <div className="col-3 d-flex justify-content-center imagenNavContainer">
            <img src="/src/assets/ImagenesOptimizadas/CC2E1AA6-02E9-4DF2-BBD6-8BD62A378986.webp" alt="" className="imagenNav" />
          </div>
          <div className="col-3 d-flex justify-content-center">
           {usuarioLogeado.Auth==false ? <> <Link to={"/registro"} className=" botonNav ">Registrarse</Link> 
            <Link to={"/login"}className=" botonNav ">Login</Link> </> :
             <>
            <Link className=" botonNav "onClick={()=>{logOut()}} >Cerrar Sesion</Link>  </>}
          </div>
        </div> */
  );
};

export default Navbar;
