import React from 'react';


export default class List extends React.Component{
    
        render(){
            return(
                <div>
                    <p>
                        {this.props.items.map(item=><li>{item.name}</li>)}
                    </p>
                </div>     
            );
        }
    }