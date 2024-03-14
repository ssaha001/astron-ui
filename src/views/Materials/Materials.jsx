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

const Dashboard = () => {
  // Sample array of card information
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(VendorList.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = VendorList.slice(indexOfFirstCard, indexOfLastCard);

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
          {currentCards.map(
            (cardInfo, index) =>
              index % 2 === 0 && (
                <Row key={index} className="mb-3">
                  <Col md={6}>
                    <Card>
                      <Card.Body>
                        {cardInfo.isVerified && (
                          <Badge
                            pill
                            bg="danger"
                            style={{
                              position: "absolute",
                              top: "0.5rem",
                              right: "0.5rem",
                            }}
                          >
                            Verified
                          </Badge>
                        )}
                        <Card.Title>
                          {cardInfo.name}
                          <StarRatings
                            rating={cardInfo.rating}
                            starRatedColor="yellow"
                            numberOfStars={5}
                            name="rating"
                            starDimension="22px"
                          />
                        </Card.Title>
                        <Card.Text>
                          <b>Address:</b>
                          {cardInfo.address}
                        </Card.Text>
                        <Card.Text>
                          <b>Phone:</b>
                          {cardInfo.phone}
                        </Card.Text>
                        <Card.Text>
                          <b>Email:</b>
                          {cardInfo.email}
                        </Card.Text>
                        <Card.Text>
                          <b>Delivery:</b>
                          {`$${cardInfo.delivery} / km`}
                        </Card.Text>
                        <Card.Text>
                          <b>Sustainability: </b>
                          <CirclesRating rating={cardInfo.sustainability} />
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  {index + 1 + (currentPage - 1) * cardsPerPage <
                    VendorList.length && (
                    <Col md={6}>
                      <Card>
                        <Card.Body>
                          <Card.Title>
                            {
                              VendorList[
                                index + 1 + (currentPage - 1) * cardsPerPage
                              ].name
                            }
                            <StarRatings
                              rating={
                                VendorList[
                                  index + 1 + (currentPage - 1) * cardsPerPage
                                ].rating
                              }
                              starRatedColor="yellow"
                              numberOfStars={5}
                              name="rating"
                              starDimension="22px"
                            />
                          </Card.Title>
                          <Card.Text>
                            <b>Address:</b>
                            {
                              VendorList[
                                index + 1 + (currentPage - 1) * cardsPerPage
                              ].address
                            }
                          </Card.Text>
                          <Card.Text>
                            <b>Phone:</b>
                            {
                              VendorList[
                                index + 1 + (currentPage - 1) * cardsPerPage
                              ].phone
                            }
                          </Card.Text>
                          <Card.Text>
                            <b>Email:</b>
                            {
                              VendorList[
                                index + 1 + (currentPage - 1) * cardsPerPage
                              ].email
                            }
                          </Card.Text>
                          <Card.Text>
                            <b>Delivery:</b>
                            {`$${
                              VendorList[
                                index + 1 + (currentPage - 1) * cardsPerPage
                              ].delivery
                            } / km`}
                          </Card.Text>
                          <Card.Text>
                            <b>Sustainability: </b>
                            <CirclesRating
                              rating={
                                VendorList[
                                  index + 1 + (currentPage - 1) * cardsPerPage
                                ].sustainability
                              }
                            />
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  )}
                </Row>
              )
          )}
        </Col>
        <Col md={6}>
          <Map
            locations={currentCards.map((item) => ({
              [item.name]: item.location,
            }))}
          />
        </Col>
      </Row>
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

export default Dashboard;
