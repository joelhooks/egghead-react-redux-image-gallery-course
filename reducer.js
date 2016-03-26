const defaultState = {
  initialValue: 1
};

export default function images(state = defaultState, action) {
  console.log(state, action);
  
  switch(action.type) {
    case 'SELECT_IMAGE':
      return {initialValue: state.initialValue + 2};
  }

  return state;
}