import { useContext, useEffect } from "react";
import ContextoAdministrador from "../context/ContextLoginRegister";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import AuthRoutes from "./AuthRoutes";

const AppRouters = () => {
  const { usuarioLogeado, AuthuTokenYUsiario, serviciosBack, listaTurnos } = useContext(ContextoAdministrador);

  useEffect(() => {
    AuthuTokenYUsiario();
  }, []);

  return (
    <Routes>
      {usuarioLogeado.Auth === false ? (
        <Route path="/*" element={<PublicRoutes />} />
      ) : (
        <Route path="/*" element={<AuthRoutes />} />
      )}
      {/* <Route path='/login' element={<Navigate to='/inicio'/>} /> */}
    </Routes>
  );
};

export default AppRouters;
