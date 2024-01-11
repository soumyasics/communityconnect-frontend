import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import orpImg from "../../../Assets/Images/orp-teady-bear.png";
import { useNavigate } from "react-router-dom";
import "./userDonationRequest.css";
const DonationCardContainer = ({ allAcceptedReqs }) => {
  const navigate = useNavigate();
  
  return (
    <Container fluid className="my-5">
      <h1 className="text-center text-dark">All Donation Requests</h1>

      <Container className="d-flex flex-wrap justify-content-between gap-5 py-3">
        {allAcceptedReqs.map((req) => {
          return (
            <Card
              onClick={() => {
                navigate(req._id);
              }}
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src={orpImg} />
              <Card.Body className="h-50">
                <Card.Title className="">
                  {req.orphanageId?.name.slice(0, 25) || "Orphnage"}
                </Card.Title>
                <Card.Text className="h-50">
                  {req.description.slice(0, 100) + "..." || "Description"}
                </Card.Text>
                <Stack
                  direction="horizontal"
                  className="mb-3 justify-content-between flex-wrap"
                >
                  <Button variant="success">Donate</Button>
                  <Button variant="primary">Contact</Button>
                </Stack>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </Container>
  );
};
export default DonationCardContainer;
