import React from 'react';
import './App.css';
import Search from './Search';
import List from './List';
import  {MyMapComponent} from './Map' ;
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
// (
// <div>
//   {props.lat && props.lng && props.restaurantsarray? 
//   <GoogleMap
//   defaultZoom={8}
//   defaultCenter={{ lat: props.lat , lng: props.lng }}>
//   {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
//   {this.props.restaurantsarray.map((restaurant)=>{
//     var {latitude}=restaurant.location;
//     var {longitude}=restaurant.location;
//     {props.isMarkerShown && <Marker position={{ lat:latitude, lng:longitude}} />}
//   })}
// </GoogleMap>
//  : <div/> }</div>)
// ))


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        cityname:"",
        lattitude:"",
        longitude:"",
        restaurantsarray:[]     
  }
    this.getLocation=this.getLocation.bind(this);
  }

  getLocation(search_term) {
  
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
            this.setState({restaurantsarray:[...this.state.restaurantsarray,restaurant]})          
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
  render() {
    return (
      <div>
        <Search onClick={this.getLocation}/>
        <div class="body_container">
          <List items={this.state.restaurantsarray}/>
        </div>
        <MyMapComponent lat={this.state.lattitude} lng={this.state.longitude}/>
     </div>
    );
  }
}



