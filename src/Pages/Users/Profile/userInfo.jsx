import { useState, useEffect } from "react";
import { GrFormUpload } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { useContext } from "react";
import AuthContext from "../../../Context/authContext";
import "./userInfo.css";
import { useNavigate } from "react-router-dom";
const UserInfo = () => {
  const navigate = useNavigate();
  const { userContext } = useContext(AuthContext);
  if (userContext.userType == "") {
    console.log("user data not found login first");
    navigate("/");
  }

  console.log("use context", userContext);
  const [userInfo, setuserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    role: "",
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4moKlTUfDqvfHcx32l_RfRL779U0dakfE-Cys3Qudw&s",
  });

  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = () => {
    if (userContext?.userData) {
      let name = "";
      let phoneNumber = "";
      if (userContext.userType === "user") {
        name = userContext.userData.firstName;
        phoneNumber = userContext.userData.contact;
      } else {
        name = userContext.userData.name;
        phoneNumber = userContext.userData.phoneNumber;
      }

      let { email } = userContext.userData;
      const role = userContext.userType;
      let newObj = { name, email, phoneNumber, role };
      setuserInfo({
        ...userInfo,
        ...newObj,
      });
    } else {
      console.log("user data not found");
    }
  };
  const removePhonenumber = () => {
    setuserInfo({
      ...userInfo,
      phoneNumber: "",
    });
  };
  const removeEmail = () => {
    setuserInfo({
      ...userInfo,
      email: "",
    });
  };

  const removeProfilePicture = () => {
    setuserInfo({
      ...userInfo,
      profilePicture:
        "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg",
    });
  };
  return (
    <div className="userinfo-container">
      <h5> Personal Profile </h5>
      <div className="profile-img-section">
        <div className="item-1">
          <img src={userInfo.profilePicture} alt="profile-img" />
        </div>
        <div className="item-2">
          <GrFormUpload />
          <h6>Upload a new one </h6>
        </div>
        <div onClick={removeProfilePicture} className="item-3">
          <MdOutlineDeleteOutline />
          <h6>Remove</h6>
        </div>
      </div>
      <div className="user-details">
        <div>
          <p className="user-title">Full Name</p>
          <p className="user-data">{userInfo.name}</p>
        </div>
        <div>
          <p className="user-title">Total Donated Amount</p>
          <p className="user-data">
          <span> ₹ </span> {userContext?.userData?.totalDonatedAmt || 0} 
          </p>
        </div>
        <div>
          <p className="user-title">Role</p>
          <p className="user-data">{userInfo.role}</p>
        </div>

        <div>
          <p className="user-title"> Contact Information</p>
          <div className="contact-links-container">
            <div>
              <div className="contact">
                <AiOutlineMail />
                <p>Mail ID:</p>
                <p>{userInfo.email}</p>
              </div>
              {/* <button onClick={removeEmail}>Remove</button> */}
            </div>
            <div>
              <div className="contact">
                <BiPhoneCall />
                <p>Phone Number:</p>
                <p>{userInfo.phoneNumber}</p>
              </div>
              {/* <button onClick={removePhonenumber}>Remove</button> */}
            </div>
            {/* <button id="edit-profile-btn">Edit Profile</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserInfo;
