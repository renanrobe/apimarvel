const INITIAL_STATE = {
  loading: false,
  characters: [],
  favorites: [],
  comics: null,
  chars: [],
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
        characters: action?.payload?.results
      };
    case 'ADD_FAVORITE_HEROES':
      const controlFavorites = () => {
        const newFavorites = [ ...state.favorites ];
        
        if(!state.favorites.includes(action?.payload)){
          if( state.favorites.length >= 5 ) {
            alert('Só é possível adicionar 5 favoritos!');
          } else {
            newFavorites.push(action?.payload);
          }
          return newFavorites
        } else {
          newFavorites.splice(newFavorites.indexOf(action?.payload), 1);
          return newFavorites
        }
      }

      const saveData = {
        ...state,
        favorites: controlFavorites()
      };

      SAVE_STATE(saveData);
      return saveData
    default:
      return state;
  }
};
