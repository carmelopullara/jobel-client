export default (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        currentUser: action.user,
        isLoading: false,
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        currentUser: null,
        isLoading: false,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
