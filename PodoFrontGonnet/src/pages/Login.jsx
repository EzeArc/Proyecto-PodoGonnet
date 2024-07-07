import { useContext, useEffect, useState } from "react";
import ContextoAdministrador from "../context/ContextLoginRegister";
import { Link, Navigate } from "react-router-dom";
import "../pages/css/login.css";
import useTitle from "../hooks/useTitle";
// FORM DE LOGIN
const formInciallogin = {
  userName: "",
  password: "",
};

// puede ser igual a null? para que arranque todo sin sesion

const Login = () => {
  useTitle({ title: "Login" });
  //todo lo que viene del back esta aca
  const { SubmitLogin, usuarioLogeado, AuthuTokenYUsiario } = useContext(
    ContextoAdministrador
  );

  useEffect(() => {
    AuthuTokenYUsiario();
    console.log(usuarioLogeado);
  }, []);

  //form y use State para form
  const [formlogin, setformlogin] = useState(formInciallogin);

  if (usuarioLogeado.Auth === true) {
    return <Navigate to="/" />;
  }

  //funcion para ir actualizando el form login
  const handleChangelogin = (e) => {
    setformlogin({
      ...formlogin,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/*  <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='userName' onChange={handleChangelogin} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={handleChangelogin} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={(e) => SubmitLogin(e, formlogin)}>
          inciar
        </button>
        <Link className='btn btn-primary' to={'/registro'}>Registrarse</Link>
      </form> */}

      <form>
        <div id="main">
          <p id="code">BIENVENIDO !</p>
          <div id="inset">
            <div>
              <input
                type="text"
                placeholder="Email address"
                id="exampleInputEmail1"
                name="userName"
                onChange={handleChangelogin}
              />
            </div>
            <div>
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
        </div>
      </form>
    </div>
  );
};

export default Login;
