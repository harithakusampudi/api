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
        <Search states={this.props.states} actions={this.props.actions}/>
        <div class="body_container">
          <List restaurants={this.props.states.restaurants} actions={this.props.actions} states={this.props.states}/> 
          <MyMapComponent location={this.props.states.location} lat={this.props.states.lat} lng={this.props.states.lng}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}/>
        </div>
      </div>
    );
  }
}



