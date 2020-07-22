import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as HeartOn } from '../../static/ico-heart-true.svg';
import { ReactComponent as HeartOff } from '../../static/ico-heart-false.svg';
import {
  Box,
  Name,
  Favorite
} from './boxHome.css';

const BoxHome = (props) => {
  const { item, favorites } = props;
  const dispatch = useDispatch();

  const handleAddFavorite = (id) => {
    dispatch({ type: 'ADD_FAVORITE_HEROES', payload: id });
  }
  
  const urlImg = `${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`;

  return (
    <Box>
      <a href={`/charDetails/${item.id}`}><img src={urlImg} alt={item.name} /></a>
      <div>
        <Name>{item.name}</Name>
        <Favorite>
          {
            favorites.includes(item.id) ?
              <HeartOn onClick={() => handleAddFavorite(item.id)} />
              :
              <HeartOff onClick={() => handleAddFavorite(item.id)} />
          }
        </Favorite>
      </div>
    </Box>
  );
}

export default BoxHome