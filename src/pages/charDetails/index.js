import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHero, getHeroComics } from '../../actions';
import logo from '../../static/logo-green.png';
import { ReactComponent as IconBook } from '../../static/ico-book.svg';
import { ReactComponent as IconVideo } from '../../static/ico-video.svg';
import { ReactComponent as IconRating } from '../../static/ico-rating.svg';
import { ReactComponent as HeartOn } from '../../static/ico-heart-true.svg';
import { ReactComponent as HeartOff } from '../../static/ico-heart-false.svg';
import icoloading from '../../static/loading.gif';

import Footer from '../../components/Footer';

import {
  Container,
  Header,
  Content,
  HeroInfo,
  Name,
  Favorite,
  Description,
  ContentFlex,
  LabelTitle,
  LabelValue,
  LastReleases,
  Loading,
  InfosPhoto
} from './charDetails.css';

const CharDetails = (props) => {
  const { match: { params } } = props;
  const dispatch = useDispatch();
  
  const handleGetHero = async () => {
    dispatch({ type: 'START_LOADING' });

    const resultHeroes =  await getHero(params.charId);
    dispatch({ type: 'GET_HERO', payload: resultHeroes });

    const resultComics =  await getHeroComics(params.charId);
    dispatch({ type: 'GET_HERO_COMICS', payload: resultComics });
  }

  const handleControlFavorite = (id) => {
    dispatch({ type: 'ADD_FAVORITE_HEROES', payload: id });
  }

  useEffect(() => {
    handleGetHero()
  }, []);

  const { charDetail, favorites, loading, charDetailComics } = useSelector(state => state);
  const urlImg = (url) => `${url?.path}/portrait_uncanny.${url?.extension}`;

  return (
    <>
      <Container>
        <Header>
          <a href="/apimarvel"><img src={logo} alt="Marvel" /></a>
        </Header>
        <Content>
          {!loading ?
            <>
              <InfosPhoto>
                <HeroInfo>
                  <ContentFlex justifyContent="space-between">
                    <Name>{ charDetail?.name }</Name>
                    <Favorite>
                      {
                        favorites.hasOwnProperty(charDetail?.id) ?
                          <HeartOn onClick={() => handleControlFavorite(charDetail)} />
                          :
                          <HeartOff onClick={() => handleControlFavorite(charDetail)} />
                      }
                    </Favorite>
                  </ContentFlex>

                  <Description>
                    { charDetail?.description !== "" ? charDetail?.description : "Esse personagem não possui descrição" }
                  </Description>

                  <div>
                    <ContentFlex justifyContent="space-between">
                      <div>
                        <LabelTitle>Quadrinhos</LabelTitle>
                        <ContentFlex>
                          <IconBook />
                          <LabelValue>{charDetail?.comics?.available}</LabelValue>
                        </ContentFlex>
                      </div>
                      <div>
                        <LabelTitle>Filmes</LabelTitle>
                        <ContentFlex>
                          <IconVideo />
                          <LabelValue>{charDetail?.series?.available}</LabelValue>
                        </ContentFlex>
                      </div>
                    </ContentFlex>

                    <ContentFlex>
                      <LabelTitle>Rating:</LabelTitle>
                      <LabelValue><IconRating /></LabelValue>
                    </ContentFlex>

                    <ContentFlex>
                      <LabelTitle>Último quadrinho:</LabelTitle>
                      <LabelValue>13 fev. 2020</LabelValue>
                    </ContentFlex>
                  </div>
                </HeroInfo>
                <img src={urlImg(charDetail.thumbnail)} alt="Carregando..." />
              </InfosPhoto>

              <LastReleases>
                <h3>Últimos lançamentos</h3>
                
                {!loading ?
                  <>
                    {charDetailComics?.length > 0 ?
                      <ul>
                        {
                          charDetailComics?.map(item =>
                            <li key={item.id}>
                              <img src={urlImg(item.thumbnail)} alt={item.name} />
                              <span>{item.title}</span>
                            </li>
                          ) 
                        }
                      </ul>
                      :
                      <span>Esse personagem não possui Quadrinhos!</span>
                    }
                  </>
                :
                  <Loading><img src={icoloading} alt="Carregando..." /></Loading>
                }
              </LastReleases>
            </>
          :
            <Loading><img src={icoloading} alt="Carregando..." /></Loading>
        }
        </Content>
      </Container>
      <Footer />
    </>
  );
}

export default CharDetails