import RegisterService from "../components/RegisterService";
import { TurnosAdmin } from "./../components/TurnosAdmin";
import { UpdateService } from "./../components/UpdateService";
//import { useEffect } from "react";
import { useContext } from "react";
import ContextoAdministrador from "./../context/ContextLoginRegister";

const Dashboard = () => {
  const { usuarioLogeado } = useContext(ContextoAdministrador);

  // useEffect(() => {
  //   AuthuTokenYUsiario();
  // }, []);

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
