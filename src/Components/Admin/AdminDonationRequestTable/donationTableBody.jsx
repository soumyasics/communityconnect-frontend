import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import axiosInstance from "../../../api/BaseUrl";
import "./adminDonationRequestTable.css";

const DonationTableBody = ({ req, index, firstIndex }) => {
  const sendApproveRequest = async (id) => {
    console.log("id working", id);
    try {
      const res = await axiosInstance.patch(
        `donation-request/approve-donation-request/${id}`
      );
      console.log("res", res);
    } catch (error) {
      console.log("error on approve request", error);
    }
  };

  return (
    <>
      <tr key={req?._id}>
        <td>{index + firstIndex + 1}</td>
        <td>{req?.orphanageId?.name || "Orphanage"}</td>
        <td>{req?.title}</td>
        <td>{req?.targetAmount} </td>
        <td>{req?.orphanageId?.phoneNumber || "Not available"}</td>
        <td>
          <Button
            onClick={() => {
              sendApproveRequest(req?._id);
            }}
            variant="success"
          >
            {" "}
            Approve
          </Button>
        </td>
        <td>
          <Button variant="danger"> Reject</Button>
        </td>
      </tr>
    </>
  );
};

function MyVerticallyCenteredModal(props) {
  const { heading, content, btnContent2, onHide, id } = props;

  return (
    <>
      <Modal
        id="verticallyCenteredModal"
        className="mx-auto w-75"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>{heading}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
          <Button>{btnContent2}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DonationTableBody;
