import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';


// creating action creators
// see index.js in ./action

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
};


export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
};

export const setIngredient = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
} 

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://my-burger-builder-app-b26eb-default-rtdb.firebaseio.com/ingredients.json' )
            .then( response => {
                dispatch(setIngredient(response.data))
            } )
            .catch( error => {
                dispatch(fetchIngredientsFailed())
            } );
    }
};