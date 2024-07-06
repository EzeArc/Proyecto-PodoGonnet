import React from 'react'
import { useContext } from 'react'
import ContextoAdministrador from '../context/ContextLoginRegister'

const TablaTurnos = ({ listaTurnos }) => {
const{eliminarTurno}=useContext(ContextoAdministrador)
    return (
        <table className="table">
            <thead>
                <tr>

                    <th scope="col">Nombre del servicio</th>
                    <th scope="col">hora del turno</th>
                    <th scope="col">costo</th>

                </tr>
            </thead>
            <tbody>
                <tr>

                    <td>{listaTurnos.servicioPodo.nombre}</td>
                    <td>{listaTurnos.startTime}</td>
                    <td>{listaTurnos.servicioPodo.costo}</td>
                    <td>
                        <button className='btn  btnColor' onClick={(e)=>{eliminarTurno(e,listaTurnos.id)}}>
                            Cancelar Turno
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TablaTurnos