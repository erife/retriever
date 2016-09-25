import all_items from '../reducers/reducer_items';
export const FETCH_ALL_ITEMS = 'FETCH_ALL_ITEMS';
export const FETCH_FILTERED_ITEMS = 'FETCH_FILTERED_ITEMS';
    
export function fetchFilteredItems(term) {
    const re = new RegExp(term)
    console.log(re)
    const full_item_list = all_items();
    const filtered_items = full_item_list.filter((row) => { return row.item.match(re) } );
    return {
        type: FETCH_FILTERED_ITEMS,
        payload: filtered_items
    };
    
}
