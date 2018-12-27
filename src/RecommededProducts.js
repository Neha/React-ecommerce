import React , {Component}from "react";
import Wishlist from "./Wishlist";

const Data = [ {'name' : 'JS', 'rating' : 5} ,{ 'name' : 'HTML', 'rating' : 3} , { 'name' : 'css', 'rating' : 5},, { 'name' : 'CSS3', 'rating' : 5}];

class RecommededProducts extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggle : false,
            text : 'Add to hey'
        }
    }
    createList = () =>{
        return Data.map((val, key) => {
            if(val.rating >=5 ){
                return <li>{val.name} and rating {val.rating}</li>
            }
        })
    }
    
    render(){
        return(
            <ul>{this.createList()}</ul>
        )
    }
}

export default RecommededProducts;
