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
        restaurantsarray:[] ,
        selectedRestaurant:{},
        autolist:[],
      
  }
    this.getLocation=this.getLocation.bind(this);
    this.click=this.click.bind(this);
    this.removeAutolist=this.removeAutolist.bind(this);
    this.autoComplete=this.autoComplete.bind(this)
  }

  getLocation(search_term) {
  console.log("search_term",search_term)
    
    this.setState({restaurantsarray:[]})
    fetch(" https://maps.googleapis.com/maps/api/place/details/json?placeid=" + search_term.place_id +"&key=AIzaSyBUJx80sMf2DQF9hsGC0tgiKxGusOt0KEo",{
      method: 'GET',})
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("list",responseJson) 
        var {lat,lng}=responseJson.result.geometry.location;
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
        })
        .catch((error) => {
          console.error(error);
        });
      
        }).catch((error) => {
        console.error(error);
      });
      
  
  }
  autoComplete(search_term)
  {
    fetch("https://maps.googleapis.com/maps/api/place/autocomplete/json?input="+search_term+"&key=AIzaSyBUJx80sMf2DQF9hsGC0tgiKxGusOt0KEo",{
      method: 'GET',
   })
      .then((response) => {
        console.log(response.body)
        return response.json()
      })
      .then((responseJson) => {
        console.log("list",responseJson) 
        var {predictions}=responseJson
        this.setState({autolist:predictions})
      }).catch((error) => {
          console.error(error);
      });
  }
  
  click(restaurant)
  {
    this.setState({selectedRestaurant:restaurant})
  }
  removeAutolist()
  {
    this.setState({autolist:[]})
 
  }
  render() {
    return (
      <div>
        <Search onClick={this.getLocation} remove={this.removeAutolist}onChange={this.autoComplete} autolist={this.state.autolist} />
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



