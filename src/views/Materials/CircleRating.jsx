import styled from "styled-components";

const FullCircleRating = styled.div`
  border-radius: 100%;
  display: inline-block;
  height: 15px;
  width: 15px;
  overflow: hidden;
  position: relative;
  background-color: green;
`;

const HalfCircleRating = styled.div`
  background: lightgrey;
  border-radius: 100%;
  display: inline-block;
  height: 15px;
  width: 15px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(90deg, green, green 50%, lightgrey 50%);
`;

const CircleRating = styled.div`
  background: lightgrey;
  border-radius: 100%;
  display: inline-block;
  height: 15px;
  width: 15px;
  overflow: hidden;
  position: relative;
`;

const CirclesRating = ({ rating }) => {
  if (rating < 0) return null;
  const fullCirclesCount = Math.floor(rating / 2);
  const emptyCirclesCount = Math.floor((10 - rating) / 2);
  const fullCircles = Array.from({ length: fullCirclesCount }, () => (
    <FullCircleRating />
  ));
  const emptyCircles = Array.from({ length: emptyCirclesCount }, () => (
    <CircleRating />
  ));
  if (rating % 2 !== 0) fullCircles.push(<HalfCircleRating />);
  return <div>{[...fullCircles, ...emptyCircles]}</div>;
};

export default CirclesRating;
