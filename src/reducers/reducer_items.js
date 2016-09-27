import item_data from '../assets/items.json';
import location_data from '../assets/locations.json';
export default function() {
    return item_data.map((data) => {
        const location = location_data.find((row) => {return row.id === data.location_id});
        return {
            item: data.item,
            room: location.room,
            zone: location.zone,
            location: `${location.surface_descriptor} ${location.surface} of the ${location.container_descriptor} ${location.container} `
        }
    });
}
