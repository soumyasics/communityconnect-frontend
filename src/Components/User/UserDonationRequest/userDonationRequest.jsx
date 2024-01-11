import CommunityHeader from "../../Common/CommunityHeader/CommunityHeader.jsx";
import UserFooter from "../../Common/UserFooter/userFooter.jsx";
import UserNavbar from "../UserNavbar/userNavbar.jsx";
import childImg1 from "../../../Assets/Images/child-3.png";
import { Container } from "react-bootstrap";
import "./userDonationRequest.jsx";
const UserDonationRequest = () => {
  const desc =
    "Join Us in Supporting the Little Hearts . Together, let's make a difference in the lives. Your support is a beacon of hope, guiding them towards a path of joy and fulfillment. Explore the impact of your kindness";
    const heading = "Explore the Love";
    return (
    <Container className="p-0" fluid>
      <UserNavbar />
      <CommunityHeader
        heading={heading}
        description={desc}
        imgPath={childImg1}
      />
      <Container fluid className="bg-primary">
        {" "}
        User Donate
      </Container>
      <UserFooter />
    </Container>
  );
};

export default UserDonationRequest;
