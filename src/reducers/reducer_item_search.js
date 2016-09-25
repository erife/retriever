import { FETCH_FILTERED_ITEMS } from '../actions/index';
const INITIAL_STATE = {all_items: [], filtered_items: null, term: null};


export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
    case FETCH_FILTERED_ITEMS:
        return {...state, filtered_items: action.payload};
    default:
        return state;
    }
}


