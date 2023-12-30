import { useState, useEffect } from "react";
import axiosInstance from "../../../api/BaseUrl";
import { Table } from "react-bootstrap";
import "./adminUserTable.css";
const AdminUserTable = () => {
  const [usersData, setUsersData] = useState(null);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const currentPageUsers = usersData?.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(usersData?.length / recordPerPage) || 1;
  // pageNumbers Array representing page numbers for pagination control.
  // It is generated based on the total number of pages needed to display all records.
  // Each element in the array corresponds to a page number, starting from 1.
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const res = await axiosInstance.get("user/get-all-users");
    console.log("res", res);
    const allUsers = res?.data?.data;
    if (allUsers.length > 0) {
      setUsersData(allUsers);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCurrentPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Table striped bordered hover id="admin-users-table-container">
        <thead>
          <tr>
            <th>No</th>
            <th>User Name</th>
            <th>Age</th>
            <th>Location</th>
            <th>Contact Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {currentPageUsers?.length > 0 &&
            currentPageUsers.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{index + firstIndex + 1}</td>
                  <td>{user.firstName}</td>
                  <td>{user.age}</td>
                  <td>{user.street}</td>
                  <td>{user.contact}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      {/* pagination buttons here */}
      <nav>
        <ul className="admin-users-table-pagination pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prevPage}>
              Prev
            </a>
          </li>
          {pageNumbers.map((number, i) => {
            return (
              <li
                key={number}
                className={`page-item ${
                  currentPage === number ? "active" : ""
                }`}
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={() => changeCurrentPage(number)}
                >
                  {" "}
                  {number}{" "}
                </a>
              </li>
            );
          })}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AdminUserTable;
