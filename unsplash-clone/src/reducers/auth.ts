const INITIAL_STATE = {
  isLoggedIn: false
};

const auth = (state: any = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case 'test':
      return { ...state, text: action.payload };
    default:
      return state;
  }
}

export { auth }
