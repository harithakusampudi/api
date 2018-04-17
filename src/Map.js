import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {Component} from 'react';
import React from 'react' 
export const MyMapComponent = withScriptjs(withGoogleMap((props) =>
(
<div>
{console.log(props.selectedRestaurant)}
  {props.lat && props.lng&&props.selectedRestaurant?
  
  <GoogleMap
  defaultZoom={10}
  defaultCenter={{ lat: props.lat , lng: props.lng }}>
  {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} >
  </Marker>}
  <Marker position={{ lat: parseFloat(props.selectedRestaurant.location.latitude), lng: parseFloat(props.selectedRestaurant.location.longitude) }} >
  </Marker>
  
</GoogleMap>
 : <div/> }</div>)
))

export default MyMapComponent;

