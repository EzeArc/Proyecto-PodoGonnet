import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ContextLoginRegister } from "./context/ContextLoginRegister";
import AppRouters from "./routers/AppRouters";
import Footer from "./components/Footer";
import "../src/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextLoginRegister>
    <BrowserRouter>
      <Navbar />
      <AppRouters />
      <Footer />
    </BrowserRouter>
  </ContextLoginRegister>
);
