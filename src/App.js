import React from 'react';
import './App.css';
import Search from './Search';
import List from './List';
import  {MyMapComponent} from './Map' ;

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        lattitude:"",
        longitude:"",
        restaurantsarray:[]     
  }
    this.getLocation=this.getLocation.bind(this);
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
  render() {
    return (
      <div>
        <Search onClick={this.getLocation}/>
        <div class="body_container">
          <List items={this.state.restaurantsarray}/>
          <MyMapComponent lat={this.state.lattitude} lng={this.state.longitude} 
              restaurantsarray={this.state.restaurantsarray}
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              isMarkerShown
          />
        </div>
      </div>
    );
  }
}



