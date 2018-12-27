import React, {Component} from 'react';

class Wishlist extends Component{
    constructor(){
        super();
        // this.state = {
        //     toggle : false,
        //     text : 'Add to hey'
        // }
    }

    // clickHandle = (e) =>{
    //   if(!this.state.toggle){
    //         this.setState({
    //             text :  'Added to wishlist',
    //             toggle : true
    //         })
    //     }
    //     else{
    //         this.setState({
    //             text :  'Add to wishlist',
    //             toggle : false
    //         })
    //     }
    // }

    render(){
        
        return(
            <button onClick={() => this.props.methodClick()}>{this.props.text}</button>
            // <button onClick={}>{this.state.text}</button>
        )
    }
}

export default Wishlist;