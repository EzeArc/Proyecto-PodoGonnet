import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Login from "../pages/Login";
import Servicios from "../pages/Servicios";
import Dashboard from "../pages/Dashboard";

const AuthenticateRuters = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/admin" element={<Dashboard />} />
        {/* <Route path="/servicio" element={<Servicios />} /> */}
        <Route path="/servicio/:id" element={<Servicios />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default AuthenticateRuters;
