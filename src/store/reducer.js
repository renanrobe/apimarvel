const INITIAL_STATE = {
  loading: false,
  characters: [],
  favorites: [],
  comics: null,
  chars: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_HEROES':
      console.log('alo', action.payload)
      return {
        ...state,
        characters: action?.payload?.results
      };
    case 'ADD_FAVORITE_HEROES':
      console.log(state.favorites)
      
      // for (let heroe of state.characters) {
      //   if(heroe.id === action?.payload) {
      //     if(heroe.favorite === true){
      //       favorites.push(...heroe.id, favorite: false})
      //     }else{
      //       favorites.push({...heroe, favorite: true})
      //     }
      //   }else{
      //     favorites.push({...heroe})
      //   }
      // }

      const test = action?.payload
      console.log(test)
      
      return {
        ...state,
        favorites: state.favorites, test
        //characters: newCharacters,
      };
    default:
      return state;
  }
};
