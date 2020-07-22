import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  background-color: ${ theme.colors.green };
`;
  export const Header = styled.header`
    display: flex;
    padding-top: 50px;
    margin: 0 auto;
    max-width: ${ theme.widths.extraLarge };

    img {
      width: 200px;
    }
  `;
  export const Content = styled.section`
    display: block;
    min-height: 500px;
    max-width: ${ theme.widths.extraLarge };
    margin: 0 auto;

    @media(max-width: ${theme.widths.extraLarge}) {
      margin 0 50px;
    }
  `;
    export const HeroInfo = styled.div`
      display: block;
      max-width: 300px;
      margin: 100px 0 0 50px;
    `;
      export const ContentFlex = styled.div`
        align-items: center;
        display: flex;
        justify-content: ${props => props.justifyContent};
        margin: 15px 0;
      `;
      export const Name = styled.h2`
        color: ${ theme.colors.grayDark};
        font-size: 30px;
        font-weight: bold;
      `;
      export const Favorite = styled.span`
        cursor: pointer;
        
        svg {
          height: 25px;
          width: 25px;
        }
      `;
      export const Description = styled.p`
        color: ${ theme.colors.gray};
        font-size: 14px;
        font-weight: normal;
        line-height: 25px;
        margin: 20px 0;

        + div {
          width: 200px;
        }
      `;
      export const LabelTitle = styled.h5`
        color: ${ theme.colors.grayDark};
        font-size: 12px;
        font-weight: bold;
      `;
      export const LabelValue = styled.span`
        color: ${ theme.colors.grayDark};
        font-size: 13px;
        font-weight: normal;
        margin-left: 10px;
      `;

    export const LastReleases = styled.div`
      margin: 100px 0 0 50px;
      max-width: ${theme.widths.extraLarge};

      h3 {
        color: ${ theme.colors.grayDark};
        font-size: 20px;
        font-weight: bold;
      }

      ul {
        display: grid;
        gap: 150px 50px;
        grid-template-columns: repeat(6, 1fr);
        padding: 100px 0;

        li {
          span {
            color: ${ theme.colors.grayDark};
            font-size: 13px;
            font-weight: bold;
            line-height: 20px;
          }
        }
      }

      @media(max-width: ${theme.widths.extraLarge}) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media(max-width: ${theme.widths.Large}) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media(max-width: ${theme.widths.medium}) {
        grid-template-columns: repeat(1, 1fr);
      }
    `;
      
    
    



    export const List = styled.ul`
      
      
    `;
      