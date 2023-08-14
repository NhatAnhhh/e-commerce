import React, { useState, Suspense, useEffect } from 'react';
import { Layout, message, Drawer, theme as antTheme, ConfigProvider } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import TagsView from '../../../components/tagView/tagView';
import { SET_ASSIGN_STATE, SET_MENU_LIST } from '../../../redux/user/userSlice';
import MenuComponent from '../../../components/Menu/Menu';
import { getFirstPathCode } from '../../../utils/getFirstPathCode';
import { items } from '../../../mocks/menuAdminData';
import { HeaderComponent } from '../../../components/HeaderAdmin/Header';
import { getGlobalState } from '../../../utils/getGloabal';
import { ProtecredRoute } from '@/components/ProtectedRoute';
import userService from '@/services/userService';
import { fetchAllAsyncCatalogs } from '@/redux/catalog/catalogAction';
import { fetchAllAsyncColors } from '@/redux/color/colorAction';
import { fetchAllAsyncSizes } from '@/redux/size/sizeAction';
import { fetchAsyncGetAllProducts } from '@/redux/product/productAction';
import { fetchAllAsyncLengths } from '@/redux/length/lengthAction';
import { fetchAsyncOrders } from '@/redux/order/orderAction';

const WIDTH = 992;
const { Content, Sider, Footer } = Layout;

const StyledMainLayoutAdmin = styled.div`
  .layout-page {
    height: 100%;
    .actions {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      > * {
        margin-left: 40px;
        height: 100%;
        display: flex;
        align-items: center;
        .notice {
          display: block;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 22px;
          height: 22px;
          cursor: pointer;
        }
      }
    }
  }

  .footer {
    font-size: 20px;
    text-align: center;
    padding: 10px 0px;
  }
  .avatar-name {
    margin-left: 10px;
  }

  .layout-page-content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .layout-page-content > :nth-child(1) .ant-tabs-bar {
    padding: 10px 0 0;
  }

  .layout-page-content > :nth-child(2) {
    flex: auto;
    overflow: auto;
    padding: 6px;
    box-sizing: border-box;
  }
  .layout-page-content > :nth-child(2) .innerText {
    padding: 24px;
    border-radius: 2px;
    display: block;
    line-height: 32px;
    font-size: 16px;
  }

  .layout-page-sider {
    box-sizing: border-box;
    margin-bottom: 10px;
  }

  .layout-page-header {
    padding: 0 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9;
    box-shadow: 0 4px 10px #dddddd;
  }

  .layout-page-header svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .layout-page-header-main {
    padding: 0 15px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .layout-page-sider-menu {
    border-right: none !important;
  }
  .ant-menu-inline-collapsed {
    width: 79px !important;
  }

  .notice-description {
    font-size: 12px;
    &-datetime {
      margin-top: 4px;
      line-height: 1.5;
    }
  }

  .notice-title {
    display: flex;
    justify-content: space-between;
  }

  .tagsView-extra {
    height: 100%;
    width: 50px;
    cursor: pointer;
    display: block;
    line-height: 40px;
    text-align: center;
  }

  .themeSwitch {
    position: fixed;
    right: 32px;
    bottom: 102px;
    cursor: pointer;
    > span {
      display: block;
      text-align: center;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
        0 9px 28px 8px rgba(0, 0, 0, 0.05);
      width: 44px;
      height: 44px;
      line-height: 44px;
      font-size: 22px;
      z-index: 10001;
    }
  }

  .theme-color-content {
    display: flex;
    .theme-color-block {
      width: 20px;
      height: 20px;
      margin-right: 8px;
      color: #fff;
      font-weight: 700;
      text-align: center;
      border-radius: 2px;
      cursor: pointer;
      border-radius: 2px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const LayoutAdmin = () => {
  const location = useLocation();
  const [openKey, setOpenkey] = useState();
  const [selectedKey, setSelectedKey] = useState(location.pathname);
  const [menuList, setMenuList] = useState([]);
  const { device, collapsed } = useSelector(state => state.user);
  const isMobile = device === 'MOBILE';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = antTheme.useToken();

  const handleLogout = async () => {
    const res = await callLogout();
    if (res && res.data) {
      dispatch(doLogoutAction());
      message.success('Đăng xuất thành công');
      navigate('/');
    }
  };

  const initMenuListAll = menu => {
    const MenuListAll = [];

    menu.forEach(m => {
      if (!m?.children?.length) {
        MenuListAll.push(m);
      } else {
        m?.children.forEach(mu => {
          MenuListAll.push(mu);
        });
      }
    });

    return MenuListAll;
  };

  const toggle = () => {
    dispatch(
      SET_ASSIGN_STATE({
        collapsed: !collapsed,
      }),
    );
  };

  useEffect(() => {
    const code = getFirstPathCode(location.pathname);

    setOpenkey(code);
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  const fetchAllOrders = async () => {
    await dispatch(fetchAsyncOrders());
  };

  const fetchAllCatalogs = async () => {
    await dispatch(fetchAllAsyncCatalogs());
  };

  const fetchAllColors = async () => {
    await dispatch(fetchAllAsyncColors());
  };

  const fetchAllSizes = async () => {
    await dispatch(fetchAllAsyncSizes());
  };

  const fetchAllLengths = async () => {
    await dispatch(fetchAllAsyncLengths());
  };

  const fetchAllProducts = async () => {
    await dispatch(fetchAsyncGetAllProducts());
  };

  useEffect(() => {
    dispatch(
      SET_MENU_LIST({
        menuList: initMenuListAll(items),
      }),
    );
    setMenuList(items);

    fetchAllCatalogs();
    fetchAllColors();
    fetchAllSizes();
    fetchAllProducts();
    fetchAllLengths();
    fetchAllOrders();
  }, []);

  useEffect(() => {
    window.onresize = () => {
      const { device } = getGlobalState();
      const rect = document.body.getBoundingClientRect();
      const needCollapse = rect.width < WIDTH;
      dispatch(
        SET_ASSIGN_STATE({
          device,
          collapsed: needCollapse,
        }),
      );
    };
  }, [dispatch]);

  return (
    <StyledMainLayoutAdmin>
      <Layout className="layout-page">
        <HeaderComponent collapsed={collapsed} toggle={toggle} />
        <Layout>
          {!isMobile ? (
            <Sider
              className="layout-page-sider"
              trigger={null}
              collapsible
              style={{ backgroundColor: token.token.colorBgContainer, height: '100%' }}
              collapsedWidth={isMobile ? 0 : 80}
              collapsed={collapsed}
              breakpoint="md"
            >
              <MenuComponent
                menuList={menuList}
                openKey={openKey}
                onChangeOpenKey={k => setOpenkey(k)}
                selectedKey={selectedKey}
                onChangeSelectedKey={k => setSelectedKey(k)}
              />
            </Sider>
          ) : (
            <Drawer
              width={200}
              placement="left"
              bodyStyle={{ padding: 0, height: '100%' }}
              closable={false}
              onClose={toggle}
              open={!collapsed}
            >
              <MenuComponent
                menuList={menuList}
                openKey={openKey}
                onChangeOpenKey={k => setOpenkey(k)}
                selectedKey={selectedKey}
                onChangeSelectedKey={k => setSelectedKey(k)}
              />
            </Drawer>
          )}
          <Content className="layout-page-content">
            <TagsView />
            <Suspense fallback={null}>
              <Outlet />
              <div className="footer"> ©2023 Created by ISW GROUP 2 </div>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </StyledMainLayoutAdmin>
  );
};

export default LayoutAdmin;
