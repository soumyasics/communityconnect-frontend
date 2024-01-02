import { useState, useEffect } from "react";
import axiosInstance from "../../../api/BaseUrl";
import BarChart from "../../Charts/BarChart/barChart";
import "./adminOverview.css";
import PieChart from "../../Charts/PieChart/pieChart";
import LineChart from "../../Charts/LineChart/lineChart";
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
    backgroundColor: ["red", "green", "blue"],
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
          backgroundColor: ["#6366f1", "#f79009", "#10b981"],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [allUsersDataLength]);

  const getAllUsers = async () => {
    try {
      const res = await axiosInstance.get("user/get-all-users");
      const allUsers = res?.data?.data;
      if (allUsers?.length > 0) {
        setUsersData(allUsers);
      }
    } catch (error) {
      console.log("error on get all users", error?.message);
    }
  };
  const getAllOrp = async () => {
    try {
      const res = await axiosInstance.get("user/get-all-users");
      const allOrp = res?.data?.data;
      if (allOrp.length > 0) {
        setOrgData(allOrp);
      }
    } catch (error) {
      console.log("error on get all orp", error?.message);
    }
  };
  const getAllOrg = async () => {
    try {
      const res = await axiosInstance.get("organization/get-all-organizations");
      const allOrg = res?.data?.data;
      if (allOrg.length > 0) {
        setOrpData(allOrg);
      }
    } catch (error) {
      console.log("error on get all org", error?.message);
    }
  };
  return (
    <>
      <h1> Admin overview</h1>
      <div className="admin-overview-barchart-container">
        <h3> Total Number of Users</h3>
        <BarChart chartData={dataSet} />
      </div>
      <div className="admin-overview-barchart-container">
        <h3> Total Number of Users</h3>
        <PieChart chartData={dataSet} />
      </div>
      <div className="admin-overview-barchart-container">
        <h3> Total Number of Users</h3>
        <LineChart chartData={dataSet} />
      </div>
    </>
  );
};
export default AdminOverview;
