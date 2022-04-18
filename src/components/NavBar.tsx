import React from "react";
import styled from "styled-components";
import Bitcoin from "../assets/Bitcoin.png";
import SearchIcon from "@mui/icons-material/Search";
type Props = {};

const Container = styled.div`
  height: 50px;
  border: 1px solid #ccc;
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  flex: 1;
  &:focus-visible {
    outline: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Text = styled.span`
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 1.5rem;
  color: #4a4a4a;
  &:hover {
    color: black;
  }
`;

const ImgBc = styled.img`
  width: 50px;
  height: 50px;
`;

const NavBar = (props: Props) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <ImgBc src={Bitcoin} />
          <Text>Home</Text>
          <Text>Coins</Text>
          <Text>News</Text>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Center>
        <Right>
          <Text>Register</Text>
          <Text>Login</Text>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
