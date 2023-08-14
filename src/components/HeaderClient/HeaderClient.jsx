import styled from 'styled-components';
import { Logo } from './Logo';
import iconSearch from '@/assets/img/header/header-search.svg';
import iconHeart from '@/assets/img/header/heart.svg';
import iconCart from '@/assets/img/header/Cart.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { OverLaySearch } from './OverLaySearch';
import { useState, useEffect } from 'react';
import DropdownHeader from './DropdownHeader';
import { Dropdown, Badge, Space, message, Drawer, Popover, Button, Avatar } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as EnUsSvg } from '@/assets/img/header/en_US.svg';
import { ReactComponent as ViVNSvg } from '@/assets/img/header/vietnam-flag-icon.svg';
import { ReactComponent as LanguageSvg } from '@/assets/img/header/language.svg';
import { SET_ASSIGN_STATE } from '@/redux/user/userSlice';
import { LocaleFormatter } from '@/locales';
import { actLogout } from '@/redux/auth/authSlice';
import { ContentPopover } from './ContentPopover';
import { actDeleteCarts } from '@/redux/order/orderAction';
import { formatMoney } from '@/utils/formatMoney';
import { HeartTwoTone } from '@ant-design/icons';
import { fetchAsyncAllWishLists } from '@/redux/wishlist/wishlistAction';

const StyledMain = styled.header`
  padding: 32.5px 0;
  position: fixed;
  z-index: 3;
  background-color: #000000;
  width: 100%;
  color: white;
  font-size: 20px;
  height: 65px;

  .layout-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-center {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 29px;
  }

  .active {
    color: #eb5757;
  }
  @media (hover: hover) {
    .menu-link {
      position: relative;
      transition: all 0.2s linear;
    }
    .menu-link:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: auto;
      right: 0;
      width: 0;
      height: 3px;
      background-color: #eb5757;
      transition: all 0.2s linear;
      transition: all 0.2s linear;
    }
    .menu-link:hover {
      color: #eb5757;
    }
    .menu-link:hover:after {
      width: 100%;
      left: 0;
      right: auto;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
  }
  .header-right-auth {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-right: 31px;
  }

  .header-cart {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
  .header-cart-content {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 11px;
  }
  .header-cart-title {
    color: #fff;
    font-size: 12px;
    font-family: Oswald;
    font-style: normal;
    font-weight: 400;

    letter-spacing: 0.12px;
  }
  .header-cart-number {
    color: #fff;
    font-size: 14px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;

    letter-spacing: 0.14px;
  }

  .header-group-text {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }
  .header-cart-number {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .fa {
    width: 30px;
    font-size: 30px;
  }
  .menu-toggle {
    display: none;
    padding: 20px 0;
  }

  .swith-language {
    width: 25px;
    height: 20px;
  }

  .icon-heart {
    width: 25px;
    height: 20px;
  }
  .icon-cart {
    width: 25px;
    height: 20px;
  }

  @media screen and (max-width: 1321px) {
    .header-center {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }
    .header-center.active-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }
    .menu-toggle {
      display: block;
    }
    .header-right-auth {
      display: none;
    }
    .header-group-text {
      display: none;
    }
    .header-cart {
      gap: 15px;
    }
  }
`;

const StyledMainText = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  a {
    color: white;
    font-size: 16px;
    font-family: Oswald;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
  }
