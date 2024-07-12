import { createContext, useEffect, useState } from "react";
import { Await } from "react-router-dom";

import { get, getToken, post, postImagen, put } from "../utils/http";

// http://localhost:8080/api/v1/auth/authenticate
//url para hacer login
const urlPostLogin = "http://localhost:8080/api/v1/auth/authenticate";
const urlVerificarToken = `http://localhost:8080/api/v1/auth/validate?jwt=`;
const urlCrearServicio = "http://localhost:8080/adminController/crearServicio";
const urlCrearUsuario = "http://localhost:8080/api/v1/register";
const urlListaServicios = "http://localhost:8080/portal/listaSerivicios";
const urlServicioGet = "http://localhost:8080/portal/servicioPodo/";
const urlBackListaTurno = "http://localhost:8080/Turnos/listaTurnos/";
const urlBackCancelarTurno = "http://localhost:8080/Turnos/cancelarTurno/";
const urlBackListaTurnosAdmin =
  "http://localhost:8080/adminController/listaTurnoAdmin";
const urlBackCancelarTurnoAdmin =
  "http://localhost:8080/adminController/AltaBaja/";
const urlBackListaServiciosAdmin =
  "http://localhost:8080/adminController/listaServiciosAdmin";
const urlBackDarDeBajaServicioAdmin =
  "http://localhost:8080/adminController/AltaBajaServicio/";
//creo los usuarios para recibir la data del back
const usuarioLogin = {
  id: "",
  userName: "",
  jwt: "",
  Rol: "",
  Auth: false,
};

const ContextoAdministrador = createContext();

