import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import './Header.css'

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #1c2022;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 35px;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;


const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 35px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 30px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const Header = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <div className="nav">
      <Nav>
        <Logo>SnapKart</Logo>
        <Menu>
          <Item>
            <Link className='linktag' target="#" to="#">
              Home
            </Link>
          </Item>
          <Item>
            <Link className='linktag' target="#" to="#">
              Products
            </Link>
          </Item>
          <Item>
            <Link className='linktag' target="#" to="/">
              About
            </Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav >
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link className='linktag' target="#" to="#">
              Home
            </Link>
          </Item>
          <Item>
            <Link className='linktag' target="#" to="#">
              Contact
            </Link>
          </Item>
          <Item>
            <Link className='linktag' target="#" to="#">
              About
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </div>
  );
};

export default Header;
