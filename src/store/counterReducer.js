const initialState = {
  count: 0,
};

const t = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  SET: "SET",
};

export const counterReducer = (state = initialState, action) => {
  if (action.type === t.INCREMENT) {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === t.DECREMENT) {
    return {
      ...state,
      count: state.count - 1,
    };
  }

  if (action.type === t.SET) {
    return {
      ...state,
      count: action.payload.count,
    };
  }

  return state;
};

export const increment = () => ({ type: t.INCREMENT });
export const decrement = () => ({ type: t.DECREMENT });
export const set = (count) => ({
  type: t.SET,
  payload: {
    count,
  },
});

export default counterReducer;
