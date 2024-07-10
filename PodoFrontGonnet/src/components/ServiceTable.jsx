import { useContext, useEffect } from "react";
import ContextoAdministrador from "./../context/ContextLoginRegister";
import "../pages/css/Tabla-Turnos-Admin.css";

export const ServiceTable = () => {
  const { eliminarServicioAdmin, listaServicios, listaServiciosAdmin } =
    useContext(ContextoAdministrador);

  useEffect(() => {
    listaServiciosAdmin();
  }, []);

  return (
    <section className="tabla-turnos-admin my-5">
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
              Servicios agregados
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {listaServicios && listaServicios.length > 0 ? (
                <table className="table align-middle">
                  <thead className="tabla-header">
                    <tr>
                      <th scope="col">Imagen</th>
                      <th scope="col">Nombre del servicio</th>
                      <th scope="col">Descripción del servicio</th>
                      <th scope="col">Costo</th>
                      <th scope="col">Estado del turno</th>
                      <th scope="col">Modificar</th>
                      <th scope="col">Cancelar</th>
                    </tr>
                  </thead>
                  {listaServicios.map((servicio) =>
                    servicio.estado === true ? (
                      <tbody key={servicio.id}>
                        <tr>
                          <td>
                            <img
                              className="service-img"
                              src={`data:${servicio.imagen.mime};base64,${servicio.imagen.content}`}
                              alt={servicio.nombre}
                            />
                          </td>
                          <td>{servicio.nombre}</td>
                          <td>{servicio.descripcion}</td>
                          <td>{servicio.costo}</td>
                          <td>
                            {servicio.estado === true ? (
                              <span>Habilitado</span>
                            ) : (
                              <span>Deshabilitado</span>
                            )}
                          </td>
                          <td>
                            <button
                              className="tabla-turno-btn admin-turno-btn"
                              // onClick={(e) => {
                              //   eliminarservicio(e, listaservicios.id);
                              // }}
                            >
                              <img
                                className="admin-icons"
                                src="/src/assets/ImagenesOptimizadas/icons/calendar-cog.svg"
                                alt="Modificar servicio"
                              />
                            </button>
                          </td>
                          <td>
                            <button
                              className="tabla-turno-btn admin-turno-btn"
                              onClick={(e) => {
                                eliminarServicioAdmin(e, servicio.id);
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
                    ) : (
                      <tbody key={servicio.id}>
                        <tr>
                          <td>
                            <img
                              className="service-img"
                              src={`data:${servicio.imagen.mime};base64,${servicio.imagen.content}`}
                              alt={servicio.nombre}
                            />
                          </td>
                          <td>{servicio.nombre}</td>
                          <td>{servicio.descripcion}</td>
                          <td>{servicio.costo}</td>
                          <td>
                            {servicio.estado === true ? (
                              <span>Habilitado</span>
                            ) : (
                              <span>Deshabilitado</span>
                            )}
                          </td>
                          <td>
                            <button
                              className="tabla-turno-btn admin-turno-btn"
                              // onClick={(e) => {
                              //   eliminarservicio(e, listaservicios.id);
                              // }}
                            >
                              <img
                                className="admin-icons"
                                src="/src/assets/ImagenesOptimizadas/icons/calendar-cog.svg"
                                alt="Modificar servicio"
                              />
                            </button>
                          </td>
                          <td>
                            <button
                              className="tabla-turno-btn admin-turno-btn"
                              onClick={(e) => {
                                eliminarServicioAdmin(e, servicio.id);
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
                    )
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
