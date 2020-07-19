import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHeroes } from '../../actions';
import { ReactComponent as Logo } from '../../static/logo.svg';
import { ReactComponent as HeartOn } from '../../static/ico-heart-true.svg';
import { ReactComponent as HeartOff } from '../../static/ico-heart-false.svg';
import Footer from '../../components/Footer';
import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Box,
  Name
} from './home.css';

const Home = () => {
  const dispatch = useDispatch();

  const [showFavortes, setCount] = useState(false);

  const handleShowFavortes = () => {
    setCount(!showFavortes);
  }

  const handleGetHeroes = async () => {
    const resultHeroes =  await getHeroes();
    dispatch({ type: 'GET_HEROES', payload: resultHeroes });
  }

  const handleAddFavorite = (id) => {
    dispatch({ type: 'ADD_FAVORITE_HEROES', payload: id });
  }

  useEffect(() => {
    handleGetHeroes()
  }, []);

  const { characters, favorites } = useSelector(state => state);

  return (
    <>
      <Container>
        <Header>
          <Logo />
          <Title>Explore o universo</Title>
          <Subtitle>
            Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama -
            e aqueles que você descobrirá em breve!
          </Subtitle>
          <span onClick={() => handleShowFavortes()}>exibir apenas favoritos</span>
        </Header>

        <Content>
          {characters?.map(item =>
            showFavortes && favorites.includes(item.id) ? <Box key={item.id}>
              <img src={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`} />
              
              <div>
                <Name>a-{item.name}</Name>
                <div>{favorites.includes(item.id) ? <HeartOn /> : <HeartOff onClick={() => handleAddFavorite(item.id)} />}</div>
              </div>
            </Box> : 
            !showFavortes && <Box key={item.id}>
              <img src={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`} />
              
              <div>
                <Name>{item.name}</Name>
                <div>{favorites.includes(item.id) ? <HeartOn /> : <HeartOff onClick={() => handleAddFavorite(item.id)} />}</div>
              </div>
            </Box>
          )}
        </Content>
      </Container>
      <Footer />
    </>
  );
}

export default Home