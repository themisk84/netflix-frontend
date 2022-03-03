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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 60px;
  height: 40px;
  background-color: red;
  color: white;
`;

const ButtonGenre = ({ onHandleGenre, type }) => {
  return (
    <Container>
      <ButtonContainer>
        <Button onClick={onHandleGenre} value={type}>
          {type}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default ButtonGenre;
