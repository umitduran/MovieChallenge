const Reducer = (state, action) => {
  switch (action.type) {
    case 'GET_MOVIES_LIST':
      return {
        ...state,
        movies: action.payload,
      };

    case 'SET_MOVIE':
      return {
        ...state,
        movieDetail: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
