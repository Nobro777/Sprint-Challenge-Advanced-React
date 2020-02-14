import React, { Component } from "react"
import axios from "axios"
import "./App.css"
import DarkModeButton from "./components/DarkModeButton"

class App extends Component {
    constructor(){
      super();
  this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(resp => {
        this.setState({ 
          players: resp.data
        })
      })
      .catch(error => {
        console.log("uh oh, error :", error)
      })
  }

  render() {
    console.log("tesssstt", this.state.players)
    return (
      <div className="App">
        <DarkModeButton data-testid="toggleDark"/>
        <div>
        <h1 style={{margin: "5% 0 5% 0"}}>Womens World Cup Internet Stats</h1>
        <div className="card-container">
        {this.state.players.map(item => 
          <div style={{border: "1px solid black", margin: "1% 25% 1% 25%"}}>
            <h1 style={{fontWeight: "normal", textDecoration: "underline"}}>{item.name}</h1>
            <div style={{display: "flex", justifyContent: "space-between", margin: "0 5% 0 5%"}}>
            <p>Located in: {item.country}</p>
            <p>Searches: {item.searches}</p>
            <p>Athlete ID: {item.id}</p>
            </div>
          </div>
        )}
        </div>
        </div>
      </div>
    )
  }
};

export default App;