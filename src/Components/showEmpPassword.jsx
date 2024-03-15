import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ShowEmpPwdModal = ({ show, handleClose, data }) => {

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>This is your employees password.<br/> Save it and send to them.</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>{data}</h3>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowEmpPwdModal;