`;

const HeaderText = ({ onClick, text, headerSearch, path, handleClickIconSearch, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledMainText onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {headerSearch && <img src={iconSearch} alt="header-search" onClick={handleClickIconSearch} />}
      <NavLink onClick={onClick} to={path} className="menu-link">
        {text}
      </NavLink>
    </StyledMainText>
  );
};

export const HeaderClient = () => {
  const [isShowOverLay, setIsShowOverLay] = useState(false);
  const [click, setClick] = useState(false);
  const { locale } = useSelector(state => state.user);
  const { currentUser } = useSelector(state => state.auth);

  const navigate = useNavigate();

  const carts = useSelector(state => state.order.carts);

  const wishLists = useSelector(state => state.wishlist.wishLists);

  const dispatch = useDispatch();

  const selectLocale = ({ key }) => {
    dispatch(SET_ASSIGN_STATE({ locale: key }));
    localStorage.setItem('locale', key);
  };

  const handleClickIconSearch = () => {
    setIsShowOverLay(isShowOverLay => !isShowOverLay);
  };

  const handleClickToggle = () => setClick(!click);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1284) {
        setClick(false);
      }
    }

    window.addEventListener('resize', handleResize);
  });

  const handleOnClickSearch = e => {
    e.preventDefault();
    setIsShowOverLay(isShowOverLay => !isShowOverLay);
  };

  const toggleClassOverLay = isShowOverLay ? 'show' : null;

  const handleOnClickLogOut = () => {
    dispatch(actLogout());
    dispatch(actDeleteCarts());
  };

  const handleClickHeart = () => {
    navigate('/account/wishlist');
  };

  const itemsUser = [
    {
      label: <Link to="/account">Account Information</Link>,
      key: '0',
    },

    {
      type: 'divider',
    },
    {
      label: <div onClick={handleOnClickLogOut}>Logout</div>,
      key: '3',
    },
  ];
  const itemAdmin = [
    {
      label: <Link to="/account">Account Information</Link>,
      key: '0',
    },
    {
      label: <Link to="/admin">Admin Page</Link>,
      key: '1',
    },

    {
      type: 'divider',
    },
    {
      label: <div onClick={handleOnClickLogOut}>Logout</div>,
      key: '3',
    },
  ];

  return (
    <>
      <OverLaySearch toggleClassOverLay={toggleClassOverLay} handleClickIconSearch={handleClickIconSearch} />
      <StyledMain>
        <div className="container1">
          <div className="layout-header">
            <div className="menu-toggle" onClick={handleClickToggle}>
              <i className={click ? 'fa fa-times' : 'fa fa-bars'} aria-hidden="true"></i>
            </div>
            <Logo />
            <ul className={click ? 'header-center active-menu' : 'header-center'}>
              <HeaderText text={<LocaleFormatter id="app.home.home" />} path="/" />
              <HeaderText text={<LocaleFormatter id="app.home.shop" />} path="/shop" />
              <HeaderText text={<LocaleFormatter id="app.home.blog" />} path="/blog" />
              <HeaderText text={<LocaleFormatter id="app.home.sale" />} path="/sale" />
              <HeaderText text={<LocaleFormatter id="app.home.contact" />} path="/contact" />

              <HeaderText
                text={<LocaleFormatter id="app.home.search" />}
                path="/search"
                headerSearch
                onClick={handleOnClickSearch}
                handleClickIconSearch={handleClickIconSearch}
              />
            </ul>
            <div className="header-right">
              {currentUser ? (
                <div className="header-right-auth">
                  <Dropdown
                    menu={{
                      items: currentUser && currentUser.role === 'ROLE_USER' ? itemsUser : itemAdmin,
                    }}
                  >
                    <a onClick={e => e.preventDefault()}>
                      <Space>
                        {currentUser.avatar === 'default.png' ? (
                          <Avatar
                            src={
                              'https://media.istockphoto.com/id/474001724/photo/businessman-icon-as-avatar-or-default-profile-picture.webp?b=1&s=170667a&w=0&k=20&c=L4FWLBUJtbhwL27g11vhSg91bLNUsYsPG0cfWO1TUfU='
                            }
                          />
                        ) : (
                          <Avatar src={currentUser.avatar} />
                        )}

                        {currentUser.name}
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              ) : (
                <div className="header-right-auth">
                  <HeaderText text={<LocaleFormatter id="app.home.signin" />} path="/login" />
                  <HeaderText text={<LocaleFormatter id="app.home.createanaccount" />} path="/register" />
                </div>
              )}

              <div className="header-cart">
                <div className="swith-language">
                  <Dropdown
                    menu={{
                      onClick: info => selectLocale(info),
                      items: [
                        {
                          key: 'vi_VN',
                          icon: <ViVNSvg />,
                          disabled: locale === 'vi_VN',
                          label: 'Việt Nam',
                        },
                        {
                          key: 'en_US',
                          icon: <EnUsSvg />,
                          disabled: locale === 'en_US',
                          label: 'English',
                        },
                      ],
                    }}
                  >
                    <span>
                      <LanguageSvg id="language-change" />
                    </span>
                  </Dropdown>
                </div>
                <div className="icon-heart" onClick={() => handleClickHeart()}>
                  <Badge count={wishLists?.length ?? 0} size={'small'} color="magenta" showZero>
                    <img src={iconHeart} alt="icon-heart" />
                  </Badge>
                </div>
                <div className="header-cart-content">
                  <div className="icon-cart">
                    <Popover
                      className="popover-carts"
                      rootClassName="popover-carts"
                      placement="topRight"
                      title={'NEW PRODUCTS ADDED'}
                      arrow
                      content={<ContentPopover carts={carts} />}
                    >
                      <Badge count={carts?.length ?? 0} size={'small'} showZero>
                        <img src={iconCart} alt="icon-cart" />
                      </Badge>
                    </Popover>
                  </div>
                  <div className="header-group-text">
                    <div className="header-cart-title">
                      <LocaleFormatter id="app.home.shoppingcart" />
                    </div>
                    <div className="header-cart-number">
                      <span>{formatMoney(carts.reduce((total, item) => total + item.totalPrice, 0))}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DropdownHeader click={click} setClick={setClick} />
      </StyledMain>
      {/* <Drawer title="CART" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer> */}
    </>
  );
};
