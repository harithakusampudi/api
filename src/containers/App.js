import React from 'react';
import '../App.css';
import Search from '../components/Search';
import List from '../components/List';
import {MyMapComponent} from '../components/Map' ;

// import Markers from './Markers';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log("##props",this.props)
    return (
      <div>
        <Search todos={this.props.todos} actions={this.props.actions}/>
        <div class="body_container">
          <List restaurants={this.props.todos.restaurants} actions={this.props.actions} todos={this.props.todos}/> 
          <MyMapComponent location={this.props.todos.location} lat={this.props.todos.lat} lng={this.props.todos.lng}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}/>
        </div>
      </div>
    );
  }
}



