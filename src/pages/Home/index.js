import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHeroes } from '../../actions';
import { ReactComponent as Logo } from '../../static/logo.svg';
import { ReactComponent as IconSearch } from '../../static/ico-search.svg';
import { ReactComponent as IconSuperHero } from '../../static/ico-superhero.svg';
import { ReactComponent as IconHeartOn } from '../../static/ico-heart-true.svg';
import { ReactComponent as IconToggleOff } from '../../static/ico-toggle-off.svg';
import { ReactComponent as IconToggleOn } from '../../static/ico-toggle-on.svg';

import Footer from '../../components/Footer';
import BoxHome from '../../components/BoxHome';
import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  List,
  Search,
  Toolbar,
  Sort,
  Toggle,
  Favorites
} from './home.css';

const Home = () => {
  const dispatch = useDispatch();
  const [showFavortes, setshowFavortes] = useState(false);
  const [sortHeroes, setSortHeroes] = useState(false);
  const [termSearch, setTermSearch] = useState('');

  const handleShowFavortes = () => {
    setshowFavortes(!showFavortes);
  }

  const handleGetHeroes = async () => {
    const resultHeroes =  await getHeroes();
    dispatch({ type: 'GET_HEROES', payload: resultHeroes });
  }

  const handleSearchHeroes = async (event) => {
    if (event.key === 'Enter') {
      const resultHeroes =  await getHeroes(termSearch);
      dispatch({ type: 'GET_HEROES', payload: resultHeroes });
    }
  }

  const handleSortHeroes = (characters) => {
    if(sortHeroes) {
      return characters?.sort((a, b) => a.name.localeCompare(b.name))
    } else {
      return characters?.sort((a, b) => b.name.localeCompare(a.name))
    }
  }

  useEffect(() => {
    handleGetHeroes()
  }, []);

  const { characters, favorites } = useSelector(state => state);

  return (
    <>
      <Container>
        <Header>
          <a href="/luizalabsfront"><Logo /></a>
          <Title>Explore o universo</Title>
          <Subtitle>
            Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama -
            e aqueles que você descobrirá em breve!
          </Subtitle>
          <Search>
            <IconSearch />
            <input
              placeholder="Procure por heróis"
              value={termSearch} 
              type="text"
              onChange={e => setTermSearch(e.target.value)}
              onKeyDown={e => handleSearchHeroes(e)}
            />
          </Search>
        </Header>

        <Content>
          <Toolbar>
            <p>Encontramos {characters?.length > 0 ? characters.length: 0} heróis</p>
            <div>
              <Sort onClick={() => setSortHeroes(!sortHeroes)}><IconSuperHero /> Ordenar por nome - A/Z</Sort>
              <Toggle onClick={() => handleShowFavortes()}>
                { showFavortes ? <IconToggleOn /> : <IconToggleOff /> }
              </Toggle>
              <Favorites><IconHeartOn /> Somente favoritos</Favorites>
            </div>
          </Toolbar>

          <List>
            {handleSortHeroes(characters)?.map(item =>
              showFavortes && favorites.includes(item.id) ? <BoxHome key={item.id} item={item} favorites={favorites} /> :
              !showFavortes && <BoxHome key={item.id} item={item} favorites={favorites} />
            )}
          </List>
        </Content>
      </Container>
      <Footer />
    </>
  );
}

export default Home