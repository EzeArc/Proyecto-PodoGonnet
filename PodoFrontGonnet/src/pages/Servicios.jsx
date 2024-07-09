import { useEffect, useContext } from "react";
import ContextoAdministrador from "../context/ContextLoginRegister";
import { Link, useParams } from "react-router-dom";
import "../pages/css/servicios.css";
import Calendario from "../components/Calendario";
import useTitle from "./../hooks/useTitle";
const Servicios = () => {
  const { servicio, seleccionarServicio, usuarioLogeado, AuthuTokenYUsiario } =
    useContext(ContextoAdministrador);
  const { id } = useParams();

  useEffect(() => {
    if (!servicio || servicio.id !== id) {
      // Esto solo llama seleccionarServicio si el nombre del servicio no coincide con el actual
      seleccionarServicio(id);
      AuthuTokenYUsiario();
    }
  }, [id]);

  useTitle({ title: servicio ? servicio.nombre : "Cargando..." });

  if (!servicio) {
    return <div>Cargando...Servicio</div>;
  }

  const imagenBase64 = servicio.imagen.content;
  const imagenURL = `data:${servicio.imagen.mime};base64,${imagenBase64}`;
  return (
    <>
      <section className="hero-section1">
        <div className="hero-container1">
          <img className="hero-img" src={imagenURL} alt="Spa de pies" />
          <img
            className="hero-img2"
            src="/src/assets/ImagenesOptimizadas/spa-treatment-product-female-feet-hand-spa_1150-37700.jpg.url"
            alt="Spa de pies"
          />
          <div className="text-container">
            <h5 className="hero-title">{servicio.nombre}</h5>
            <p className="hero-text">{servicio.descripcion}</p>
            <p className="hero-text-price">
              Valor del servicio:
              <small className="price">{servicio.costo}</small>
            </p>
          </div>
        </div>
      </section>

      {usuarioLogeado.Auth === false ? (
        <Link className="hero-button" to={"/login"}>
          Contratar
        </Link>
      ) : (
        <Calendario servicioId={servicio.id} />
      )}
    </>
  );
};

export default Servicios;
