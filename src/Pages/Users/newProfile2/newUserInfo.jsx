import { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/BaseUrl";
import BASE_URL from "../../../api/Backend-url";

import AuthContext from "../../../Context/authContext";
import "./newUserInfo.css";
const NewUserInfo = ({ activeUser }) => {
  const [editView, setEditView] = useState(false);
  const [userProfilePicture, setUserProfilePicture] = useState(
    "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
  );
  const { userContext, loginUserContext } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [activeUserData, setActiveUserData] = useState(null);

  useEffect(() => {
    let activeUserId = userContext?.userData?._id || null;
    if (activeUserId) {
      getActiveUserData(activeUserId);
    }
  }, [userContext]);

  useEffect(() => {
    if (activeUserData) {
      setUserInfo({
        name: activeUserData?.name || "",
        email: activeUserData?.email || "",
        phoneNumber: activeUserData?.phoneNumber || "",
      });

      let picturePath = activeUserData?.img?.filename || null;
      if (picturePath) {
        setUserProfilePicture(BASE_URL + picturePath);
      }
    }
  }, [activeUserData]);
  async function getActiveUserData(id) {
    try {
      let res = await axiosInstance.get("organization/get-org-by-id/" + id);
      let data = res?.data?.data || null;
      if (data) {
        setActiveUserData(data);
      }
    } catch (error) {
      console.log("Error on getting activeUser Data");
    }
  }
  async function saveProfile() {
    let id = userContext?.userData?._id || null;
    if (id) {
      editProfile(id, userInfo);
    } else {
      console.log("User id not found");
    }
  }

  async function editProfile(id, userInfo) {
    axiosInstance
      .patch("organization/edit-org-by-id/" + id, userInfo)
      .then((res) => {
        if (res.status === 200) {
          alert("Organization data Updated successfully");
          
          let data = res.data?.data || null;
          console.log("res data edit", data);

          if (data) {
            loginUserContext("organization", data);
              localStorage.setItem(
                "organization-data",
                JSON.stringify(data)
              );
          }


        }
      })
      .catch((err) => {
        console.log("err on edit user", err);
      })
      .finally(() => {
        getActiveUserData(id);
        setEditView(false);
      });
  }

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="userinfo-container">
      <div className="d-flex justify-content-between">
        <h5> Personal Profile </h5>
        {!editView ? (
          <Button
            onClick={() => {
              setEditView(true);
            }}
          >
            Edit
          </Button>
        ) : (
          <Button
            onClick={() => {
              saveProfile();
            }}
          >
            Save Changes
          </Button>
        )}
      </div>
      <div className="profile-img-section">
        <div className="item-1">
          <img src={userProfilePicture} alt="profile-img" />
        </div>
      </div>
      <div className="user-details">
        {editView ? (
          <>
            <p className="user-title"> Edit Name</p>
            <input
              type="text"
              className="user-input"
              name="name"
              value={userInfo.name}
              onChange={handleChanges}
            />
          </>
        ) : (
          <div>
            <p className="user-title"> Name</p>
            <p className="user-data">{activeUserData?.name} </p>
          </div>
        )}

        <div>
          <p className="user-title">Total Donated Amount</p>
          <p className="user-data">
            <span> ₹ </span> {activeUserData?.totalDonatedAmt}
          </p>
        </div>

        <div>
          <p className="user-title">Role</p>
          <p className="user-data">Organization</p>
        </div>

        <div>
          <p className="user-title"> Contact Information</p>
          <div className="contact-links-container">
            <div>
              <div className="contact">
                <AiOutlineMail />
                {editView ? (
                  <>
                    <p>Mail ID:</p>
                    <input
                      type="text"
                      className="user-input"
                      value={userInfo.email}
                      name="email"
                      onChange={handleChanges}
                    />
                  </>
                ) : (
                  <>
                    <p>Mail ID:</p>
                    <p>{activeUserData?.email || ""} </p>
                  </>
                )}
              </div>
            </div>
            <div>
              <div className="contact">
                <BiPhoneCall />
                {editView ? (
                  <>
                    <p>Phone Number:</p>
                    <input
                      type="text"
                      className="user-input"
                      value={userInfo.phoneNumber}
                      onChange={handleChanges}
                      name="phoneNumber"
                    />
                  </>
                ) : (
                  <>
                    <p>Phone Number:</p>
                    <p>{activeUserData?.phoneNumber || ""}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewUserInfo;
