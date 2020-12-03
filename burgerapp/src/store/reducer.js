import * as actionTypes from './actions';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 0,
};


const reducer = (state = initialState, action) => {
    const { type, ingredientName, purchasable } = action;

    switch(type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [ ingredientName ]: state.ingredients[ ingredientName ] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[ ingredientName ],
            }
        case actionTypes.REMOVE_INGREDIENT:
                return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [ ingredientName ]: state.ingredients[ ingredientName ] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[ ingredientName ],
            }

        // case actionTypes.ORDER_BURGER:
        //     return {

        //     }
        default:
            return state;
    };


};


export default reducer;