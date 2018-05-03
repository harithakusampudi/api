
export const GET_LOCATION = 'GET_LOCATION'

// Location Update
export const changeLocation = (place_id,location) =>({
    type:GET_LOCATION,
    place_id,
    location
})  