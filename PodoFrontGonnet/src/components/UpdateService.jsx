import "../pages/css/Tabla-Turnos-Admin.css";

export const UpdateService = () => {
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
              Servicios agregados
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <table className="table align-middle">
                <thead className="tabla-header">
                  <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Nombre del servicio</th>
                    <th scope="col">Costo</th>
                    <th scope="col">Modificar</th>
                    <th scope="col">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Imagen</td>
                    <td>Servicio</td>
                    <td>Costo</td>
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
                        // onClick={(e) => {
                        //   eliminarTurno(e, listaTurnos.id);
                        // }}
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
              </table>
              <p>No tienes turnos reservados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
