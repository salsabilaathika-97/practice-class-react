import React, {Component} from "react";

class Card extends Component {
    constructor(props) {
        super(props);
        
    }
    state = {  }
    render() { 
        return ( 
            <li>{this.props.data.first_name}</li>
         );
    }
}
 
export default Card;