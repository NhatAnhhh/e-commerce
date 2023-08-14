import { theme, ConfigProvider } from 'antd';
import styled from 'styled-components';
import { FormLogin } from '@/components/FormLogin';
import img1 from '@/assets/img/slider/image1.svg';
import img2 from '@/assets/img/slider/image 3.svg';
import logo from '@/assets/img/login/Logo.svg';

import { useNotAuthenticated } from '@/hooks/useNotAuthenticated';

const StyledMainLogin = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .right {
    background-image: url('src/assets/img/header/home-banner1.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .img2 {
    transform: translateX(-10%);
  }
  .l {
    position: fixed;
    filter: brightness(0) saturate(100%) invert(97%) sepia(34%) saturate(6154%) hue-rotate(180deg) brightness(113%)
      contrast(99%);
  }
  @media screen and (max-width: 1200px) {
    .right {
      display: none;
    }
    display: block;
  }
`;

const Login = () => {
  useNotAuthenticated();
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
      }}
    >
      <StyledMainLogin>
        <div className="l">
          <img src={logo} alt="logo" />
        </div>
        <FormLogin />

        <div className="right">
          <div className="img1">
            <img alt="img1" src={img1} />
          </div>
          <div className="img2">
            <img alt="img2" src={img2} />
          </div>
        </div>
      </StyledMainLogin>
    </ConfigProvider>
  );
};

export default Login;
