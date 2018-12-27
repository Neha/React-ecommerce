import React , {Component}from "react";
import Wishlist from "./Wishlist";

const Data = [ {'name' : 'JS', 'rating' : 5} ,{ 'name' : 'HTML', 'rating' : 3} , { 'name' : 'css', 'rating' : 5},, { 'name' : 'CSS3', 'rating' : 5}];



// const ProductDetail = (props) => {
//     return(
//         <div>
//            <p>{createList(props)}</p>
//            <Wishlist />
//         </div>
//     )
// }


class ProductDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggle : false,
            text : 'Add to hey'
        }
    }
    createList(props) {
        return Data.map((val, key) => {
            if(key === props.id){
                 return <li key={key}>{val.name}</li>
             }
        });
    }
    handleClickBtn = () => {
        console.log(this.state.text)
        if(!this.state.toggle){
            this.setState({
                text :  'Add to Wishlist',
                toggle : true
            })
        }
        else{
            this.setState({
                text :  'Add to hey',
                toggle : false
            })
        }
    }
    render(){
        return(
            <div>
               <p>{this.createList(this.props)}</p>
               <Wishlist methodClick={this.handleClickBtn}
                    text={this.state.text}
                    toggle={this.state.toggle}/>
            </div>
        )
    }
}

export default ProductDetail;
