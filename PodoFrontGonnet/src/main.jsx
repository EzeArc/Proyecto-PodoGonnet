import * as bootstrao from 'bootstrap'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import { ContextLoginRegister } from './context/ContextLoginRegister'
import AppRouters from './routers/AppRouters'
import Footer from './components/Footer'
import Seccion from './components/Seccion'




ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextLoginRegister>
    <BrowserRouter>
      <Navbar />
      <AppRouters />
      <Footer/>
    </BrowserRouter>
  </ContextLoginRegister>
)
