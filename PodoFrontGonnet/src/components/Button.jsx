import { useContext} from 'react'
import ContextoAdministrador from '../context/ContextLoginRegister'
import { Link} from 'react-router-dom'
import "../pages/css/button.css"

const Button = ({listaServicios}) => {
    const {seleccionarServicio } = useContext(ContextoAdministrador)

    return (
        <>
            <Link className='btn btnColor my-3  ms-3' to={'/servicio'} onClick={() => { seleccionarServicio(listaServicios)}}>Mas Informacion</Link>
            
        </>



    )
}

export default Button