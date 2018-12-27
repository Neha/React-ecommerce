import React, {Component} from "react";
import ProductDetail from "./ProductDetail";

const Data = ['ProductOne' ,'ProductTwo' , 'ProductThree'];



class ProductList extends Component {
    constructor(){
        super();
        this.state = {
            toggle : false,
            id : 0
        }
    }

    createList = () => {
        console.log(`I am from function`)
        return Data.map((val, key) => {
            return <li key={key} onClick={(e)=> this.getKey(key) }>{val}</li>
        });
    }

    getKey = (key) => {
        this.setState({
            toggle : true,
            id : key
        })
    }
   
    render(){
        console.log(`I am from render`)
        return(
            <div>
                <ul>{this.createList()}</ul>
                {this.state.toggle && <ProductDetail id={this.state.id}/>}
            </div>
    
        )
    }
}

export default ProductList;
