import Axios from 'axios';

// Action keys
export const CREATE_INGREDIENT = 'ingredients/CREATE_INGREDIENT';
export const CREATE_INGREDIENT_SUCCESS = 'ingredients/CREATE_INGREDIENTS_SUCCESS';
export const FETCH_INGREDIENTS = 'ingredients/FETCH_INGREDIENTS';
export const FETCH_INGREDIENTS_SUCCESS = 'ingredients/FETCH_INGREDIENTS_SUCCESS';

// Configuration. We should find a better way to do this than hard coding paths.
const devApi = 'http://59c8099261bea80011d40d97.mockapi.io/api/ingredient';
const prodApi = '/api/ingredient';

let api;
if (process.env.NODE_ENV === 'development') {
  api = devApi;
} else if (process.env.NODE_ENV === 'production') {
  api = prodApi;
}

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
    case CREATE_INGREDIENT_SUCCESS:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          Object.assign({}, action.ingredient)
        ]
      };
    case FETCH_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredients: action.ingredients
      };
    default:
      return state;
  }
};

// Action function
export const createIngredient = (ingredient) => {
  return dispatch => {
    return Axios.post(api, ingredient)
      .then(response => {
        // Dispatch success action
        dispatch(createIngredientSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
}

export const createIngredientSuccess = (ingredient) => {
  return {
    type: CREATE_INGREDIENT_SUCCESS,
    ingredient
  }
}

export const fetchIngredientsSuccess = (ingredients) => {
  return dispatch => {
    dispatch({
      type: FETCH_INGREDIENTS_SUCCESS,
      ingredients: ingredients,
    });
  };
}

export const fetchIngredients = () => {
  return (dispatch) => {
    return Axios.get(api)
      .then(response => {
        // Dispatch the success action
        dispatch(fetchIngredientsSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
}