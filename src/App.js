import React from 'react';
import './App.css';
import Search from './Search';
import List from './List';
import {MyMapComponent} from './Map' ;
// import Markers from './Markers';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        lattitude:"",
        longitude:"",
        marklat:"",
        marklng:"",
        restaurantsarray:[] ,
        selectedRestaurant:{"R":{"res_id":18612817},"apikey":"7641fe7fab9aed34fc79418f44a4867b","id":"18612817","name":"Kaka's Deli","url":"https://www.zomato.com/goa/kakas-deli-quepem?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1","location":{"address":"Bepquegal, Vodlemol, Cacora, Goa","locality":"Quepem","city":"Goa","city_id":13,"latitude":"15.2595500899","longitude":"74.1102828272","zipcode":"","country_id":1,"locality_verbose":"Quepem, Goa"},"switch_to_order_menu":0,"cuisines":"North Indian","average_cost_for_two":400,"price_range":2,"currency":"Rs.","offers":[],"thumb":"","user_rating":{"aggregate_rating":"0","rating_text":"Not rated","rating_color":"CBCBC8","votes":"3"},"photos_url":"https://www.zomato.com/goa/kakas-deli-quepem/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop","menu_url":"https://www.zomato.com/goa/kakas-deli-quepem/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop","featured_image":"","has_online_delivery":0,"is_delivering_now":0,"deeplink":"zomato://restaurant/18612817","has_table_booking":0,"events_url":"https://www.zomato.com/goa/kakas-deli-quepem/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1","establishment_types":[]} 
  }
    this.getLocation=this.getLocation.bind(this);
    this.click=this.click.bind(this);
  }

  getLocation(search_term) {
    this.setState({restaurantsarray:[]})
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" +search_term +"&key=AIzaSyBD7rTFBdBhhCqd3imOwhKpis6KJ1izqs0",{
      method: 'GET',})
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("list",responseJson) 
        var {lat,lng}=responseJson.results[0].geometry.location;
        this.setState({lattitude:lat})
        this.setState({longitude:lng})
        fetch('https://developers.zomato.com/api/v2.1/search?entity_type=city&count=20&lat='+this.state.lattitude + '&lon='+this.state.longitude +'&radius=1&sort=real_distance',{
          method: 'GET',
          headers: {
            "user-key":"7641fe7fab9aed34fc79418f44a4867b"
          }
        })
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log("list",responseJson) 
          responseJson.restaurants.map((obj)=> {
            var {restaurant} = obj;
            this.setState(prevState => ({restaurantsarray: [...prevState.restaurantsarray, restaurant]}))         
          })
          console.log(this.state.restaurantsarray)
        })
        .catch((error) => {
          console.error(error);
        });
      
     }   ).catch((error) => {
        console.error(error);
      });
  }
  click(restaurant)
  {
    this.setState({selectedRestaurant:restaurant})
  }
  render() {
    return (
      <div>
        <Search onClick={this.getLocation}/>
        <div class="body_container">
          <List restaurants={this.state.restaurantsarray}   onClick={this.click}/>
          <MyMapComponent lat={this.state.lattitude} lng={this.state.longitude} 
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              isMarkerShown
              selectedRestaurant={this.state.selectedRestaurant}
              restaurants={this.state.restaurantsarray}
             />
             
        </div>
      </div>
    );
  }
}



