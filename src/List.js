import React from 'react';
import './App.css';
// import Markers from './Markers';


export default class List extends React.Component{
    constructor(props){
        super(props);
        this.listClick=this.listClick.bind(this);
        
    }
    listClick(restaurant){
        // console.log(JSON.stringify(restaurant))
        this.props.onClick(restaurant)
    }
        render(){
            return(
                <div class="scroll">   
                    {this.props.restaurants.map(restaurant=>
                     <div  onClick={()=>{this.listClick(restaurant)}}>
                            {restaurant.thumb&&restaurant.name?
                                 <div class="restaurantdetails_container">
                                     <img src={restaurant.thumb}/>
                                     <p>{restaurant.name}<br/>{restaurant.location.address}</p>
                                </div>:
                                <div class="restaurantdetails_container">
                                     <p>{restaurant.name}<br/>{restaurant.location.address}</p>
                                </div>}
                     </div>   
                     )}
                </div> 
            );
        }
    }