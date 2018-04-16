import React from 'react';
import './App.css';
// import { Container, Row, Col } from 'reactstrap';
// import Restaurantdetails from 'Restaurantdetails'

export default class List extends React.Component{
    
        render(){
            return(
                
                <div> 
                    {this.props.items.map(item=>
                        item.thumb&&item.name ?
                        <div class="restaurantdetails_container">
                        <img src={item.thumb}/>
                        <p>{item.name}<br/>{item.location.address}</p></div>:
                        <div class="restaurantdetails_container"><img src=".jpg"/>
                        <p>{item.name}<br/>{item.location.address}</p></div>)}
                        </div>
                    
            );
        }
    }