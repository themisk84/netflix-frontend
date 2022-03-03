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

const Logo = styled.img`
  width: 100%;
  height: 200px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="/assets/Netflix_logo.png" alt="netflix logo" />
    </HeaderContainer>
  );
};

export default Header;
