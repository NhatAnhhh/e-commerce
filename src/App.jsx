import { BrowserRouter } from 'react-router-dom';
import { Suspense, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConfigProvider, theme as a } from 'antd';
import { setGlobalState } from './redux/global/globalSlice';
import enUS from 'antd/es/locale/en_US';
import viVN from 'antd/es/locale/vi_VN';
import dayjs from 'dayjs';
import { IntlProvider } from 'react-intl';
import { localeConfig } from './locales';
import RenderRouter from './routes';
import styled from 'styled-components';
import { actFetchMeAsync } from './redux/auth/authAction';

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  .ant-spin-dot {
    font-size: 70px;
  }
  .ant-spin-dot i {
    width: 30px;
    height: 30px;
  }
`;

const bgDark = {};

const bgLight = {};

export default function App() {
  const dispatch = useDispatch();

  const { theme } = useSelector(state => state.global);
  const { locale } = useSelector(state => state.user);

  const setTheme = (dark = true) => {
    dispatch(
      setGlobalState({
        theme: dark ? 'dark' : 'light',
      }),
    );
  };

  useEffect(() => {
    setTheme(theme === 'dark');

    // watch system theme change
    if (!localStorage.getItem('theme')) {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');

      function matchMode(e) {
        setTheme(e.matches);
      }

      mql.addEventListener('change', matchMode);
    }
  }, []);

  useLayoutEffect(() => {
    dispatch(actFetchMeAsync());
  }, []);

  useEffect(() => {
    if (locale === 'en_US') {
      dayjs.locale('en');
    } else if (locale === 'vi_VN') {
      dayjs.locale('vi');
    }
  }, [locale]);

  const getAntdLocale = () => {
    if (locale === 'en_US') {
      return enUS;
    } else if (locale === 'vi_VN') {
      return viVN;
    }
  };

  return (
    <>
      <ConfigProvider
        componentSize="middle"
        locale={getAntdLocale()}
        theme={{
          token: { colorPrimary: '#0EA5E9', bg: theme === 'dark' ? bgDark : bgLight },
          algorithm: theme === 'dark' ? a.darkAlgorithm : a.defaultAlgorithm,
        }}
      >
        <IntlProvider locale={locale.split('_')[0]} messages={localeConfig[locale]}>
          <BrowserRouter>
            <Suspense fallback={null}>
              <RenderRouter />
            </Suspense>
          </BrowserRouter>
        </IntlProvider>
      </ConfigProvider>
    </>
  );
}
