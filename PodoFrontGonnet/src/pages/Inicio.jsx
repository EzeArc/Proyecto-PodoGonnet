import { useContext, useEffect } from 'react'
import "./css/inicio.css"
import ContextoAdministrador from '../context/ContextLoginRegister'
import Cards from '../components/Cards'

import { Link } from 'react-router-dom'

import ListaTurnos from '../components/ListaTurnos'
import Introduccion from '../components/Introduccion'
import Seccion from '../components/Seccion'




const Inicio = () => {
  const { usuarioLogeado, AuthuTokenYUsiario, listaServicios, serviciosBack,arrayTurnos, listaTurnos } = useContext(ContextoAdministrador)


  useEffect(() => {

    AuthuTokenYUsiario()
    serviciosBack()
    listaTurnos()
  }, [])



  //AuthuTokenYUsiario()
  /* 
  1) BUSCAR SI HAY TOKEN EN LOCALSTRORAGE
  2) TRAER EL LOCAL SI HAY
  3) MANDAR A VALIDAR EL TOKEN SI EXPIRO O NO 
  4) TRAER EL USUARIO SI EL TOKEN NO EXPIRO
  5) RENDERIZAR COMPONENTE CORRESPONDIENTE AL USUARIO LOGEADO
  

  */







  return (
    <div className='row justify-content-center'>
 <Seccion/>
   <Introduccion/>
      { 
                usuarioLogeado.Auth === true && usuarioLogeado.Rol === "ADMIN" ? 
                    <div>
                      <Link className='btn btn-primary ms-3' to={'/admin'}>Agregar servicios</Link> 
                      <Link className='btn btn-primary ms-3' to={'/dashboard'}>Ver Turnos</Link>
                    </div>
                    :null
      }
     {
      usuarioLogeado.Auth===true && usuarioLogeado.Rol==="USER" ?
      <ListaTurnos/>:null
     }
      <Cards listaServicios={listaServicios} />
      
    </div>
  )
}

export default Inicio