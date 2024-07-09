import { useContext, useEffect, useState } from "react";
import ContextoAdministrador from "../context/ContextLoginRegister";
import { Navigate } from "react-router-dom";
import "../pages/css/login.css";
import useTitle from "../hooks/useTitle";

const formInciallogin = {
  userName: "",
  password: "",
};

const Login = () => {
  useTitle({ title: "Login" });
  //todo lo que viene del back esta aca
  const { SubmitLogin, usuarioLogeado, AuthuTokenYUsiario } = useContext(
    ContextoAdministrador
  );

  useEffect(() => {
    AuthuTokenYUsiario();
  }, []);

  //form y use State para form
  const [formlogin, setformlogin] = useState(formInciallogin);

  if (usuarioLogeado.Auth === true) {
    return <Navigate to="/" />;
  }

  const handleChangelogin = (e) => {
    setformlogin({
      ...formlogin,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="d-flex justify-content-center align items-center mt-5">
      <form id="main">
        <div id="inset">
          <p id="code">BIENVENIDO</p>
          <div className="login-input">
            <input
              type="text"
              placeholder="Email address"
              id="exampleInputEmail1"
              name="userName"
              onChange={handleChangelogin}
            />
            <input
              type="password"
              placeholder="Password"
              id="exampleInputPassword1"
              name="password"
              onChange={handleChangelogin}
            />
            <input
              type="submit"
              value="Sign in"
              onClick={(e) => SubmitLogin(e, formlogin)}
            />
          </div>
        </div>
      </form>
    </main>
  );
};

export default Login;
