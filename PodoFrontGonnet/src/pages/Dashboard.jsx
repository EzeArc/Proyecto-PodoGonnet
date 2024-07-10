import { useContext, useEffect } from "react";
import ContextoAdministrador from "./../context/ContextLoginRegister";
import { TurnosAdmin } from "./../components/TurnosAdmin";
import { ServiceTable } from "./../components/ServiceTable";
import { RegisterService } from "../components/RegisterService";

const Dashboard = () => {
  const { usuarioLogeado, arrayTurnosAdmin } = useContext(
    ContextoAdministrador
  );
  useEffect(() => {}, [arrayTurnosAdmin]);
  return (
    <>
      {usuarioLogeado.Auth === true && usuarioLogeado.Rol === "ADMIN" ? (
        <>
          <RegisterService />
          <ServiceTable />
          <TurnosAdmin />
        </>
      ) : (
        <p>Se cerro tu sección</p>
      )}
    </>
  );
};

export default Dashboard;
