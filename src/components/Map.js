import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React from 'react' 
export const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    (
        <div> 
        {props.location? 
            <GoogleMap
                    defaultZoom={10}
                    defaultCenter={{ lat:parseFloat(props.location.lat), lng: parseFloat(props.location.lng) }}>
                    {<Marker position={{ lat:parseFloat(props.location.lat), lng:parseFloat(props.location.lng) }} ></Marker>}
            </GoogleMap>
             : <div/>
        }
        </div>
    )
))

export default MyMapComponent;

