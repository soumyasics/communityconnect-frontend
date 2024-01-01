import { useState, useEffect } from "react";
import axiosInstance from "../../../api/BaseUrl";
import BarChart from "../../Charts/BarChart/barChart";
import "./adminOverview.css";
const AdminOverview = () => {
  const [usersData, setUsersData] = useState([]);
  const [orgData, setOrgData] = useState([]);
  const [orpData, setOrpData] = useState([]);
  const [allUsersDataLength, setAllUsersDataLength] = useState([0, 0, 0]);
  const [dataSet, setDataSet] = useState({
    labels: ["Users", "Orphanages", "Organizations"],
    datasets: [
      {
        label: "Total Users",
        data: allUsersDataLength,
      },
    ],
  });
  useEffect(() => {
    getAllUsers();
    getAllOrp();
    getAllOrg();
  }, []);

  useEffect(() => {
    setAllUsersDataLength([usersData.length, orgData.length, orpData.length]);
  }, [usersData, orgData, orpData]);

  useEffect(() => {
    setDataSet({
      labels: ["Users", "Orphanages", "Organizations"],
      datasets: [
        {
          label: "Total Users",
          data: allUsersDataLength,
        },
      ],
    });
  }, [allUsersDataLength]);


  const getAllUsers = async () => {
    const res = await axiosInstance.get("user/get-all-users");
    const allUsers = res?.data?.data;
    if (allUsers?.length > 0) {
      setUsersData(allUsers);
    }
  };
  const getAllOrp = async () => {
    const res = await axiosInstance.get("user/get-all-users");
    const allOrp = res?.data?.data;
    if (allOrp.length > 0) {
      setOrgData(allOrp);
    }
  };
  const getAllOrg = async () => {
    const res = await axiosInstance.get("organization/get-all-organizations");
    const allOrg = res?.data?.data;
    if (allOrg.length > 0) {
      setOrpData(allOrg);
    }
  };
  return (
    <>
      <h1> Admin overview</h1>
      <div className="admin-overview-barchart-container">
        <h3> Total Number of Users</h3>
        <BarChart chartData={dataSet} />
      </div>
    </>
  );
};
export default AdminOverview;
