import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 20px auto;
  border: 1px solid black;
  border-radius: 5px;
  padding: 3px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  align-self: center;
`;

const CardYear = ({ title, genre, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <h2>{genre}</h2>
      <p>{description}</p>
    </Container>
  );
};

export default CardYear;
