
export const GET_RESTAURANT_LIST = 'GET_RESTAURANT_LIST'

// Restaurants List
export const restaurantList = (location,restaurants) =>({
  type:GET_RESTAURANT_LIST,
  location,
  restaurants
})