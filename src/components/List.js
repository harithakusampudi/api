import React from 'react';

export default class List extends React.Component{
    constructor(props){
        super(props);  
    }
        render(){
            return(
                    <div class="scroll">   
                    {this.props.restaurants? this.props.restaurants.map(restaurant=>
                     <div onClick={()=>{this.props.actions.onRestaurantClick(this.props.restaurants,restaurant.restaurant.location.latitude,restaurant.restaurant.location.longitude)}}>
                            {restaurant.restaurant.thumb&&restaurant.restaurant.name?
                                 <div class="restaurantdetails_container">
                                     <img src={restaurant.restaurant.thumb} alt="thumb"/>
                                     <p>{restaurant.restaurant.name}<br/>{restaurant.restaurant.location.address}</p>
                                </div>:
                                <div class="restaurantdetails_container">
                                     <p>{restaurant.restaurant.name}<br/>{restaurant.restaurant.location.address}</p>
                                </div>}
                     </div>):<div/>}
                </div> 
            );
        }
    }