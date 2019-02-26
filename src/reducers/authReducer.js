export default (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        currentUser: action.user,
        isLoading: false,
      };
    case 'LOGIN_FAIL':
      return {
        currentUser: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
