import styled from 'styled-components';
import theme from '../../theme';

export const Box = styled.li`
  > div {
    display: flex;
    justify-content: space-between;
    min-height: 25px;
  }

  > img {
    border-bottom: 3px solid ${ theme.colors.red };
    clear: both;
    display: block;
    height: 250px;
    margin-bottom: 20px;
    width: 100%;
  }
`;
  export const Name = styled.h5`
    color: ${ theme.colors.grayDark };
    font-size: 14px;
    font-weight: bold;
  `;
  export const Favorite = styled.span`
    cursor: pointer;
  `;
