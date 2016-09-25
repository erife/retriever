import { FETCH_ALL_ITEMS } from '../actions/index';
import { FETCH_FILTERED_ITEMS } from '../actions/index';
const INITIAL_STATE = {all_items: [], filtered_items: null, term: null};


export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
    case FETCH_ALL_ITEMS:
        return {...state, all_items: action.payload};
    case FETCH_FILTERED_ITEMS:
        return {...state, filtered_items: action.payload};
    }
    return state;
}


