
export const FETCH_ALL_ITEMS = 'FETCH_ALL_ITEMS';
export const FETCH_FILTERED_ITEMS = 'FETCH_FILTERED_ITEMS';

const all_items = []

export function fetchAll() {
    return {
        type: FETCH_ALL_ITEMS,
        payload: all_items
    };
}

    
export function fetchFilteredItems(term) {
    const filtered_items = [{
        "item": "potato masher",
        "room": "kitchen",
        "zone": "counter",
        "location": "tool bucket between fridge and stove"
    }];
    return {
        type: FETCH_FILTERED_ITEMS,
        payload: filtered_items
    };
    
}
