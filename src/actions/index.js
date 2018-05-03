import {changeSearchList} from './searching'
import {changeLocation} from './location'
import {restaurantList} from './restaurant'
export const CHANGE_TERM = 'CHANGE_TERM'
export const GET_RESTAURANT_LOCATION = 'GET_RESTAURANT_LOCATION'

export const changeSearchTerm = (term) => ({
    type: CHANGE_TERM,
    term
  })
  export const onRestaurantClick=(restaurants,lat,lng)=>{
  var location={lat,lng}
    return {
    type:GET_RESTAURANT_LOCATION,
    restaurants,
   location
  }
}
export const fetchAutoList = term => dispatch => {
    return fetch("https://maps.googleapis.com/maps/api/place/autocomplete/json?input="+term+"&key=AIzaSyBUJx80sMf2DQF9hsGC0tgiKxGusOt0KEo")
      .then(response => response.json())
      .then(json => dispatch(changeSearchList(json.predictions)))
  }
  
  export const getLocation = (place_id) => dispatch => {
    return fetch("https://maps.googleapis.com/maps/api/place/details/json?placeid="+place_id+"&key=AIzaSyBUJx80sMf2DQF9hsGC0tgiKxGusOt0KEo")
    .then(response => response.json())
    .then(json => dispatch(changeLocation(place_id,json.result.geometry.location)))    
  }
  
  
  export const getRestaurants = (location,lat,lng) => dispatch =>{
    return fetch("https://developers.zomato.com/api/v2.1/search?entity_type=city&count=20&lat="+lat+"&lon="+lng+"&radius=1&sort=real_distance",{
    headers: {
      "user-key":"a82c2baced1a31033a45ee84aa4b75a5"
    }
    })
    .then(response => response.json())
    .then(json => dispatch(restaurantList(location,json.restaurants)))
  }
 
