import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';


// BurgerBuilder Action Creators

export const addIngredient = (ingredient, price) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientPrice: price,
        ingredientName: ingredient
    }
};


export const removeIngredient = (ingredient) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingredient
    }
};


export const setIngredients = ( ingredients ) => {
    return  {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
};

export const initIngredients = () => {
    return dispatch => {
        // Async Code
        axios.get( 'https://recburgerapp.firebaseio.com/Ingredients.json' )
            .then( response => {
                
                dispatch(setIngredients( response.data ));
            } )
            .catch( error => {
                // dispatch failed attempt
                dispatch( fetchIngredientsFailed() );
            } );
    }
};