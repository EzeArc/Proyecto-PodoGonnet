import RegisterService from "../components/RegisterService";
import { TurnosAdmin } from "./../components/TurnosAdmin";
import { UpdateService } from "./../components/UpdateService";

const Dashboard = () => {
  return (
    <>
      <RegisterService />
      <UpdateService />
      <TurnosAdmin />
    </>
  );
};

export default Dashboard;
