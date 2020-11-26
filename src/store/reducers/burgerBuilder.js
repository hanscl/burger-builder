import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.2,
};

const updateIngredient = (state, action, value) => {
  const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + value };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName] * value,
  };
  return updateObject(state, updatedState);
};

const setIngredient = (state, action) => {
  return updateObject(state, { ingredients: action.ingredients, error: false, totalPrice: 4 });
};

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, { err: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return updateIngredient(state, action, 1);
    case actionTypes.REMOVE_INGREDIENT:
      return updateIngredient(state, action, -1);
    case actionTypes.SET_INGREDIENTS:
      return setIngredient(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
