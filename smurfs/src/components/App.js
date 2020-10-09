import React, { Component } from "react";
import "./App.css";
import { fetchSmurfs } from "../actions/smurfsActions";
import {connect} from "react-redux";

class App extends Component {
  componentDidMount(){
  console.log("comp did mount")
    this.props.fetchSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

// export default App;

const mapStateToProps = (state) =>{
  return {
    name: state.name,
    age: state.age,
    height: state.height,
    id: state.id,
  }
}
export default connect(mapStateToProps, {fetchSmurfs})(App)