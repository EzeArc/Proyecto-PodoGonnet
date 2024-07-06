import React, { useContext, useEffect } from 'react'
import ContextoAdministrador from '../context/ContextLoginRegister'
import TablaTurnos from './TablaTurnos'
import "../pages/css/listaTurno.css"
const ListaTurnos = () => {
    const { arrayTurnos, listaTurnos } = useContext(ContextoAdministrador)
 console.log("hola")
    return (
        <div className="accordion my-5" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Lista de tus turnos
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {arrayTurnos && arrayTurnos.map((e) => (
                            e.estado === true ? <TablaTurnos listaTurnos={e} key={e.id} /> : null
                        )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListaTurnos