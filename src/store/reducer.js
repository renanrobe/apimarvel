const INITIAL_STATE = {
  loading: false,
  characters: [],
  favorites: {},
  charDetail: {}
}

const GET_STATE = () => {
  let serializedState = localStorage.getItem('LOCAL_STORAGE_LUIZA');

  if (serializedState === null) {
    return INITIAL_STATE
  }

  return JSON.parse(serializedState);
}

const SAVE_STATE = (data) => {
  let dataJson = JSON.stringify(data);
  localStorage.setItem('LOCAL_STORAGE_LUIZA', dataJson);
}

export default (state = GET_STATE(), action) => {
  switch (action.type) {
    case 'GET_HEROES':
      SAVE_STATE({
        ...state,
        characters: action?.payload?.results
      })

      return {
        ...state,
        characters: action?.  payload?.results
      };
    case 'GET_HERO':
        return {
          ...state,
          charDetail: action?.payload?.results[0]
        };
    case 'ADD_FAVORITE_HEROES':
      const controlFavorites = (data) => {
        const newFavorites = { ...state.favorites };
        
        if(!state.favorites.hasOwnProperty(data.id)){
          if(Object.keys(state.favorites).length >= 5 ) {
            alert('Só é possível adicionar 5 favoritos!');
          } else {
            newFavorites[data.id]=data;
          }
          return newFavorites
        } else {
          delete newFavorites[data.id]
          return newFavorites
        }
      }

      const saveData = {
        ...state,
        favorites: controlFavorites(action?.payload)
      };

      SAVE_STATE(saveData);
      return saveData
    default:
      return state;
  }
};
