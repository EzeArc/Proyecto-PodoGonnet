import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Servicios from "../pages/Servicios";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={`${process.env.VITE_BASE_URL}`} element={<Inicio />} />
        <Route
          path={`${process.env.VITE_BASE_URL}/login`}
          element={<Login />}
        />
        <Route
          path={`${process.env.VITE_BASE_URL}/registro`}
          element={<Register />}
        />
        <Route
          path={`${process.env.VITE_BASE_URL}/servicio/:id`}
          element={<Servicios />}
        />
      </Routes>
    </>
  );
};

export default PublicRoutes;
