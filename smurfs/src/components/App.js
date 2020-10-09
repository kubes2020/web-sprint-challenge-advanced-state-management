import React, { Component } from "react";
import "./App.css";
import { fetchSmurfs } from "../actions/smurfsActions";
import {connect} from "react-redux";
import { Form } from "./Form";

class App extends Component {
  componentDidMount(){
  console.log("comp did mount")
    this.props.fetchSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <Form />
        {this.props.smurfs.map(smurf => (
          <>
          <h2 key={smurf.id}>Name: {smurf.name} Age: {smurf.age} Height: {smurf.height} Id: {smurf.id}</h2>
          </>
        ))}
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return {
    smurfs: state.smurfs,
  }
}
export default connect(mapStateToProps, {fetchSmurfs})(App)