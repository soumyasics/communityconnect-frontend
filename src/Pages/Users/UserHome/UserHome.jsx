import UserNavbar from "../../../Components/User/UserNavbar/userNavbar";
import CommunityHeader from "../../../Components/Common/CommunityHeader/CommunityHeader";
import { FaUserAstronaut } from "react-icons/fa";
import TextCenterComponent from "../../../Components/Common/TextCenterComponent/textCenterComponent";
import TextRightComponent from "../../../Components/Common/TextRightComponent/textRightComp";
import bloodDonationImg from "../../../Assets/Images/blood-donation-img.png";
import TextLeftComponent from "../../../Components/Common/TextLeftComponent/textLeftComponent";
import charityImg from "../../../Assets/Images/charity-img.png";
import HomeViewDonations from "../../../Components/Common/HomeViewDonations/homeViewDonation";
import UserFooter from "../../../Components/Common/UserFooter/userFooter";
import TextCenterQuote from "../../../Components/Common/TextCenterQuote/textCenterQuote";
import ambulanceImg from "../../../Assets/Images/ambulance-img.png";

const UserHome = () => {
  const bloodDonationHeading = "Blood Camp";
  const bloodDonationContent =
    "Where your donation  Becomes Poetry and Movements Tell Tales We need 1000K";
  const bloodDonationBtnContent = "View";
  const contributeHeading = "How Can you contribute us";
  const contributeContent =
    "We are a humanitarian initiative committed to making a positive impact on the world. Based on the principles of empathy, solidarity, andsustainable development, we strive to address the most pressingchallenges facing communities around the globe";

  const donationHeading = "Donate";
  const donationContent =
    "Where your donation becomes poetry and movements tell tales";
  const donationBtnContent = "View Charity";
  return (
    <>
      <UserNavbar />
      <CommunityHeader />
      <TextCenterComponent
        heading={contributeHeading}
        textContent={contributeContent}
      />
      <TextRightComponent
        imgPath={ambulanceImg}
        content={bloodDonationContent}
        heading={bloodDonationHeading}
        buttonContent={bloodDonationBtnContent}
      />

      <TextLeftComponent
        imgPath={charityImg}
        content={donationContent}
        heading={donationHeading}
        buttonContent={donationBtnContent}
      />

      <HomeViewDonations />
      <TextCenterQuote />
      <UserFooter />
    </>
  );
};
export default UserHome;
