import React from 'react';
import styled from 'styled-components';
import { MainTitle } from '../MainTitle';
import { SocialMain, SocialText } from '../SocialContent';
import { LocaleFormatter } from '@/locales';

const StyledSocialWrapper = styled.div``;

const Social = () => {
  return (
    <StyledSocialWrapper>
      <div className="container1">
        <MainTitle pt={60} pb={53}>
          <LocaleFormatter id='app.home.social' />
        </MainTitle>
        <SocialMain numToShow={6} />
        <SocialText />
      </div>
    </StyledSocialWrapper>
  );
};

export default Social;
