import React from 'react';

// Input Box
// Contains Placeholder - Takes input value

// Button
// onClick -> ????? GetLocation or Get Contact  or Get Contact ...
// Callback using props

export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search_term:"",
        }
        this.updateSearchValue=this.updateSearchValue.bind(this);
        this.buttonClick=this.buttonClick.bind(this);
        
    }

    updateSearchValue(e){
        this.setState({search_term:e.target.value})
    }

    buttonClick(){
        this.props.onClick(this.state.search_term)
    }
    
    render(){
        return(
            <div class="header_container">
                <div>
                    <p>Search nearby restaurants</p>
                    <input onChange={this.updateSearchValue} class="search_box"placeholder="enter a city name to search"/>
                    <button class="button" onClick={this.buttonClick}>search</button>
                </div>
            </div>
        );
    }
}