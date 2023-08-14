import React from 'react';
import styled from 'styled-components';
import iconSearch from '@/assets/img/header/IconSearch.svg';

import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAsyncGetAllProducts, searchAsyncProductByName } from '@/redux/product/productAction';

const StyledMainOverLay = styled.div`
  height: 200px;
  width: 100%;
  position: fixed;
  visibility: hidden;
  opacity: 0;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: black;
  transition: all 0.25s linear;
  .content {
    height: 100%;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    padding-left: 65px;
    color: white;
  }
  &.show {
    visibility: visible;
    opacity: 1;
  }
  .closebtn {
    position: fixed;
    top: 10px;
    right: 40px;
    color: #777777;
    font-size: 50px;
    cursor: pointer;
  }
  .form-group {
    position: relative;
  }

  .form-control {
    padding: 20px 0px 20px 48px;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 20px;
    line-height: 21px;
    background-color: transparent;
    border-bottom: 1px solid #3f3f3f;
    width: 1152px;

    color: white;
  }

  .icon-search {
    position: absolute;
    top: 50%;
    left: 62px;

    transform: translateY(-50%);
  }
  .form-control:focus {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  input::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: white;
    font-size: 24px;
    font-family: Oswald;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    padding-left: 5px;
  }
  input::-moz-placeholder {
    /* Firefox 19+ */
    color: #777777;
    font-size: 24px;
  }
  input:-ms-input-placeholder {
    /* IE 10+ */
    color: #777777;
    font-size: 24px;
  }
  input:-moz-placeholder {
    /* Firefox 18- */
    color: #777777;
    font-size: 24px;
  }
`;

export const OverLaySearch = ({ toggleClassOverLay, handleClickIconSearch }) => {
  const [queryStr, setQueryStr] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const handleOnChangeInput = evt => {
    if (!evt.target.value) {
      const { pathname } = location;
      const updatedSearch = new URLSearchParams(location.search);
      updatedSearch.delete('q');

      navigate({
        pathname,
        search: updatedSearch.toString(),
      });

      dispatch(fetchAsyncGetAllProducts());
    }
    setQueryStr(evt.target.value);
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();
    if (!queryStr) {
      return;
    }
    const queryStrURI = encodeURIComponent(queryStr);

    navigate('/shop?q=' + queryStrURI);

    if (queryStrURI === '') {
      navigate('/shop');
    }
    dispatch(searchAsyncProductByName(queryStrURI));
  };

  return (
    <StyledMainOverLay className={toggleClassOverLay}>
      <div className="content">
        <span className="closebtn" title="Close Overlay" onClick={handleClickIconSearch}>
          ×
        </span>
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={queryStr}
              onChange={handleOnChangeInput}
              id="search-input"
              placeholder="Search ..."
            />
          </div>
          <img src={iconSearch} alt="icon-search" className="icon-search" />
          {/* <button type="submit" className="btn btn-primary">
            <i className="fa fa-search" />
          </button> */}
        </form>
      </div>
    </StyledMainOverLay>
  );
};
