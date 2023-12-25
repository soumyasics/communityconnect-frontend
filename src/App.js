import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./Pages/Users/UserLogin/userLogin";
import UserSignup from "./Pages/Users/UserSignup/userSignup";
import UserHome from "./Pages/Users/UserHome/UserHome";
import UserOrphanagesList from "./Pages/Orphanages/UserOrphanagesList/userOrphanagesList";
import "bootstrap/dist/css/bootstrap.min.css";
import OrphanageDetails from "./Components/Common/OrphanageDetails/orphanageDetails";
function App() {
  //local
  const url = "http://localhost:4003";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/orphanages-list" element={<UserOrphanagesList />} />
        <Route path="/user/orphanage/:id" element={<OrphanageDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
