import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  margin: 0 auto;
  width: ${ theme.widths.extraLarge };
`;

export const Header = styled.header`
  margin-top: 20px;
  text-align: center;
`;

  export const Title = styled.h2`
    color: ${ theme.colors.grayDark };
    font-size: 30px;
    font-weight: bold;
    margin: 20px 0;
    text-transform: uppercase;
  `;

  export const Subtitle = styled.span`
    color: ${ theme.colors.gray };
  `;

  export const Content = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);;
    margin: 50px 0 100px;
    gap: 50px;
  `;
    export const Box = styled.div`
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

