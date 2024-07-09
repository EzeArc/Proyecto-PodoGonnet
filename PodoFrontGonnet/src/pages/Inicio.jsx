import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ContextoAdministrador from "../context/ContextLoginRegister";
import useTitle from "./../hooks/useTitle";
import Cards from "../components/Cards";
import Introduccion from "../components/Introduccion";
import ListaTurnos from "../components/ListaTurnos";
import Seccion from "../components/Seccion";
import "./css/inicio.css";

const Inicio = () => {
  useTitle({ title: "Inicio" });

  const {
    usuarioLogeado,
    AuthuTokenYUsiario,
    listaServicios,
    serviciosBack,
    listaTurnos,
  } = useContext(ContextoAdministrador);

  useEffect(() => {
    AuthuTokenYUsiario();
    serviciosBack();
    listaTurnos();
  }, []);

  //AuthuTokenYUsiario()
  /* 
  1) BUSCAR SI HAY TOKEN EN LOCALSTRORAGE
  2) TRAER EL LOCAL SI HAY
  3) MANDAR A VALIDAR EL TOKEN SI EXPIRO O NO 
  4) TRAER EL USUARIO SI EL TOKEN NO EXPIRO
  5) RENDERIZAR COMPONENTE CORRESPONDIENTE AL USUARIO LOGEADO
  */

  return (
    <>
      <Seccion />
      <Introduccion />
      <section className="d-flex justify-content-center my-5 align-items-center">
        {usuarioLogeado.Auth === true && usuarioLogeado.Rol === "ADMIN" ? (
          <div>
            <Link className="btn btn-primary ms-3" to={"/admin"}>
              Agregar servicios
            </Link>
            <Link className="btn btn-primary ms-3" to={"/dashboard"}>
              Ver Turnos
            </Link>
          </div>
        ) : null}
        {usuarioLogeado.Auth === true && usuarioLogeado.Rol === "USER" ? (
          <ListaTurnos />
        ) : null}
      </section>
      <Cards listaServicios={listaServicios} />
    </>
  );
};
export default Inicio;
