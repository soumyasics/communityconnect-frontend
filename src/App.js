import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./Pages/Users/UserLogin/userLogin";
import UserSignup from "./Pages/Users/UserSignup/userSignup";
import UserHome from "./Pages/Users/UserHome/UserHome";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  //local
  const url = "http://localhost:4003";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserHome />} />

        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/user/login" element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
