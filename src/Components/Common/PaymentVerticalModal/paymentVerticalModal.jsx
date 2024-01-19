import { useState, useEffect, useContext } from "react";
import { Col, Form, Row, Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../api/BaseUrl";
import AuthContext from "../../../Context/authContext";

export default function PaymentVerticalModal(props) {
  const { userContext } = useContext(AuthContext);
  const { id } = useParams();
  const [donationReqData, setDonationReqData] = useState(null);
  const [orphanageId, setOrphanageId] = useState(null);
  const [validated, setValidated] = useState(false);
  const [paymentModalContent, setPaymentModalContent] = useState({
    heading: "Donate",
    subHeading: "Amount needed 1000 rupees",
    content: "Pay 1000 rupees to the orphanage ",
  });

  const [userAcDetails, setUserAcDetails] = useState({
    acHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  useEffect(() => {
    getDonationReqData();
  }, [id]);

  const collectData = (userBankAcDetails) => {
    if (donationReqData) {
      const orphanageId = donationReqData.orphanageId._id || null;
      const requestId = donationReqData._id || null;
      const donatedAmount = donationReqData.targetAmount || 1000;
      let donatedUserId = null;
      let donatedOrganizationId = null;

      if (userContext?.userType === "user") {
        donatedUserId = userContext?.userData?._id;
      }
      if (userContext?.userType === "orphanage") {
        donatedOrganizationId = userContext?.userData?._id;
      }
      if (
        orphanageId &&
        requestId &&
        donatedAmount &&
        (donatedUserId || donatedOrganizationId)
      ) {
        const allDonationData = {
          orphanageId,
          requestId,
          donatedAmount,
          donatedUserId,
          donatedOrganizationId,
          accountHolderName: userBankAcDetails.acHolderName,
          cardNumber: userBankAcDetails.cardNumber,
        };

        console.log("all don", allDonationData);

        sendDataToServer(allDonationData);
      } else {
        console.log(
          "donation failed , please login again",
          "orp id",
          orphanageId,
          "req id",
          requestId,
          "donated amt",
          donatedAmount,
          "donated user id",
          donatedUserId,
          "donated org id optionsl",
          donatedOrganizationId
        );
        return;
      }
    } else {
      console.log("Can't get donation request data");
      return;
    }
  };

  useEffect(() => {
    if (donationReqData) {
      setPaymentModalContent({
        heading: `Donate to ${
          donationReqData.orphanageId?.name || "Orphanage"
        }`,
        subHeading: `Amount needed: ${
          donationReqData?.targetAmount || 1000
        } rupees`,
        content: `Pay ${donationReqData?.targetAmount || 1000} rupees to the ${
          donationReqData?.orphanageId?.name
        } orphanage`,
      });
    }
  }, [donationReqData]);

  const sendDataToServer = async (allDonationData) => {
    const res = await axiosInstance.post("/donation/create", allDonationData);
    console.log("donation res", res);
    if (res.status === 201) {
      alert("Donation successfull");
      props.onHide();
      setUserAcDetails({
        acHolderName: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
      });
      setValidated(false);
    } else {
      alert("Donation failed");
      console.log("failed respoonse", res);
    }
  };

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
    }
  };

  const handleSubmitPayment = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
    const { acHolderName, cardNumber, expiryDate, cvv } = userAcDetails;
    if (!acHolderName || !cardNumber || !expiryDate || !cvv || cvv.length !== 3 || cardNumber.length !== 16) {
      console.log("all fields are mandatory");
      return;
    } else {
      // alert("payment successfull");
      console.log("user entered data is valid", userAcDetails);
      collectData(userAcDetails);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "cvv"){
      console.log("typ",Number(e.target.value))

    }
    setUserAcDetails({
      ...userAcDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {paymentModalContent.heading}
        </Modal.Title>
      </Modal.Header>

      <Form noValidate validated={validated} onSubmit={handleSubmitPayment}>
        <Modal.Body>
          <h4>{paymentModalContent.subHeading}</h4>
          <p>{paymentModalContent.content}</p>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Card Holder Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="acHolderName"
              value={userAcDetails.acHolderName}
              type="text"
              placeholder="Card Holder Name"
              autoFocus
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide card holder name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              name="cardNumber"
              value={userAcDetails.cardNumber}
              type="text"
              placeholder="Card Number"
              pattern="[0-9]{16}"
              minLength={16}
              maxLength={16}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide 16 digits card number
            </Form.Control.Feedback>
          </Form.Group>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control
                  value={userAcDetails.expiryDate}
                  name="expiryDate"
                  type="text"
                  required
                  placeholder="MM/YY"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide expiry date.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  value={userAcDetails.cvv}
                  onChange={handleChange}
                  placeholder="CVV"
                  name="cvv"
                  pattern="[0-9]{3}"
                  type="text"
                  required
                  minLength={3}
                  maxLength={3}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide CVV
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button type="submit">Donate Now</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
