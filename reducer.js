const defaultState = {
  initialValue: 1
};

export default function images(state = defaultState, action) {
  switch(action.type) {
    case 'SELECT_IMAGE':
      return {initialValue: state.initialValue + 2};
    default:
      return state;
  }
}