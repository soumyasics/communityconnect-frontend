import { useState, useEffect } from "react";
import { Col, Form, Row, Button, Modal } from "react-bootstrap";

export default function MyVerticallyCenteredModal(props) {
  const [paymentModalContent, setPaymentModalContent] = useState({
    heading: "Donate",
    subHeading: "Pay 1000 rupees ",
    content: "Pay 1000 rupees xyz orphnage to donate",
  });

  const [userAcDetails, setUserAcDetails] = useState({
    acHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [validated, setValidated] = useState(false);

  const handleSubmitPayment = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    console.log("curr tgt ", event.currentTarget);
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
    const { acHolderName, cardNumber, expiryDate, cvv } = userAcDetails;
    if (!acHolderName || !cardNumber || !expiryDate || !cvv) {
      console.log("all fields are mandatory");
      alert("all fields are mandatory");
      return;
    } else {
      alert("payment successfull");
      props.onHide();
    }
  };

  const handleChange = (e) => {
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
              type="number"
              placeholder="Card Number"
              pattern="[0-9]{16}"
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
                  type="number"
                  required
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
