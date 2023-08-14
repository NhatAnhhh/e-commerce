import React, { useState } from 'react';

import { MenuDropdown } from './MenuDropdown';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const StyledMainDropdown = styled.div`
  transform: translateY(-500px);
  transition: all 0.25s linear;
  .dropdown-menu {
    background: #000;
    z-index: 50;
    /* width: 100%; */
    height: auto;
    /* display: flex; */
    /* justify-content: center;
    align-items: center; */
    /* flex-direction: column; */
    position: relative;

    list-style: none;
    text-align: start;
  }
  &.show-dropdown {
    transform: translateY(5px);
  }

  .dropdown-menu li {
    background: #000;
    cursor: pointer;
    padding: 16px;
    text-align: center;
  }

  .dropdown-menu li:hover {
    background: #828282;
  }

  /* .dropdown-menu.clicked {
    display: none;
  } */

  .dropdown-link {
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: #fff;
    /* padding: 16px; */
    font-family: Oswald;
  }

  @media screen and (max-width: 960px) {
    .fa-caret-down {
      display: none;
    }
  }
`;

const Cover = styled.div`
  padding-top: 13px;
  margin-right: 30px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
`;

const Input = styled.input`
  flex: 1;
  height: 100%;
  padding: 0 10px;
  border: 1px solid #828282;
`;

const Button = styled.button`
  height: 103%;
  padding: 0 10px;
  color: #828282;
  background-color: #c4c4c4;
  border: none;
  cursor: pointer;
  font-family: Oswald;
`;

function Dropdown({ click, setClick }) {
  const [clickUl, setClickUl] = useState(false);

  return (
    <StyledMainDropdown className={click ? 'show-dropdown' : null}>
      <ul className="dropdown-menu">
        <Cover>
          <InputWrapper>
            <Input type="text" placeholder="Enter your text" />
            <Button>FIND</Button>
          </InputWrapper>
          {MenuDropdown.map((item, index) => {
            return (
              <li key={index}>
                <NavLink className={item.cName} to={item.path} onClick={() => setClick(false)}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </Cover>
      </ul>
    </StyledMainDropdown>
  );
}

export default Dropdown;
