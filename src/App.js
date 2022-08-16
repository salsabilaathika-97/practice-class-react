import React, {Component} from "react";
import axios from 'axios';
import Card from "./component/Card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { test: "hai", lists: [] }
  }

  componentDidMount() {
    axios.get(`https://reqres.in/api/users?page=2`)
    .then(res => {
      const lists = res.data.data;
      this.setState({lists})
    })
  }

  state = {  }
  render() { 
    return ( 
      <>
        <h1>Hai</h1>
        <h2>{this.state.test}</h2>
        <ul>
          {!!this.state.lists.length && this.state.lists.map((item) => <Card data = {item} />)}
        </ul>
      </>
     );
  }
}
 
export default App;