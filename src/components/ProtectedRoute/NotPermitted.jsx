import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';
import styled from 'styled-components';

const StyledMain403 = styled.div`
  .ant-result-title {
    color: black;
  }
  .ant-result {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 15px;
  }
  .ant-result-subtitle {
    color: black;
    font-size: 50px;
  }
`;

export const NotPermitted = () => {
  const navigate = useNavigate();
  const handleClickBackHome = () => {
    navigate('/');
  };
  return (
    <StyledMain403>
      <Result
        status="403"
        title="403"
        subTitle="You don't have permission"
        extra={
          <Button onClick={handleClickBackHome} type="primary">
            Back Home
          </Button>
        }
      />
    </StyledMain403>
  );
};
