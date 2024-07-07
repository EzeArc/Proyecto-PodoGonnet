import Card from "./Card";
import "../pages/css/cards.css";
const Cards = ({ listaServicios }) => {
  return (
    <div className="card-section ">
      {listaServicios &&
        listaServicios.map((e) => <Card listaServicios={e} key={e.id} />)}
    </div>
  );
};
export default Cards;
