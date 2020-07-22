import styled from 'styled-components';
import theme from '../../theme';

export const Box = styled.li`
  position: relative;

  &:before, &:after {
    content: '';
    left: -8px;
    position: absolute;
    top: -8px;
    transition: all .35s ease-in-out;
    z-index: 2;
  }
  &:before {
    border-left: 1px solid ${ theme.colors.red };
    border-right: 1px solid ${ theme.colors.red };
    height: 0;
    width: 105%;
  }
  &:after {
    border-bottom: 1px solid ${ theme.colors.red };
    border-top: 1px solid ${ theme.colors.red };
    height: 108%;
    width: 0;
  }
  
  > div {
    display: flex;
    justify-content: space-between;
    min-height: 25px;
  }

  > a {
    img {
      border-bottom: 3px solid ${ theme.colors.red };
      clear: both;
      display: block;
      height: 250px;
      margin-bottom: 20px;
      position: relative;
      transition: all .2s linear;
      width: 100%;
      z-index: 3;
    }
  }
  :hover {
    img {
      transform: scale3d(1.05, 1.05, 1);
    }
    &:before {
      height: 108%;
    }
    &:after {
      width: 106%;
    }
  } 
`;
  export const Name = styled.h5`
    color: ${ theme.colors.grayDark };
    font-size: 14px;
    font-weight: bold;
  `;
  export const Favorite = styled.span`
    cursor: pointer;
    position: relative;
    z-index: 3;
  `;
