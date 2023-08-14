import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as MoonSvg } from '@/assets/img/header/moon.svg';
import { ReactComponent as SunSvg } from '@/assets/img/header/sun.svg';
import { ReactComponent as LanguageSvg } from '@/assets/img/header/language.svg';
import { ReactComponent as EnUsSvg } from '@/assets/img/header/en_US.svg';
import { ReactComponent as ViVNSvg } from '@/assets/img/header/vietnam-flag-icon.svg';
import { DownOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { createElement } from 'react';
import { Dropdown, Layout, theme as antTheme, Tooltip, Space, Avatar } from 'antd';
import { setGlobalState } from '../../redux/global/globalSlice';
import { SET_ASSIGN_STATE } from '@/redux/user/userSlice';
import { LocaleFormatter, useLocale } from '@/locales';
import styled from 'styled-components';
import './header.scss';
import { HeaderNoticeComponent } from './HeaderNotice';

const StyledHeaderLogo = styled.div`
  position: relative;
`;

const { Header } = Layout;

export const HeaderComponent = ({ collapsed, toggle }) => {
  const dispatch = useDispatch();

  const { device, locale } = useSelector(state => state.user);
  const { currentUser } = useSelector(state => state.auth);
  const { theme } = useSelector(state => state.global);
  const token = antTheme.useToken();
  const { formatMessage } = useLocale();
  const navigate = useNavigate();
  const itemsDropdown = [
    {
      label: <label style={{ cursor: 'pointer' }}>Quản lý tài khoản</label>,
      key: 'account',
    },
    {
      label: (
        <label style={{ cursor: 'pointer' }} onClick={() => handleLogout()}>
          Đăng xuất
        </label>
      ),
      key: 'logout',
    },
  ];

  const selectLocale = ({ key }) => {
    dispatch(SET_ASSIGN_STATE({ locale: key }));
    localStorage.setItem('locale', key);
  };

  const onChangeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    dispatch(
      setGlobalState({
        theme: newTheme,
      }),
    );
  };
  return (
    <Header className="layout-page-header bg-2" style={{ backgroundColor: token.token.colorBgContainer }}>
      {device !== 'MOBILE' && (
        <StyledHeaderLogo style={{ width: collapsed ? 80 : 200 }}>
          <div className="wrapper">
            <div className="box-wrap">
              <div className="box one"></div>
              <div className="box two"></div>
              <div className="box three"></div>
              <div className="box four"></div>
              <div className="box five"></div>
              <div className="box six"></div>
            </div>
          </div>
        </StyledHeaderLogo>
      )}
      <div className="layout-page-header-main">
        <div onClick={toggle}>
          <span id="sidebar-trigger">{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
        </div>
        <div className="actions">
          {/* <HeaderNoticeComponent /> */}
          <Tooltip
            title={formatMessage({
              id: theme === 'dark' ? 'gloabal.tips.theme.lightTooltip' : 'gloabal.tips.theme.darkTooltip',
            })}
          >
            <span>
              {createElement(theme === 'dark' ? MoonSvg : SunSvg, {
                onClick: onChangeTheme,
              })}
            </span>
          </Tooltip>

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
          <div>
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
          </div>
        </div>
      </div>
    </Header>
  );
};
