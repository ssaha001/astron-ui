import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import { assignEmployee } from "../api";
import { useDispatch, useSelector } from "../redux/store";
import { fetchEmployee } from "../redux/slices/employeeSlice";
const UpdateScheduleModal = ({ show, onHide, date, emp }) => {
    const {user}= useSelector((state)=>state);
    const dispatch= useDispatch();
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState(
    dayjs(new Date().setHours(9, 0, 0, 0))
  );
  const [endTime, setEndTime] = useState(
    dayjs(new Date().setHours(17, 0, 0, 0))
  );
  function convertTo12HourFormat(time) {
    // Extract hours and minutes from the time string
    const [hours, minutes] = time.split(":").map(Number);

    // Determine AM or PM
    const period = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    const hours12 = hours % 12 || 12;

    // Pad minutes with leading zero if needed
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    // Return formatted 12-hour time string
    return `${hours12}:${paddedMinutes} ${period}`;
  }
  const handleSave = () => {
    // Handle saving the schedule data
    //assignEmployee(())
    const convertedStartTime = `${startTime.hour()}:${startTime.minute()}`;
    const convertedEndTime = `${endTime.hour()}:${endTime.minute()}`;
    const dateString = `${convertTo12HourFormat(
        convertedStartTime
    )}-${convertTo12HourFormat(convertedEndTime)}`;
    assignEmployee({ location: location, time: dateString }, emp.id, date)
      .then((data) => {
        console.log(data);
        dispatch(fetchEmployee(user.id))
      })
      .catch((err) => console.log(err));
    // Close the modal
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update Schedule for {emp.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" value={date} readOnly />
          </Form.Group>
          <Form.Group controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <TextField
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Form.Group>
          <Form.Group controlId="formStartTime">
            <Form.Label>Start Time</Form.Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Start Time"
                value={startTime}
                onChange={(newValue) => setStartTime(newValue)}
              />
            </LocalizationProvider>
          </Form.Group>
          <Form.Group controlId="formEndTime">
            <Form.Label>End Time</Form.Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="End Time"
                value={endTime}
                onChange={(newValue) => setEndTime(newValue)}
              />
            </LocalizationProvider>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateScheduleModal;
