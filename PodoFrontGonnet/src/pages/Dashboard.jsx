import { useContext, useEffect, useState } from "react";
import ContextoAdministrador from "./../context/ContextLoginRegister";
import { TurnosAdmin } from "./../components/TurnosAdmin";
import { ServiceTable } from "./../components/ServiceTable";
import { RegisterService } from "../components/RegisterService";
import { AdminCardEdit } from "../components/AdminCardEdit";

const Dashboard = () => {
  const { usuarioLogeado, arrayTurnosAdmin } = useContext(
    ContextoAdministrador
  );

  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const handleSeleccionarServicio = (servicio) => {
    setServicioSeleccionado(servicio);
  };

  useEffect(() => {}, [arrayTurnosAdmin]);
  return (
    <>
      {usuarioLogeado.Auth === true && usuarioLogeado.Rol === "ADMIN" ? (
        <>
          <RegisterService />
          <TurnosAdmin />
          <ServiceTable onSeleccionarServicio={handleSeleccionarServicio} />
          {servicioSeleccionado && (
            <AdminCardEdit servicio={servicioSeleccionado} />
          )}
        </>
      ) : (
        <p>Se cerro tu sección</p>
      )}
    </>
  );
};

export default Dashboard;
