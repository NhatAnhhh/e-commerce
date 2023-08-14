import React from 'react';
import styled from 'styled-components';
import social1 from '@/assets/img/social/social-1.svg';
import social2 from '@/assets/img/social/07.svg';
import social3 from '@/assets/img/social/card.svg';
import social4 from '@/assets/img/social/05.svg';
import social5 from '@/assets/img/social/card2.svg';
import social6 from '@/assets/img/social/card3.svg';
import { CardImg } from '../CardImg';
import { CardSocial } from '../CardSocial';

const StyledWrapperSocial = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;

export const SocialMain = ({ numToShow }) => {
  return (
    <StyledWrapperSocial>
      <CardSocial width={200} height={200} src={social1} />
      <CardSocial width={200} height={200} src={social2} />
      <CardSocial width={200} height={200} src={social3} />
      <CardSocial width={200} height={200} src={social4} />
      {numToShow >= 5 && <CardSocial width={200} height={200} src={social5} />}
      {numToShow === 6 && <CardSocial width={200} height={200} src={social6} />}
    </StyledWrapperSocial>
  );
};
