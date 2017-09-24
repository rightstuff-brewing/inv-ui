// Action keys
export const CREATE_INGREDIENT = 'ingredients/CREATE_INGREDIENT';

// Initial state.
const initialState = {
  ingredients: [
    {
      name: 'Crisp Malt Wheat',
      type: { name: 'malt', displayName: 'Malt' },
      url: 'https://www.weyermann.de/eng/gelbe_seiten_en.asp?snr=1&idkat=1013&umenue=yes&idmenue=37&sprache=2'
    }
  ]
};

// Reducer function
export default (state = initialState, action) => {
  switch(action.type) {
    case CREATE_INGREDIENT:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          Object.assign({}, action.ingredient)
        ]
      };
    default:
      return state;
  }
};

// Action function
export const createIngredient = (ingredient) => {
  return dispatch => {
    dispatch({
      type: CREATE_INGREDIENT,
      ingredient: ingredient,
    })
  };
}