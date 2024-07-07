import { Link } from "react-router-dom";
import { useContext } from "react";
import ContextoAdministrador from "./../context/ContextLoginRegister";
// import Button from "./Button";

const Card = ({ listaServicios }) => {
  const { nombre, imagen, descripcion, costo, id } = listaServicios;
  const { seleccionarServicio } = useContext(ContextoAdministrador);

  const imagenBase64 = imagen.content;

  // Convierte la imagen base64 en una URL de objeto
  const imagenURL = `data:${imagen.mime};base64,${imagenBase64}`;
  return (
    <div className="card-container">
      <img className="card-img" src={imagenURL} alt={imagen.name} />
      <img
        className="card-img2"
        src="/src/assets/ImagenesOptimizadas/spa-treatment-product-female-feet-hand-spa_1150-37700.jpg.url"
        alt="Spa de pies"
        width="300"
      />
      <div className="card-text-container">
        <h5 className="card-title1">{nombre}</h5>
        <p className="card-text1">{descripcion}</p>
      </div>
      <Link
        to={`/servicio/${id}`}
        className="card-button"
        onClick={() => {
          seleccionarServicio(id);
        }}
      >
        Mas informacion
      </Link>
    </div>
  );
};

export default Card;
