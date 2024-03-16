import React, { useState, useEffect } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import { useSelector } from "../../redux/store";
import { getAllRequirements } from "../../api/userApi";

const SeeRequirementModal = ({ show, onHide }) => {
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => state);

  useEffect(() => {
    getAllRequirements(user.id).then((data) => setData(data["requirement"]));
  }, []);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Requirements</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          {data?.map((item, index) => (
            <>
              {" "}
              <thead>
                <tr>
                  <th>{`${item.quantity} ${item.unit} ${item.name}`}</th>
                </tr>
              </thead>
              <tbody>
                <tr key={index}>
                  <td>Ordered ON:{`${new Date(item.createdAt).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`}</td>
                </tr>
              </tbody>
            </>
          ))}
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SeeRequirementModal;
