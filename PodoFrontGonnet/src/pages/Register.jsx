import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import ContextoAdministrador from "../context/ContextLoginRegister";
import "../pages/css/registroCss.css";
import useTitle from "./../hooks/useTitle";

const Register = () => {
  useTitle({ title: "Registro" });

  const { SubmitRegistro, AuthuTokenYUsiario, usuarioLogeado } = useContext(
    ContextoAdministrador
  );
  //funcion para ir actualizando el form registro
  const [form, setform] = useState({
    userName: "",
    name: "",
    email: "",
    password: "",
    repeatePassword: "",
  });
  ///

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  return (
    <>
      {/*             <form className="row g-3" action=''>

                <div className="col">
                    <label htmlFor="nombref" className="form-label">nombre de usuario</label>
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" id='nombref' name='userName' onChange={handleChange} />
                </div>
                <div className="col">
                    <label htmlFor="nombref" className="form-label">Nombre</label>
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" id='nombref' name='name' onChange={handleChange} />
                </div>
                <div className="col">
                    <label htmlFor="" className="form-label">email</label>
                    <input type="email" className="form-control" placeholder="Last name" aria-label="Last name" name='email' onChange={handleChange} />
                </div>
                <div className="col">
                    <label htmlFor="inputPassword4w" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4w" name='password' onChange={handleChange} />
                </div>
                <div className="col">
                    <label htmlFor="inputPassword4we" className="form-label">Repeteat Password</label>
                    <input type="password" className="form-control" id="inputPassword4we" name='repeatePassword' onChange={handleChange} />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary " onClick={(e) => { SubmitRegistro(e, form) }} >Enviar</button>
                    <Link className='btn btn-primary ms-3' to={'/'}  > Ir Inicio</Link>
                    <Link className='btn btn-primary ms-3' to={'/admin'}  > Volver</Link>
                </div>
            </form>
 */}

      <form>
        <div id="main2">
          <p id="code1">
            {" "}
            <span className="rotated-text">INGRESE SUS DATOS POR FAVOR !</span>
          </p>
          <div id="inset">
            <div>
              <input
                type="text"
                placeholder="nombre de usuario"
                id="exampleInputEmail1"
                name="userName"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="nombre"
                id="exampleInputEmail1"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="email"
                id="exampleInputEmail1"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="password"
                id="exampleInputEmail1"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="repetir password"
                id="exampleInputEmail1"
                name="repeatePassword"
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="registrobutton"
                onClick={(e) => {
                  SubmitRegistro(e, form);
                }}
              >
                Registrarse
              </button>
              <button type="submit" className="registrobutton">
                <Link to={"/"} className="Linkclass">
                  Ir a Inicio
                </Link>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
