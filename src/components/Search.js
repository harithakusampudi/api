import React from 'react';
import '../App.css';


export default class Search extends React.Component{
    constructor(props){
        super(props);
       
        this.updateSearchValue=this.updateSearchValue.bind(this);
        
    }

    updateSearchValue(e){
        // console.log("onchange",e.target.value) ,
      this.props.actions.changeSearchTerm(e.target.value)
      this.props.actions.fetchAutoList(e.target.value)
    }
    componentWillReceiveProps(nextProps) { 
        if(nextProps.todos.location&&nextProps.todos.place_id){
            const {location}=nextProps.todos
            const {lat, lng} = nextProps.todos.location
            this.props.actions.getRestaurants(location,lat, lng)
        }
    }
    render(){
        return(
            <div class="header_container">
                <div>
                    <p>Search Nearby Restaurants</p>
                    <input value={this.props.todos.term} onChange={this.updateSearchValue} class="search_box" placeholder="Seacrh Here" />
                    {this.props.todos.list? this.props.todos.list.map((obj)=>
                        <div class="auto_box" onClick={()=>{
                                              this.props.actions.changeSearchTerm(obj.description);
                                              this.props.actions.getLocation(obj.place_id)
                                              }}>{obj.description}</div>) : <div/>}
                </div>
            </div>
        );
    }
}