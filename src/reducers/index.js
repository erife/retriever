import { combineReducers } from 'redux';
import FetchFilteredItems from './reducer_item_search';

const rootReducer = combineReducers({
    items: FetchFilteredItems
});

export default rootReducer;
