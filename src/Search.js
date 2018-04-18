import React from 'react';
import './App.css';

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
        this.autoclick=this.autoclick.bind(this);
        
    }

    updateSearchValue(e){
        this.setState({search_term:e.target.value})
        this.props.onChange(this.state.search_term)

    }

    buttonClick(){
        this.props.onClick(this.state.search_term)
    }
    autoclick(obj)
    {
       console.log(obj)
       this.setState({search_term:obj})
       this.props.onClick(obj)
       this.props.remove()
    }
    render(){
        return(
            <div class="header_container">
                <div>
                    <p>Search Nearby Restaurants</p>
                    <input value={this.state.search_term.description} onChange={this.updateSearchValue} class="search_box" placeholder="Seacrh Here" />
                    {/* <button class="button" onClick={this.buttonClick}>Done</button> */}
                    <div autolist={this.props.autolist}>
                        {
                            this.props.autolist.map((obj)=>{
                                return <div class="auto_box"  onClick={()=>{this.autoclick(obj)}}>
                                    {obj.description}
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}