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
  console.log('initial', state)
  switch (action.type) {
    case 'GET_HEROES':
      console.log('alo', action.payload)
      
      SAVE_STATE({
        ...state,
        characters: action?.payload?.results
      })

      return {
        ...state,
        characters: action?.payload?.results
      };
    case 'ADD_FAVORITE_HEROES':
      // var newFavorites
      // if(state.favorites.includes(action?.payload)){
      //   console.log('ja tem')
      // }else{
      //   newFavorites = [ ...state.favorites, action?.payload];
      // }

      // if(state.favorites.length > 0) {
      //   state.favorites.map(item => {
      //     if(item === action?.payload) {
      //       const newFavorites = [ ...state.favorites ];
      //     }else{
      //       const newFavorites = [ ...state.favorites, action?.payload]
      //     }
      //   })
      // } else {
      //   newFavorites = [ ...state.favorites, action?.payload]
      // }
      

      console.log("state.favorites", state.favorites)

      SAVE_STATE({
        ...state,
        characters: action?.payload?.results
      })
      
      return {
        ...state,
        favorites: !state.favorites.includes(action?.payload) ? [...state.favorites, action?.payload] : [...state.favorites]
      };
    default:
      return state;
  }
};
