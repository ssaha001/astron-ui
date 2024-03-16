import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Card,
  Pagination,
  Badge,
} from "react-bootstrap";
import { DashboardHeader } from "../../Components";
import CirclesRating from "./CircleRating";
import VendorList from "../../Data/vendorList.json";
import StarRatings from "react-star-ratings";
import Map from "./Map";
import VendorCard from "./VendorCard";

const Materials = () => {
  // Sample array of card information
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(VendorList.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = VendorList.slice(indexOfFirstCard, indexOfLastCard);

  // Function to handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <DashboardHeader current={"Get Materials"} />
        </Container>
      </Navbar>

      <Row>
        <Col md={6}>
          <Row>
            {currentCards.map((cardInfo, index) => (
              <Col md={6} key={index}>
                <VendorCard cardInfo={cardInfo} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={6}>
          <Map locations={currentCards.map((item) => ({ [item.name]: item.location }))} />
        </Col>
      </Row>

      {/* Pagination */}
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default Materials;