import React from "react";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from React Router
import StarRatings from "react-star-ratings";
import CirclesRating from "./CircleRating"; // Assuming you have a component for CirclesRating

const VendorCard = ({ cardInfo }) => {
  // Function to make the name URL-friendly
  const makeUrlFriendly = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <Card className="mb-3">
      <Card.Body as={Link} to={`/vendor/${makeUrlFriendly(cardInfo.name)}`}>
        {" "}
        {/* Use Link to navigate */}
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
          <b>Address:</b> {cardInfo.address}
        </Card.Text>
        <Card.Text>
          <b>Phone:</b> {cardInfo.phone}
        </Card.Text>
        <Card.Text>
          <b>Email:</b> {cardInfo.email}
        </Card.Text>
        <Card.Text>
          <b>Delivery:</b> ${cardInfo.delivery} / km
        </Card.Text>
        <Card.Text>
          <b>Sustainability:</b>{" "}
          <CirclesRating rating={cardInfo.sustainability} />
        </Card.Text>
        {cardInfo?.matches?.length > 0 && (
          <Card.Text>
            {" "}
            {cardInfo?.matches.map((material, index) => (
              <Badge key={index} bg="primary" className="me-1">
              {material}
            </Badge>
            ))}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default VendorCard;
