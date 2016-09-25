import { combineReducers } from 'redux';
import ItemsReducer from './reducer_items';
import FetchResult from './reducer_item_search';

const rootReducer = combineReducers({
    items: ItemsReducer,
    fetchResult: FetchResult
});

export default rootReducer;
