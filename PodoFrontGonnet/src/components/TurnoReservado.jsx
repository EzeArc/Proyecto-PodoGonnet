import { useContext } from "react";
import ContextoAdministrador from "../context/ContextLoginRegister";

const TurnoReservado = ({ listaTurnos }) => {
  const { eliminarTurno } = useContext(ContextoAdministrador);
  return (
    <tbody>
      <tr>
        <td>{listaTurnos.servicioPodo.nombre}</td>
        <td>{listaTurnos.startTime}</td>
        <td>{listaTurnos.servicioPodo.costo}</td>
        <td>
          <button
            className="tabla-turno-btn"
            onClick={(e) => {
              eliminarTurno(e, listaTurnos.id);
            }}
          >
            Cancelar Turno
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default TurnoReservado;
