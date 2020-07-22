import { Request } from '../services';

export const getHeroes = (searchString) => {
  return Request('/v1/public/characters', searchString ? { nameStartsWith: searchString } : '')
  .then(result => {
    if (result?.code === 200) {
      return result?.data
    }
  })
  .catch(error => console.log(error));
};

export const getHero = (idHero) => {
  return Request(`/v1/public/characters/${idHero}`)
  .then(result => {
    if (result?.code === 200) {
      return result?.data
    }
  })
  .catch(error => console.log(error));
};