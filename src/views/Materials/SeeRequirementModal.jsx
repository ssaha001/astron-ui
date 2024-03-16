import React, { useState, useEffect } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProperty } from "../../redux/slices/requirementSlice";

const SeeRequirementModal = ({ show, onHide }) => {
  const [data, setData] = useState([]);
  const { user, requirement } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.id) {
      dispatch(fetchAllProperty(user.id));
    }
  }, [dispatch, user]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Requirements</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Name</th>
              <th>Bidder</th>
              <th>Bidding Amount</th>
            </tr>
          </thead>
          <tbody>
            {console.log(requirement)}
            {requirement?.data?.map((item) => (
              <tr key={item.id}>
                <td>{item.quantity}</td>
                <td>{item.unit}</td>
                <td>{item.name}</td>
                <td>
                  {item.bids.map((bid) => (
                    <div key={bid.bidSubmittedBy}>{bid.bidSubmittedBy}</div>
                  ))}
                  {item?.bids?.length===0&&(
                    <div>-</div>
                  )}
                </td>
                <td>
                  {item.bids.map((bid) => (
                    <div key={bid.bidAmount}>{bid.bidAmount}</div>
                  ))}
                  {item?.bids?.length===0&&(
                    <div >{'No Bids yet'}</div>
                  )}
                </td>
              </tr>
            ))}

          </tbody>
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
