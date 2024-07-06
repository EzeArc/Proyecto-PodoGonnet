
import { Link } from 'react-router-dom'
import Card from './Card'
import "../pages/css/cards.css"
const Cards = ({ listaServicios }) => {
    return (
        <div className="card-section " >
           
            {
                listaServicios && listaServicios.map(
                    (e) => (
                        <Card listaServicios={e} key={e.id} />
                    )
                )
            }

        </div>
    )
}
/* <main class="grids-card">
      <section class="card-section">
        <div class="card-container">
          <img
            class="card-img"
            src="/images/spa-treatment-product-female-feet-hand-spa_1150-37700.jpg"
            alt="Spa de pies"
          />
          <img
            class="card-img2"
            src="/images/spa-treatment-product-female-feet-hand-spa_1150-37700.jpg"
            alt="Spa de pies"
            width="300"
          />
          <div class="card-text-container">
            <h5 class="card-title">Spa de pies</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              iure sed architecto molestiae nostrum adipisci repellendus?
            </p>
            <p class="card-text-price">
              Valor del servicio: <small class="price">$1500</small>
            </p>
          </div>
          <a class="card-button" href="contratar">Contratar</a>
        </div>
</section>
</main> */
export default Cards