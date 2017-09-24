// Action keys
export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED';
export const DECREMENT = 'counter/DECREMENT';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      };
    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      };
    default:
      return state;
  }
}

export const increment = () => {
  return dispatch => {
    // Dispatch the INCREMENT_REQUESTED action
    dispatch({
      type: INCREMENT_REQUESTED
    });

    // Synchronously dispatch the INCREMENT action
    dispatch({
      type: INCREMENT
    });
  };
}

export const incrementAsync = () => {
  return dispatch => {
    // Dispatch the INCREMENT_REQUESTED action immediately
    dispatch({
      type: INCREMENT_REQUESTED
    });

    // Delay 3000 ms before dispatching the INCREMENT action
    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      });
    }, 3000);
  };
}

export const decrement = () => {
  return dispatch => {
    // Dispatch the DECREMENT_REQUESTED action
    dispatch({
      type: DECREMENT_REQUESTED
    });

    // Synchronously dispatch the INCREMENT action
    dispatch({
      type: DECREMENT
    });
  };
}

export const decrementAsync = () => {
  return dispatch => {
    // Dispatch the DECREMENT_REQUESTED action immediately
    dispatch({
      type: DECREMENT_REQUESTED
    });

    // Delay 3000 ms before dispatching the DECREMENT action
    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      });
    }, 3000);
  };
}