import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  /* align-items: flex-end; */
  height: 250px;
  color: white;
  background-color: black;
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

const Logo = styled.img`
  width: 100%;
  height: 200px;
`;

const Header = ({ onSortContent, page }) => {
  return (
    <HeaderContainer>
      <Logo src="/assets/Netflix_logo.png" alt="netflix logo" />
      <ButtonContainer>
        <Button onClick={() => onSortContent("tv show", page)}>TV Shows</Button>
        <Button onClick={() => onSortContent("movie", page)}>Movies</Button>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
