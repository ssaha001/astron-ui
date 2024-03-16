import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Card,
  Pagination,
  Badge,
  Form,
  Spinner,
  Button,
} from "react-bootstrap";
import { DashboardHeader } from "../../Components";
import CirclesRating from "./CircleRating";
import VendorList from "../../Data/vendorList.json";
import StarRatings from "react-star-ratings";
import Map from "./Map";
import VendorCard from "./VendorCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "../../redux/store";
import AddRequirementModal from "./AddRequirementModal";
import SeeRequirementModal from "./SeeRequirementModal";
import { useDispatch } from "../../redux/store";
import { fetchAllProperty } from "../../redux/slices/requirementSlice";

const Materials = () => {
  // Sample array of card information
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(VendorList.length / cardsPerPage);
  const { supplier, user } = useSelector((state) => state);
  const [data, setData] = useState(supplier["data"]);
  const [isDataReady, setIsDataReady] = useState(false);
  const[showModal, setShowModal] = useState(false);
  const [allRequirementModal, setAllRequiremntModal]=useState(false);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);
  const [formData, setFormData] = useState({
    searchQuery: "",
  });
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    const pattern = new RegExp(`.*${formData.searchQuery}.*`, "i");
    setIsDataReady(false);
    if (formData.searchQuery !== "") {
      const filteredData = await supplier["data"]
        .map((item) => {
          const matchedMaterials = item.materials.filter((material) =>
            pattern.test(material)
          );
          return { ...item, matches: matchedMaterials };
        })
        .filter((item) => item.matches.length > 0);
      setData(filteredData);
    } else {
      setData(supplier["data"]);
    }
    setIsDataReady(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const pattern = new RegExp(`.*${formData.searchQuery}.*`, "i");
    setIsDataReady(false);
    if (formData.searchQuery !== "") {
      const filteredData = await supplier["data"]
        .map((item) => {
          const matchedMaterials = item.materials.filter((material) =>
            pattern.test(material)
          );
          return { ...item, matches: matchedMaterials };
        })
        .filter((item) => item.matches.length > 0);
      setData(filteredData);
    } else {
      setData(supplier["data"]);
    }
    setIsDataReady(true);
  };
  useEffect(() => {
    setData(supplier["data"]);
    setIsDataReady(true);
  }, [supplier]);

  // Function to handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <DashboardHeader current={"Get Materials"} />
        </Container>
      </Navbar>
      <Row style={{ padding: "5% 0" }}>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formSearch">
              <div className="input-group">
                <Form.Control
                  type="text"
                  placeholder="Search..."
                  name="searchQuery"
                  value={formData.searchQuery}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-primary">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </div>
            </Form.Group>
          </Form>
        </Col>
        <Col style={{ display: "flex" }}>
        <Button
            bg="light"
            onClick={() => {
              setAllRequiremntModal(true);
            }}
            style={{ marginLeft: "auto" }}
          >
            See All Requirement
          </Button>
          <Button
            bg="light"
            onClick={() => {
              setShowModal(true);
            }}
            style={{ marginLeft: "auto" }}
          >
            Post a Requirement
          </Button>
        </Col>
      </Row>
      <AddRequirementModal
        show={showModal}
        onHide={() => setShowModal(false)}
      />
      <SeeRequirementModal
        show={allRequirementModal}
        onHide={() => setAllRequiremntModal(false)}
      />
      {isDataReady ? (
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
            <Map
              locations={currentCards.map((item) => ({
                [item.name]: item.location,
              }))}
            />
          </Col>
        </Row>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

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
