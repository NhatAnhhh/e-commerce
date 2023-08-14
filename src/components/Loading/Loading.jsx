import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import styled from "styled-components";

const StyledMainLoading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Loading = () => {
  return (
    <StyledMainLoading>
      <PropagateLoader color="#36d7b7" />
    </StyledMainLoading>
  );
};
