import { useContext, useEffect } from "react";
import { format } from "date-fns";

import ContextoAdministrador from "../context/ContextLoginRegister";
import "../pages/css/Tabla-Turnos-Admin.css";

export const TurnosAdmin = () => {
  const { arrayTurnosAdmin, listaTurnosAdmin, eliminarTurnoAdmin } = useContext(
    ContextoAdministrador
  );
  useEffect(() => {
    listaTurnosAdmin()
  }, [])



  return (
    <section className="tabla-turnos-admin">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Turnos reservados
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {arrayTurnosAdmin &&
                arrayTurnosAdmin.length > 0 &&
                arrayTurnosAdmin.some((e) => e.estado === true) ? (
                <table className="table align-middle">
                  <thead className="tabla-header">
                    <tr>
                      <th scope="col">Nombre del Cliente</th>
                      <th scope="col">Nombre del servicio</th>
                      <th scope="col">Hora del turno</th>
                      <th scope="col">Costo</th>
                      <th scope="col">Estado del turno</th>
                      <th scope="col">Modificar</th>
                      <th scope="col">Cancelar</th>
                    </tr>
                  </thead>
                  {arrayTurnosAdmin.map((turno) =>
                    turno.estado === true ? (
                      <tbody key={turno.id}>
                        <tr>
                          <td>{turno.usuario.nombre}</td>
                          <td>{turno.id}</td>
                          <td>
                            {format(
                              new Date(turno.startTime),
                              "hh:mm a dd/MM/yyyy"
                            )}
                          </td>
                          <td>{turno.servicioPodo.costo}</td>
                          <td>
                            {turno.estado === true ? (
                              <span>Confirmado</span>
                            ) : (
                              <span>Cancelado</span>
                            )}
                          </td>
                          <td>
                            <button
                              className="tabla-turno-btn admin-turno-btn"
                            // onClick={(e) => {
                            //   eliminarTurno(e, listaTurnos.id);
                            // }}
                            >
                              <img
                                className="admin-icons"
                                src="/src/assets/ImagenesOptimizadas/icons/calendar-cog.svg"
                                alt="Modificar Turno"
                              />
                            </button>
                          </td>
                          <td>
                            <button
                              className="tabla-turno-btn admin-turno-btn"
                              onClick={(e) => {
                                eliminarTurnoAdmin(e, turno.id);
                              }}
                            >
                              <img
                                className="admin-icons"
                                src="/src/assets/ImagenesOptimizadas/icons/calendar-x.svg"
                                alt="Eliminar Turno"
                              />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    ) : null
                  )}
                </table>
              ) : (
                <p>No tienes turnos reservados</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
