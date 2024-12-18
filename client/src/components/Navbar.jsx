import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ "marginLeft": "4px"})}
`;

const Input = styled.input`
  border: none;
  &:focus {
        outline: none;
        box-shadow: 0px 0px 2px white;
    }
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: black;
  text-align: center;
  outline: none;
  cursor: pointer;
  ${mobile({ fontSize: "14px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${'' /* outline: none;
  color: black; */}
  ${mobile({ fontSize: "12px", marginLeft: "7px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const user = useSelector((state) => state.user.currentUser);
  console.log(user)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Logo>
            Let's Shop!
            </Logo>
          </Link>
        </Center>
        <Right>
        {user && (
          <Link to="/logout" style={{ textDecoration: 'none' }}>
          <MenuItem> LOG OUT</MenuItem>
          </Link>
        )}
        {!user && (
          <>
          <Link to="/register">
          <MenuItem >REGISTER</MenuItem>
          </Link>
          <Link to="/login">
          <MenuItem>SIGN IN</MenuItem>
          </Link>
          </>
        )}
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
