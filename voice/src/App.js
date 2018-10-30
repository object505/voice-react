import React, { Component } from 'react';
import News from './components/News'
import NewsForm from './components/NewsForm'

class App extends Component {

  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <h1>Helloz!</h1>
        <NewsForm />
        <News />
      </div>
    );
  }
}

export default App;
