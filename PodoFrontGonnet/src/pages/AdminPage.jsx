import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ContextoAdministrador from "../context/ContextLoginRegister";
import useTitle from "./../hooks/useTitle";

const AdminPage = () => {
  const { SubmintCrearServicio } = useContext(ContextoAdministrador);
  useTitle({ title: "Panel Administrador" });

  const [form, setform] = useState({
    nombre: "",
    descripcion: "",
    costo: 0,
    file: null,
  });

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleImageChange = (e) => {
    setform({
      ...form,
      file: e.target.files[0],
    });
  };

  return (
    <>
      <form className="row g-3" encType='"multipart/form-data"'>
        <div className="col">
          <label htmlFor="nombref" className="form-label">
            Nombre del servicio
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
            id="nombref"
            name="nombre"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="" className="form-label">
            Descripcion
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
            name="descripcion"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="direccionf" className="form-label">
            Costo
          </label>
          <input
            type="number"
            className="form-control"
            id="direccionf"
            placeholder="1234 Main St"
            name="costo"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="telefonof" className="form-label">
            Telefono
          </label>
          <input
            type="file"
            className="form-control"
            id="telefonof"
            placeholder="1234 Main St"
            name="file"
            onChange={handleImageChange}
          />
        </div>
        <div className="col-12">
          {
            <button
              className="btn btn-primary "
              onClick={(e) => {
                SubmintCrearServicio(e, form);
              }}
            >
              Enviar
            </button>
          }
          <Link className="btn btn-primary ms-3" to={"/"}>
            {" "}
            Ir Inicio
          </Link>
          <Link className="btn btn-primary ms-3" to={"/admin"}>
            {" "}
            Volver
          </Link>
        </div>
      </form>
    </>
  );
};

export default AdminPage;
