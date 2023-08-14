import React from 'react';
import styled from 'styled-components';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { TitleAccountPage } from '@/components/TitleAccountPage';
import { useState, useEffect } from 'react';
import { Breadcrumb } from 'antd';
import { BreadCrumbAccount } from './BreadCrumbAccount';

const StyledMainAccountPage = styled.div`
  padding-bottom: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 114.66px;
  .ant-breadcrumb {
    padding-top: 30px;
    padding-bottom: 20px;
    margin-bottom: 4px;
  }

  .layout {
    border: 1px solid #c4c4c4;
    width: 1454px;
    height: 1039px;
    flex-shrink: 0;
    display: flex;
    gap: 200px;
  }
  .menu {
    padding-left: 223px;
    padding-top: 73px;
    margin: 0;
  }
  .left {
    padding-top: 80px;
    font-size: 50px;
    color: black;
    width: 45%;
  }
  li {
    margin-top: 10px;
  }

  li .trading-left-link {
    font-family: Oswald;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    color: #828282;
    width: 223px;
    height: 44px;
    display: flex;
    align-items: center;
    padding-left: 13px;
    transition: all 0.25s linear;
  }
  li .trading-left-link:hover {
    background-color: #f0f2f2;
    color: #000;
  }

  li .active {
    background-color: #f0f2f2;
    color: #000;
  }
`;

const AccountPage = () => {
  const [textTitle, setTextTitle] = useState('');
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case '/account':
        setTextTitle('My Dashboard');
        break;
      case '/account/edit':
        setTextTitle('Edit Account Information');
        break;
      case '/account/address':
        setTextTitle('Add New Address');
        break;
      case '/account/myorders':
        setTextTitle('My Orders');
        break;
      case '/account/wishlist':
        setTextTitle('My Wishlist');
        break;
      case '/account/newsletter':
        setTextTitle('My Newsletter');
        break;

      default:
        break;
    }
  }, [location]);

  return (
    <StyledMainAccountPage>
      <BreadCrumbAccount breadcrumbtitle={textTitle} />
      <TitleAccountPage text={textTitle} />

      <div className="layout">
        <ul className="menu">
          <li>
            <NavLink end to="/account" className="trading-left-link">
              Account Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/account/edit" className="trading-left-link">
              Account Information
            </NavLink>
          </li>
          <li>
            <NavLink to="/account/address" className="trading-left-link">
              Account Address
            </NavLink>
          </li>
          <li>
            <NavLink to="/account/myorders" className="trading-left-link">
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/account/wishlist" className="trading-left-link">
              My Wishlist
            </NavLink>
          </li>
          <li>
            <NavLink to="/account/newsletter" className="trading-left-link">
              Newsletter Subscriptions
            </NavLink>
          </li>
        </ul>
        <div className="left">
          <Outlet />
        </div>
      </div>
    </StyledMainAccountPage>
  );
};

export default AccountPage;
