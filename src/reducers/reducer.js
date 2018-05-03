import {GET_LOCATION} from '../actions/location'
import {GET_RESTAURANT_LIST} from '../actions/restaurant'
import {RECEIVE_AUTO_LIST} from '../actions/searching'
import {CHANGE_TERM,GET_RESTAURANT_LOCATION} from '../actions'

const reducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_AUTO_LIST:
      return { 
             list:action.list
            }
    case CHANGE_TERM:
      return { 
              term:action.term,
              } 
    case GET_LOCATION:
      return { 
            location:action.location,
            place_id:action.place_id,
            }  
    case GET_RESTAURANT_LIST:
      return { 
              location:action.location,
              restaurants:action.restaurants
              }
      case GET_RESTAURANT_LOCATION:
        return { 
                restaurants:action.restaurants,
                location:action.location,
                }    
    default:
      return state
    }
  }
  export default reducer