import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHeroes } from '../../actions' 

const Home = () => {
  const dispatch = useDispatch();

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

  const { characters } = useSelector(state => state);

  return (
    <div>
      {characters?.map(item =>
        <span key={item.id} onClick={() => handleAddFavorite(item.id)}>{item.name} - {item.favorite ? 'favorito': 'nao favorito'}<br /></span>
      )}
    </div>
  );
}

export default Home