import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {Component} from 'react';
import React from 'react'

export const MyMapComponent = withScriptjs(withGoogleMap((props) =>
(
<div>
  {props.lat && props.lng?
  <GoogleMap
  defaultZoom={10}
  defaultCenter={{ lat: props.lat , lng: props.lng }}>
  {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
  {props.restaurantsarray.map((restaurant)=>
  {
    var {latitude,longitude}=restaurant.location;
     return <Marker position={{ lat: parseFloat(latitude), lng: parseFloat(longitude) }} />
  })}
</GoogleMap>
 : <div/> }</div>)
))

export default MyMapComponent;

