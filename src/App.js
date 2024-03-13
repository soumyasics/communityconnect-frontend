import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./Pages/Users/UserLogin/userLogin";
import UserSignup from "./Pages/Users/UserSignup/userSignup";
import UserHome from "./Pages/Users/UserHome/UserHome";
import UserOrphanagesList from "./Pages/Orphanages/UserOrphanagesList/userOrphanagesList";
import OrphanageDetails from "./Components/Common/OrphanageDetails/orphanageDetails";
import AdminLogin from "./Pages/Admin/AdminLogin/AdminLogin";
import AdminDashboard from "./Pages/Admin/AdminDashboard/adminDashboard";
import CreateDonationRequest from "./Pages/Orphanages/CreateDonationRequest/createDonationRequest";
import OrphanageHome from "./Pages/Orphanages/OrphanageHome/orphanageHome";
import UserDonationRequest from "./Components/User/UserDonationRequest/userDonationRequest";
import DonationReqDetails from "./Components/User/UserDonationRequest/donationReqDetails";
import LoginModalTest from "./Components/Common/LoginModal/loginModal";
import LeaderBoard from "./Pages/Leaderboard/leaderboard";
import UserProfile from "./Pages/Users/Profile/userProfile";
import TermsConditions from "./Components/Common/OrphanageDetails/terms-conditions/terms";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BloodCamp from "./Pages/BloodCamp/bloodCamp";
import ViewBloodCamps from "./Pages/BloodCamp/viewBloodCamp";
import ViewRequests from "./Pages/Orphanages/ViewRequests/viewRequests";
import UserProfile2 from "./Pages/Users/Profile/userProfile2";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* user  */}
        <Route path="/" element={<UserHome />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route
          path="/user/orphanages-list"
          element={<UserOrphanagesList activeUser="user" />}
        />
        <Route path="/user/orphanage/:id" element={<OrphanageDetails />} />

        <Route
          path="/user/orphanage/request"
          element={<UserDonationRequest />}
        />
        <Route
          path="/user/orphanage/request/:id"
          element={<DonationReqDetails />}
        />
        <Route
          path="/user/leaderboard"
          element={<LeaderBoard activeUser="user" />}
        />
        <Route path="/profile" element={<UserProfile activeUser="user" />} />
        <Route path="/blood-camp" element={<BloodCamp />} />
        <Route path="/view-blood-camps" element={<ViewBloodCamps />} />
        <Route path="/orphanage/orphanage/:id" element={<OrphanageDetails />} />
        {/* organizations  */}

        {/* orphnaage routes  */}
        <Route path="/orphanage" element={<OrphanageHome />} />
        <Route
          path="/orphanage/profile"
          element={<UserProfile2 activeUser="orphanage" />}
        />
        <Route
          path="/orphanage/orphanages-list"
          element={<UserOrphanagesList activeUser="orphanage" />}
        />
        
        <Route
          path="/orphanage/donation-request"
          element={<CreateDonationRequest />}
        />
        <Route
          path="/orphanage/view-requests"
          element={<ViewRequests />}
        />
        <Route
          path="/orphanage/leaderboard"
          element={<LeaderBoard activeUser="orphanage" />}
        />

        {/* Admin Routes  */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {/* common routes */}
        <Route path="/modal/test" element={<LoginModalTest />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/*" element={<h1> 404 </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
