import React, { Component } from "react";
import "./App.css";
import { fetchSmurfs } from "../actions/smurfsActions";
import {connect} from "react-redux";
import  Form  from "./Form";

class App extends Component {
  componentDidMount(){
  console.log("comp did mount")
  //my axios.get call from actions
    this.props.fetchSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <Form />
        {this.props.smurfs.map(smurf => (
          <>
          <h2 key={smurf.id}>Name: {smurf.name} Age: {smurf.age} Height: {smurf.height} ID: {smurf.id}</h2>
          </>
        ))}
        <h3>{this.props.errors}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    //array of smurfs
    smurfs: state.smurfs,
    //had to use JSON.stringify to get the errors into store
    errors: state.network.errors
  }
}
export default connect(mapStateToProps, {fetchSmurfs})(App)