import React from "react";
import styled from "styled-components";

const StyledWrapperMainTitle = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 59px;
  /* identical to box height */
  margin-bottom: ${(props) => `${props.mb}px`};
  padding-bottom: ${(props) => `${props.pb}px`};
  padding-top: ${(props) => `${props.pt}px`};
  text-align: center;
  text-transform: capitalize;

  /* Dark */

  color: #000000;
`;

export const MainTitle = ({ children, mb, pb, pt }) => {
  return (
    <StyledWrapperMainTitle mb={mb} pt={pt} pb={pb}>
      {children}
    </StyledWrapperMainTitle>
  );
};
