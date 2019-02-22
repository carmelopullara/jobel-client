export default (state, action) => {
  switch (action.type) {
    case 'setCurrentUser':
      return {
        currentUser: action.user,
        isLoading: false,
      };

    default:
      return state;
  }
};
