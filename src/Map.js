import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {Component} from 'react';
import React from 'react'

export const MyMapComponent = withScriptjs(withGoogleMap((props) =>
(
<div>
  <h5>{props.restaurantsarray}</h5>
  {props.lat && props.lng?
  <GoogleMap
  defaultZoom={8}
  defaultCenter={{ lat: props.lat , lng: props.lng }}>
  {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
  {props.restaurantsarray.map((restaurant)=>
  {
    var {latitude,longitude}=restaurant.location;
     <Marker position={{ lat: latitude, lng: longitude }} />
  })}
</GoogleMap>
 : <div/> }</div>)
))

export default MyMapComponent;

