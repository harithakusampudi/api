import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// input- geolocation
// functionality-map should be rebdered on geolocation change
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
(
<div>
  {props.lat && props.lng && props.restaurantsarray? 
  <GoogleMap
  defaultZoom={8}
  defaultCenter={{ lat: props.lat , lng: props.lng }}>
  {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
  })}
</GoogleMap>
 : <div/> }</div>)
))
// export default class Map extends React.Component{

//     render(){
//         return(
//         <GoogleMap
//             defaultZoom={8}
//             defaultCenter={{ lat: this.props.lat , lng: this.props.lng }}>
//           </GoogleMap>
//         );
//     }
// }
export default Map;