const ContextLoginRegister = ({ children }) => {
  // creo el estado de usarios
  const [usuarioLogeado, setUsuarioLogeado] = useState(usuarioLogin);
  const [servicio, setServicio] = useState(null);
  const [listaServicios, setlistaServicios] = useState([]);
  const [arrayTurnos, setarrayTurnos] = useState([]);
  const [arrayTurnosAdmin, setArrayTurnosAdmin] = useState([]);

  const SubmitRegistro = async (e, formRegistro) => {
    e.preventDefault();
    try {
      const respuesta = await post(urlCrearUsuario, formRegistro);
      if (respuesta) {
        window.location.href = "/login";
      }
    } catch (error) {
      console.log(error);
    }
  };

  /// traigo los servicios del back para mostrarlos en inicio
  const serviciosBack = async () => {
    try {
      const respuesta = await get(urlListaServicios);
      setlistaServicios(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  // ACCION PARA LOGUEARSE Y RECIBIR EL TOKEN
  const SubmitLogin = async (e, formlogin) => {
    e.preventDefault();
    try {
      const respuesta = await post(urlPostLogin, formlogin);

      const usuarioRespuesta = {
        id: respuesta.id,
        userName: respuesta.userName,
        jwt: respuesta.jwt,
        Rol: respuesta.rol,
        Auth: true,
      };

      setUsuarioLogeado(usuarioRespuesta);
      window.localStorage.setItem("auth_token", respuesta.jwt);
    } catch (error) {
      console.log("No existe ese usuario maquina (linea 48");
    }
  };

  //VERIFICACION DE LOGIN AUTOMATICA
  const AuthuTokenYUsiario = async () => {
    if (verificarToken()) {
      let token = verificarToken();
      const urlFinal = urlVerificarToken + token;
      const respuesta = await VerificarExpericacionToken(urlFinal);
      const usuarioRespuesta = {
        id: respuesta.id,
        userName: respuesta.userName,
        jwt: respuesta.jwt,
        Rol: respuesta.rol,
        Auth: true,
      };

      setUsuarioLogeado(usuarioRespuesta);
    }
  };

  const verificarToken = () => {
    let jwt = window.localStorage.getItem("auth_token");
    if (!jwt) return false;

    return jwt;
  };

  const VerificarExpericacionToken = async (urlVerificarToken) => {
    const respuesta = await get(urlVerificarToken);
    return respuesta;
  };

  const SubmintCrearServicio = async (e, serviPodo) => {
    e.preventDefault();
    try {
      const token = verificarToken();
      const respuest = await postImagen(urlCrearServicio, serviPodo, token);
      if (respuest) {
        window.location.href = "/login";
      }
      return console.log(respuest);
    } catch (error) {
      console.log("error en cath de postIamgen");
    }
  };

  const seleccionarServicio = async (idServicio) => {
    try {
      const urlServicioId = urlServicioGet + idServicio;
      const respuest = await get(urlServicioId);
      setServicio(respuest);
    } catch (error) {
      console.log(error);
    }
  };

  const listaServiciosAdmin = async () => {
    try {
      const urlback = urlBackListaServiciosAdmin;

      let jwt = window.localStorage.getItem("auth_token");
      const respuesta = await getToken(urlback, jwt);
      setlistaServicios(respuesta);
    } catch (error) {
      console.log("error al cargar la lista de servicios en el panel admin");
    }
  };

  const eliminarServicioAdmin = async (e, servicioId) => {
    try {
      e.preventDefault();
      let jwt = window.localStorage.getItem("auth_token");
      const urlCancelarServicio = urlBackDarDeBajaServicioAdmin + servicioId;
      const respuesta = await put(urlCancelarServicio, jwt);
      listaServiciosAdmin();
    } catch (error) {
      console.log(
        "error al eliminar un servicios de la lista de servicios en el admin dashboard "
      );
    }
  };

  const listaTurnos = async () => {
    try {
      const urlback = urlBackListaTurno + usuarioLogeado.id;

      let jwt = window.localStorage.getItem("auth_token");
      const respuesta = await getToken(urlback, jwt);
      setarrayTurnos(respuesta);
    } catch (error) {
      console.log("error 171");
    }
  };

  const eliminarTurno = async (e, turnoId) => {
    try {
      e.preventDefault();
      let jwt = window.localStorage.getItem("auth_token");
      const urlCancelarTurno = urlBackCancelarTurno + turnoId;
      const respuesta = await getToken(urlCancelarTurno, jwt);
      listaTurnos();
    } catch (error) {
      console.log("error ");
    }
  };

  const listaTurnosAdmin = async () => {
    try {
      const urlback = urlBackListaTurnosAdmin;

      let jwt = window.localStorage.getItem("auth_token");
      const respuesta = await getToken(urlback, jwt);
      setArrayTurnosAdmin(respuesta);
    } catch (error) {
      console.log("Error al traer los turnos del Administrador");
    }
  };

  const eliminarTurnoAdmin = async (e, turnoId) => {
    try {
      e.preventDefault();
      let jwt = window.localStorage.getItem("auth_token");
      const urlCancelarTurno = urlBackCancelarTurnoAdmin + turnoId;
      const respuesta = await put(urlCancelarTurno, jwt);
      listaTurnosAdmin();
    } catch (error) {
      console.log("error ");
    }
  };

  const logOut = () => {
    window.localStorage.removeItem("auth_token");
    window.location.href = "/login";
  };

  const submitModificarServicio = async (e, form) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", form.id);
    formData.append("nombre", form.nombre);
    formData.append("descripcion", form.descripcion);
    formData.append("costo", form.costo);
    formData.append("file", form.file);
    try {
      let token = localStorage.getItem("auth_token");
      const response = await fetch(
        "http://localhost:8080/adminController/ModificarServicio",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      listaServiciosAdmin()

      if (response.ok) {
        console.log("Servicio modificado con éxito:");
        window.location.hash = "#TablaServicios";
      } else {
        console.error("Error al modificar el servicio");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const data = {
    VerificarExpericacionToken,
    SubmitLogin,
    usuarioLogeado,
    AuthuTokenYUsiario,
    SubmintCrearServicio,
    SubmitRegistro,
    listaServicios,
    serviciosBack,
    seleccionarServicio,
    servicio,
    arrayTurnos,
    listaTurnos,
    eliminarTurno,
    arrayTurnosAdmin,
    listaTurnosAdmin,
    eliminarTurnoAdmin,
    listaServiciosAdmin,
    eliminarServicioAdmin,
    logOut,
    submitModificarServicio
  };
  return (
    <ContextoAdministrador.Provider value={data}>
      {children}
    </ContextoAdministrador.Provider>
  );
};

export { ContextLoginRegister };
export default ContextoAdministrador;
