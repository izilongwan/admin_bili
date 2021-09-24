const initialState = {
  user: 'izilong'
}

export default (state = initialState, { type, data }) => {
  switch (type) {
    case 'SET_USER':
      state.user = data;
      break;

    default:
      break;
  }

  return { ...state };
}
