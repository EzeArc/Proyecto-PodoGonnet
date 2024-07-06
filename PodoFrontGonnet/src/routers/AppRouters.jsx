import  { useContext } from 'react'
import ContextoAdministrador from '../context/ContextLoginRegister'
import {  Route, Routes } from 'react-router-dom'
import AuthRouters from './AuthRouters'
import AuthenticateRuters from './AuthenticateRuters'

const AppRouters = () => {
    const { usuarioLogeado } = useContext(ContextoAdministrador)

    return (
        <div className='container-fluid p-0'> 
            <Routes>
                {
                    usuarioLogeado.Auth === false ? <Route path='/*' element={<AuthRouters />} /> : <Route path='/*' element={<AuthenticateRuters />} />
                }
                {/* <Route path='/login' element={<Navigate to='/inicio'/>} /> */}
            </Routes>
            </div>
    )
}

export default AppRouters