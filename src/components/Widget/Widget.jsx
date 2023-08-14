import React from 'react';
import styled from 'styled-components';
import checked from '@/assets/img/widget/checked.svg'
const StyledWidget = styled.div`
  /* height: 200px; */
  display: none;
  @media only screen and (max-width: 500px) {
    display: unset;
    margin-top: 28px;
    margin-bottom: 0;
    .widget{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 7px 0px;
        background: var(--main-color, #E6F1FA);
    }
    .widget-title{
        color: #000;
        font-family: Oswald;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    .wrap{
        display: flex;
        align-items: center;
        gap: 0px 14px;
    }
    
  }
`;

export const Widget = () => {
    return (
        <StyledWidget>
            <div className="container1 widget">
                <ul>
                    <li className='widget-title'><p className='wrap'><img src={checked} alt="icon" />Duties and Taxes Guaranteed</p></li>
                    <li className='widget-title'><p className='wrap'><img src={checked} alt="icon" />Free Express Shipping</p></li>
                    <li className='widget-title'><p className='wrap'><img src={checked} alt="icon" />Customer Love</p></li>
                    <li className='widget-title'><p className='wrap'><img src={checked} alt="icon" />Easy Returns</p></li>
                    <li className='widget-title'><p className='wrap'><img src={checked} alt="icon" />Secure Payment</p></li>
                </ul>
            </div>
        </StyledWidget>
    );
};