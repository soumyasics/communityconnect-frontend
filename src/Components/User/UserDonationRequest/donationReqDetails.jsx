import { useParams } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import UserNavbar from "../UserNavbar/userNavbar";
import UserFooter from "../../Common/UserFooter/userFooter";
import CommunityHeader from "../../Common/CommunityHeader/CommunityHeader";
import userLandingAfterLogin from "../../../Assets/Images/user-landing-after-login.png";
import axiosInstance from "../../../api/BaseUrl";
import child4Img from "../../../Assets/Images/child-3.png";
import PaymentVerticalModal from "../../Common/PaymentVerticalModal/PaymentVerticalModal";
import "./userDonationRequest.css";
import "./donationReqDetails.css";

const DonationReqDetails = () => {
  const [donationReqData, setDonationReqData] = useState(null);
  const [donationReqStatus, setDonationReqStatus] = useState("Active");
  const [paymentModal, setPaymentModal] = useState(false);

  const [loading, setLoading] = useState(true);
  const [deadlineDate, setDeadlineData] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    getDonationReqData();
  }, []);

  function setRequestStatus(deadline) {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    if (today > deadlineDate) {
      setDonationReqStatus("Request Expired");
    } else {
      setDonationReqStatus("Request Active");
    }
  }
  const findDeadlineDate = (deadline) => {
    const dateOnly = new Date(deadline).toISOString().split("T")[0];
    setDeadlineData(dateOnly);
  };

  useEffect(() => {
    if (donationReqData && donationReqData.deadline) {
      findDeadlineDate(donationReqData.deadline);
      setRequestStatus(donationReqData.deadline);
    }
  }, [donationReqData]);
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
      <PaymentVerticalModal
        show={paymentModal}
        onHide={() => setPaymentModal(false)}
        
      />
      <UserNavbar />
      <Container className="p-0" id="donation-req-details-container" fluid>
        <CommunityHeader
          textColor="yellow"
          imgPath={userLandingAfterLogin}
          description=""
          heading="Donation Request Details"
        />
        <Container fluid className="p-0 mt-5">
          <h1 className="text-center text-dark">Donation Request Details</h1>

          <div className="pb-5 single-orp-container">
            <Container fluid className="single-orp-text-container">
              <Container fluid>
                <h2 className="text-primary font-weight-bold">
                  {" "}
                  Orphanage Name: {donationReqData?.orphanageId?.name}{" "}
                </h2>
                <h3 className="font-italic">
                  {" "}
                  Request for: {donationReqData?.title}{" "}
                </h3>
                <p className="orp-description">
                  {" "}
                  More about this request:
                  {donationReqData?.description}{" "}
                </p>
              </Container>

              <Container className="mt-3">
                <h2 className="lead text-primary font-weight-bold">
                  {" "}
                  Request Details
                </h2>
                <Row>
                  <Col>
                    {" "}
                    Target Amount ₹: {donationReqData?.targetAmount || 1000}
                  </Col>
                  <Col>
                    {" "}
                    Category:{donationReqData?.category ||
                      "Orphanage Expenses"}{" "}
                  </Col>
                </Row>
                <Row>
                  <Col> Last Date: {deadlineDate || "10/10/2024"}</Col>
                  <Col>
                    {" "}
                    Request Urgency: &nbsp;
                    <span
                      className={`${
                        donationReqData?.urgencyLevel === "high"
                          ? "text-danger"
                          : "text-warning"
                      } font-weight-bold shadow`}
                    >
                      {donationReqData?.urgencyLevel.toUpperCase() || "Medium"}
                    </span>
                  </Col>
                </Row>

                <h2 className="lead mt-4 text-primary font-weight-bold">
                  Orphanage Details
                </h2>
                <Row>
                  <Col>
                    {" "}
                    Phone Number: {donationReqData?.orphanageId?.phoneNumber}
                  </Col>
                  <Col> Email Id:{donationReqData?.orphanageId?.email} </Col>
                </Row>
                <Row>
                  <Col>
                    {" "}
                    Orphanage Address: {donationReqData?.orphanageId?.address}
                  </Col>
                  <Col>
                    {" "}
                    Orphanage City: {donationReqData?.orphanageId?.city}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {" "}
                    Orphanage City: {donationReqData?.orphanageId?.city}{" "}
                  </Col>
                  <Col> Pincode: {donationReqData?.orphanageId?.pincode}</Col>
                </Row>
                <Row>
                  <Col>
                    {" "}
                    Bank Account Number:{" "}
                    {donationReqData?.bankAcNumber || 6230_2121_4538}
                  </Col>
                </Row>

                <Container
                  fluid
                  className="gap-3 mt-4 p-0 d-flex justify-content-between"
                >
                  <Button className="w-50 bg-success"> Send a message </Button>
                  <Button
                    onClick={() => {
                      setPaymentModal(true);
                    }}
                    className="w-50 bg-primary"
                  >
                    {" "}
                    Donate{" "}
                  </Button>
                </Container>
              </Container>
            </Container>
            <div className="single-orp-img-container w-50">
              <img src={child4Img} alt="orphanage" />
            </div>
          </div>
        </Container>
      </Container>
      <UserFooter />
    </Container>
  );
};
export default DonationReqDetails;
