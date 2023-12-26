import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./Pages/Users/UserLogin/userLogin";
import UserSignup from "./Pages/Users/UserSignup/userSignup";
import UserHome from "./Pages/Users/UserHome/UserHome";
import UserOrphanagesList from "./Pages/Orphanages/UserOrphanagesList/userOrphanagesList";
import OrphanageDetails from "./Components/Common/OrphanageDetails/orphanageDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminLogin from "./Pages/Admin/AdminLogin/AdminLogin";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/orphanages-list" element={<UserOrphanagesList />} />
        <Route path="/user/orphanage/:id" element={<OrphanageDetails />} />

        {/* Admin Routes  */}
        <Route path="/admin/login" element={<AdminLogin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
