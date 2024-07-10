import RegisterService from "../components/RegisterService";
import { TurnosAdmin } from "./../components/TurnosAdmin";
import { UpdateService } from "./../components/UpdateService";
//import { useEffect } from "react";
import { useContext, useEffect } from "react";
import ContextoAdministrador from "./../context/ContextLoginRegister";
import ListaTurnos from "../components/ListaTurnos";

const Dashboard = () => {
  const { usuarioLogeado, listaTurnosAdmin, arrayTurnosAdmin } = useContext(ContextoAdministrador);
  useEffect(() => {

  }, [arrayTurnosAdmin]);
  return (
    <>
      {usuarioLogeado.Auth === true && usuarioLogeado.Rol === "ADMIN" ? (
        <>
          <RegisterService />
          <UpdateService />
          <TurnosAdmin />
        </>
      ) : (
        <p>Se cerro tu sección</p>
      )}
    </>
  );
};

export default Dashboard;
