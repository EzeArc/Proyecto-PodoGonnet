import React, { useState, useEffect, useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../pages/css/calendario.css';
import ContextoAdministrador from '../context/ContextLoginRegister';

const Calendario = ({ servicioId }) => {
    const [date, setDate] = useState(new Date());
    const [turno, setturno] = useState([]);
    const { usuarioLogeado } = useContext(ContextoAdministrador)
    console.log(servicioId)
    useEffect(() => {
        fetchAppointments();
    }, [date]);

    const fetchAppointments = async () => {
        const token = localStorage.getItem('auth_token'); // Asume que el token está almacenado en localStorage
        try {
            const response = await fetch(`http://localhost:8080/Turnos/turnoDelDia/${date.toISOString().split('T')[0]}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setturno(data);
            console.log("turnos disponibles")
            console.log(data);
        } catch (error) {
            console.error('Error fetching appointments', error);
        }
    };



    const bookAppointment = async (turnoId) => {
        const token = localStorage.getItem('auth_token'); // Asume que el token está almacenado en localStorage
        console.log(usuarioLogeado.id)
        try {
            const response = await fetch(`http://localhost:8080/Turnos/reservarTurno/${turnoId}/${servicioId}/${usuarioLogeado.id}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                fetchAppointments(); // Refresh appointments
            } else {
                console.error('Error booking appointment');
            }
        } catch (error) {
            console.error('Error booking appointment', error);
        }
    };

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const dateString = date.toISOString().split('T')[0];
            const appointment = turno.find(app => app.fechaInicio && app.fechaInicio.startsWith(dateString));
            if (appointment) {
                return appointment.estado ? 'booked' : 'available';
            } else {
                return 'hide-day'; // Agregar una clase para ocultar los días sin citas
            }
        }
        return null;
    };



    const renderAppointments = () => {
        const appointmentsForDay = turno.filter(app => new Date(app.startTime).toDateString() === date.toDateString());
        return appointmentsForDay.map(app => (


            <div key={app.id}
                className="date-container animateanimated animatefadeIn animate__delay-5s"
            >
                <p className="date-text">
                    {app.id}-{new Date(app.startTime).toLocaleTimeString()} -  {new Date(app.endTime).toLocaleTimeString()}
                    <button className="date-button" onClick={() => bookAppointment(app.id)} disabled={app.estado}>  {app.estado ? 'Reservado' : 'Reservar'}</button>
                </p>
            </div>
            /*             <div key={app.id} className=''>
                            <table className="table table-danger  border-radius-custom">
                                <thead >
                                    <tr >
                                        <th scope="col">Inicio del turno</th>
                                        <th scope="col">Fin del turno</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr>
                                        <td>{new Date(app.startTime).toLocaleTimeString()}</td>
                                        <td>{new Date(app.endTime).toLocaleTimeString()}</td>
                                        <td>                {usuarioLogeado.Rol === 'USER' ?
                                <button className='btnTabla' onClick={() => bookAppointment(app.id)} disabled={app.estado}>
                                    {app.estado ? 'Reservado' : 'Reservar'}
                                </button>
                                : null}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */
        ));
    };


    return (
        <div className='d-flex flex-column align-items-center'>

            <Calendar
                onChange={setDate}
                value={date}
                tileClassName={tileClassName}
            />
            <div className='mt-1'>
                {renderAppointments()}</div>
        </div>
    );
}

export default Calendario