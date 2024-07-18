import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Login from "../pages/Login";
import Servicios from "../pages/Servicios";
import Dashboard from "../pages/Dashboard";
import ContextoAdministrador from "./../context/ContextLoginRegister";
import { useContext } from "react";

const AuthRoutes = () => {
  const { usuarioLogeado } = useContext(ContextoAdministrador);
  console.log(usuarioLogeado);
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path={`${process.env.VITE_BASE_URL}/servicio/:id`}
          element={<Servicios />}
        />
        <Route
          path={`${process.env.VITE_BASE_URL}/login`}
          element={<Login />}
        />
        {usuarioLogeado.Auth === true && usuarioLogeado.Rol === "ADMIN" ? (
          <Route
            path={`${process.env.VITE_BASE_URL}/admin/:section`}
            element={<Dashboard />}
          />
        ) : (
          <Route
            path={`${process.env.VITE_BASE_URL}/login`}
            element={<Login />}
          />
        )}
      </Routes>
    </>
  );
};

export default AuthRoutes;
