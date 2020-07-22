import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHero } from '../../actions';
import logo from '../../static/logo-green.png';
import { ReactComponent as IconBook } from '../../static/ico-book.svg';
import { ReactComponent as IconVideo } from '../../static/ico-video.svg';
import { ReactComponent as IconRating } from '../../static/ico-rating.svg';
import { ReactComponent as HeartOn } from '../../static/ico-heart-true.svg';
import { ReactComponent as HeartOff } from '../../static/ico-heart-false.svg';

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
} from './charDetails.css';

const CharDetails = (props) => {
  const { match: { params } } = props;
  const dispatch = useDispatch();
  
  const handleGetHero = async () => {
    const resultHeroes =  await getHero(params.charId);
    dispatch({ type: 'GET_HERO', payload: resultHeroes });
  }

  const handleControlFavorite = (id) => {
    dispatch({ type: 'ADD_FAVORITE_HEROES', payload: id });
  }

  useEffect(() => {
    handleGetHero()
  }, []);

  const { charDetail, favorites } = useSelector(state => state);
  console.log(charDetail)
  // const urlImg = (url) => `${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`;
  
  return (
    <>
      <Container>
        <Header>
          <a href="/luizalabsfront"><img src={logo} /></a>
          <div>busca</div>
        </Header>
        <Content>
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
              { charDetail?.description != "" ? charDetail?.description : "Esse personagem não possui descrição" }
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

          <LastReleases>
            <h3>Últimos lançamentos</h3>

            <ul>
              {charDetail?.comics?.items.map(item =>
                <li>
                  {/* <img src={urlImg()} alt={item.name} /> */}
                  <span>{item.name}</span>
                </li>
              )}
            </ul>
          </LastReleases>
        </Content>
      </Container>
      <Footer />
    </>
  );
}

export default CharDetails