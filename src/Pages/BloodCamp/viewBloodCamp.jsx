import { useState, useEffect } from "react";
import UserNavbar from "../../Components/User/UserNavbar/userNavbar";
import CommunityHeader from "../../Components/Common/CommunityHeader/CommunityHeader";
import bloodCampImg from "../../Assets/Images/blood-donation-camp.jpg";
import UserFooter from "../../Components/Common/UserFooter/userFooter";
import styles from "./bloodCamp.module.css";
import axiosInstance from "../../api/BaseUrl";
import { Button, Form, Table } from "react-bootstrap";
import AuthContext from "../../Context/authContext";
import { useContext } from "react";

import "./blood-camp.css";
const ViewBloodCamps = () => {
  const [campData, setCampData] = useState([]);

  useEffect(() => {
    getAllCamps();
  }, []);
  const getAllCamps = () => {
    axiosInstance
      .get("/camp/get-all-camps")
      .then((response) => {
        const camps = response.data.data || [];
        if (camps.length > 0) {
          setCampData(camps);
        } else {
          console.log("camps data not found");
        }
      })
      .catch((error) => {
        console.log("camps data not found", error);
      });
  };
  return (
    <div>
      <UserNavbar />
      <CommunityHeader heading="" description="" imgPath={bloodCampImg} />
      {campData.length > 0 && (
        <div>
          <h3 className="font-weight-bold text-center mt-5"> Blood Camps </h3>
        </div>
      )}

      <div style={{ width: "90%" }} className="mx-auto">
        {campData.length === 0 && (
          <h3 className="text-center font-weight-bold my-5">
            No Blood Camps Found.
          </h3>
        )}
        {campData.length > 0 && (
          <Table striped bordered hover>
            <thead>
              <tr className="text-center">
                <th>No</th>
                <th>Camp Name</th>
                <th>Camp Place </th>
                <th>Camp Date</th>
                <th>Total Registrations</th>
                <th>Book Slot</th>
              </tr>
            </thead>
            <tbody>
              {campData.map((camp, index) => {
                console.log("cam", camp);
                return (
                  <tr key={index} className="text-center">
                    <td>{index + 1}</td>
                    <td>{camp.campName}</td>
                    <td>{camp.campPlace}</td>
                    <td>{camp.campDate}</td>
                    <td>{camp.campRegistrations.length}</td>
                    <td>
                      <Button> Book Slot</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </div>
      <UserFooter />
    </div>
  );
};
export default ViewBloodCamps;
