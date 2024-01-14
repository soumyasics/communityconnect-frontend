import { useEffect, useState } from "react";
import UserFooter from "../../../Components/Common/UserFooter/userFooter";
import OrphanageNavbar from "../../../Components/Orphanage/OrphanageNavbar/orphanageNavbar";
import OrphanageRequestForm from "../../../Components/Orphanage/OrphanageRequestForm/orphanageRequestForm";
import "./createDonationRequest.css";
import AuthContext from "../../../Context/authContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Container } from "react-bootstrap";
const CreateDonationRequest = () => {
  const [orpData, setOrpData] = useState(null);


  const { userContext } = useContext(AuthContext);
  const navigate = useNavigate();
  
  // handle authorization
  useEffect(() => {
    if (userContext && userContext.userType) {
    console.log('user loggined already')
    } else {
      navigate("/user/login");
    }
  }, [userContext]);

  useEffect(() => {
    let orpData = localStorage.getItem("orphanage-data") || null;
    if (orpData) {
      orpData = JSON.parse(orpData);
      setOrpData(orpData);
    } else {
      console.log("Orp data not found in local storage");
      console.log("Please login");
    }
  }, []);
  return (
    <>
      <OrphanageNavbar />
      {orpData ? (
        <OrphanageRequestForm orpData={orpData} />
      ) : (
        <Container style={{minHeight: '400px'}} fluid className="p-0">

          <h1>Please login</h1>
        </Container>
      )}
      <div className="mt-5">
        <UserFooter />
      </div>
    </>
  );
};

export default CreateDonationRequest;
