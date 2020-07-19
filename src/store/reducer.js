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
      SAVE_STATE({
        ...state,
        favorites: !state.favorites.includes(action?.payload) ? [...state.favorites, action?.payload] : [...state.favorites]
      })
      
      return {
        ...state,
        favorites: !state.favorites.includes(action?.payload) ? [...state.favorites, action?.payload] : [...state.favorites]
      };
    default:
      return state;
  }
};
