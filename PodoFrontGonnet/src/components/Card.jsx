
import Button from './Button'
const Card = ({ listaServicios }) => {
  const imagenBase64 = listaServicios.imagen.content;

  // Convierte la imagen base64 en una URL de objeto
  const imagenURL = `data:${listaServicios.imagen.mime};base64,${imagenBase64}`;
  return (
    <div className="card-container">
    <img
      className="card-img"
      src={imagenURL}
      alt={listaServicios.imagen.name}
    />
    <img
      className="card-img2"
      src="/src/assets/ImagenesOptimizadas/spa-treatment-product-female-feet-hand-spa_1150-37700.jpg.url"
      alt="Spa de pies"
      width="300"
    />
    <div className="card-text-container">
      <h5 className="card-title1">{listaServicios.nombre}</h5>
      <p className="card-text1">{listaServicios.descripcion}
      </p>
    </div>
    <Button listaServicios={listaServicios.id} className='card-button' >Mas informacion</Button>
  </div>


 /*    <div className="col-2 claseCard p-0   ">
      <div className="card border-0">
        <img src={imagenURL} className="imagenDeInicio   " alt={listaServicios.imagen.name} />
        <div className="card-body">
          <h5 className="card-title">{listaServicios.nombre}</h5>
          <p className="card-text">{listaServicios.descripcion}</p>
        </div>
        <div className='d-flex justify-content-center'>
          <Button listaServicios={listaServicios.id} className=' btn btn-outline-dark btn-sm w-50 ' >Mas informacion</Button>
        
        </div>
      </div>
    </div> */
  )
}

export default Card