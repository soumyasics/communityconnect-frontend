import { useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import UserNavbar from "../UserNavbar/userNavbar";
import UserFooter from "../../Common/UserFooter/userFooter";
import CommunityHeader from "../../Common/CommunityHeader/CommunityHeader";
import userLandingAfterLogin from "../../../Assets/Images/user-landing-after-login.png";
import axiosInstance from "../../../api/BaseUrl";
import "./userDonationRequest.css";
import "./donationReqDetails.css";

const DonationReqDetails = () => {
  const [donationReqData, setDonationReqData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  console.log("id2", id);
  useEffect(() => {
    getDonationReqData();
  }, []);
  const getDonationReqData = async () => {
    try {
      const res = await axiosInstance.get(
        "donation-request/get-donation-request/" + id
      );
      const data = res?.data?.data || null;

      if (!data) {
        setDonationReqData(null);
        return;
      }
      setDonationReqData(data);
    } catch (err) {
      console.log("err on get individual donation req", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container fluid className="p-0">
      <UserNavbar />
      <Container className="p-0" id="donation-req-details-container" fluid>
        <CommunityHeader
          textColor="yellow"
          imgPath={userLandingAfterLogin}
          description=""
          heading="Donation Request Details"
        />
        <Container fluid className="p-0">
          <h1 className="text-center text-dark">Donation Request Details</h1>

          <div className="single-orp-container">
            <div className="single-orp-img-container">
              <img
                src="https://img.freepik.com/free-vector/orphanage-concept-illustration_114360-8721.jpg"
                alt="orphanage"
              />
            </div>
            <div className="single-orp-text-container">
              <h2> Name </h2>
              <p className="orp-description"> desc</p>
              <Col> Started Year: </Col>
              <Row>
                <Col> Phone Number:</Col>
                <Col> Email Id: </Col>
              </Row>
              <Row>
                <Col> Orphanage Address:</Col>
              </Row>
              <Row>
                <Col> Orphanage City: </Col>
                <Col> Pincode: </Col>
              </Row>
              <Row>
                <Col> Our Purpose:</Col>
              </Row>

              <Row>
                <Button className="orp-requests-btn"> View Requests </Button>
              </Row>
            </div>
          </div>
        </Container>
      </Container>
      <UserFooter />
    </Container>
  );
};
export default DonationReqDetails;
