// import React from 'react';
// import  Marker from "react-google-maps";
// import App from './App'


export default class Markers extends React.Component{

    render(){
        return(
            <div>
                <h4>{this.props.lat}</h4>
                {/* {this.props.lat&&this.props.lng?
                 <Marker position={{ lat:this.props.lat, lng: this.props.lng }} >
                    </Marker>:<div/>} */}
            </div>
        );
    }
}