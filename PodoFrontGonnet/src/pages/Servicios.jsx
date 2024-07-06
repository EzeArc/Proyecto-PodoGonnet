
import { useContext } from 'react';
import ContextoAdministrador from '../context/ContextLoginRegister';
import { Link } from 'react-router-dom';
import "../pages/css/servicios.css"
import Calendario from '../components/Calendario';
const Servicios = () => {
  const { servicio, usuarioLogeado } = useContext(ContextoAdministrador)
  if (!servicio) {
    return <div>Cargando...Servicio</div>
  }
  const imagenBase64 = servicio.imagen.content;
  const imagenURL = `data:${servicio.imagen.mime};base64,${imagenBase64}`;
  return (
    <>
      <section className="hero-section1">
        <div className="hero-container1">
          <img
            className="hero-img"
            src={imagenURL}
            alt="Spa de pies"
          />
          <img
            className="hero-img2"
            src="/src/assets/ImagenesOptimizadas/spa-treatment-product-female-feet-hand-spa_1150-37700.jpg.url"
            alt="Spa de pies"
          />
          <div className="text-container">
            <h5 className="hero-title">{servicio.nombre}</h5>
            <p className="hero-text">{servicio.descripcion}
            </p>
            <p className="hero-text-price">
              Valor del servicio: <small className="price">{servicio.costo}</small>
            </p>
          </div>
        </div>
      </section>

      <div className='calendar-section'>{
        usuarioLogeado.Auth === false ?
          <Link className='hero-button' to={'/login'}>Contratar</Link>
          : <Calendario servicioId={servicio.id} />
      }</div>
    </>


    /*   <div className="row justify-content-center ">
  
        <div className="col-12">
          <h1 className="text-center">El servicio que desea contratar es el siguiente</h1>
        </div>
        <div className="col-12 d-flex justify-content-center mb-4">
          <div className="card text-center cardClase">
            <div className="d-flex justify-content-center">
              <img src={imagenURL} className="card-img-top imagenContratar" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title text-dark text-uppercase fw-bold">{servicio.nombre}</h5>
              <p className="textcss text-center">{servicio.descripcion}</p>
              <p className="textcss text-center" >
                <small>El valor del servicio es: ${servicio.costo}</small>
              </p>
              {
              usuarioLogeado.Auth === false ?
                <Link className='btn btnColor ms-3' to={'/login'}>Contratar</Link>
                :<Calendario servicioId={servicio.id} />
            }
            </div>
          </div>
        </div>
      
      </div> */
  )
}

export default Servicios

