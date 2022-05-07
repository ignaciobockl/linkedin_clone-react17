import { types } from "../types/types";



const initialState = {};

export const exampleReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.newsLoad:
            return {
                ...state,
                ...action.payload
            } 

        default:
            return state;

    }

}