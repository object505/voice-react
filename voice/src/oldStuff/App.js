import React, { Component } from 'react';
import {First} from "./First";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      food: ['pizza', 'burger', 'burek'],
      newMeal: ''
    };

    this.mealChange = this.mealChange.bind(this);
    this.addMeal = this.addMeal.bind(this);
  }

  clickHello() {
    console.log('click hello!');
  }

  addMeal() {
    console.log('it works');
    this.setState({
      food: [...this.state.food, this.state.newMeal],
      newMeal: ''
    })
  }

  mealChange(e) {
    this.setState({
      newMeal: e.target.value
    });
  }

  render() {
    var someName = "Peter";
    var someName2 = "John";
    var arry = [
      // "map",
      // "filter",
      // "reduce",
      // "forEach"
      {id: "123", val: "map"},
      {id: "456", val: "filter"},
      {id: "789", val: "reduce"},
      {id: "102", val: "forEach"},
    ];
    return (
      <div className="App">
        <input type="text" value={this.state.newMeal} onChange={this.mealChange} />
        <button onClick={this.addMeal}>Add meal</button>
        <h1 onClick={this.clickHello}>Helloz!</h1>
        <First name={someName} handler={this.clickHello} />
        <First name={someName2} handler={this.clickHello} />
        <First name="Janko" handler={this.clickHello} />
        <First name="Stanko" handler={this.clickHello} />
        {arry.map(v => <First name={v.val} key={v.id} handler={this.clickHello} />)}
        {this.state.food.map((v, i) => <First name={v} key={i}/>)}
      </div>
    );
  }
}

export default App;
