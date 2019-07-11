import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {pokemon:{}}
      }
   

  async componentDidMount () {
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=11`)
    const json = await response.json()
    console.log(json.name)
    this.setState ({pokemon:json})
  }
  
  
render() {
  console.log(this.state.pokemon)
  return(<div>
    {this.state.pokemon.name}
  </div>)
  }
  
}

export default App;


// async callApi(){
  //   try {
  //     console.log('succeeded')
  //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150/`)
  //     const json = await response.json()
  //     // this.setState(pokemon(json));
  //     console.log(json.name)
  //   } catch(e){
  //     console.log(e)
  //   }
  // }
        
  //     return <div> {json[0]} </div>
    
        
    // catch(e) {
    //   console.log(e)
    //
  