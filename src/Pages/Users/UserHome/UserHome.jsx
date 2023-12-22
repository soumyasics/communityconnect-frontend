import UserNavbar from "../../../Components/User/UserNavbar/userNavbar";
import CommunityHeader from "../../../Components/Common/CommunityHeader/CommunityHeader";
import { FaUserAstronaut } from "react-icons/fa";
import TextCenterComponent from "../../../Components/Common/TextCenterComponent/textCenterComponent";
import TextRightComponent from "../../../Components/Common/TextRightComponent/textRightComp";
import bloodDonationImg from "../../../Assets/Images/blood-donation-img.png";
const UserHome = () => {
  const bloodDonationHeading = "Blood Camp";
  const bloodDonationContent =
    "Where your donation  Becomes Poetry and Movements Tell Tales We need 1000K";
  const bloodDonationBtnContent = "Conduct";
  const contributeHeading = "How Can you contribute us";
  const contributeContent =
    "We are a humanitarian initiative committed to making a positive impact on the world. Based on the principles of empathy, solidarity, andsustainable development, we strive to address the most pressingchallenges facing communities around the globe";

  return (
    <>
      <UserNavbar />
      <CommunityHeader />
      <TextCenterComponent
        heading={contributeHeading}
        textContent={contributeContent}
      />
      <TextRightComponent
        imgPath={bloodDonationImg}
        content={bloodDonationContent}
        heading={bloodDonationHeading}
        buttonContent={bloodDonationBtnContent}
      />
      <div className="user-home-container">
        {/* <h3 className="user-home-heading">User Home</h3> */}
      </div>
    </>
  );
};
export default UserHome;
