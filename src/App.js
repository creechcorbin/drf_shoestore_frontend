import React from 'react';  
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shoe: [{}]
    }
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/shoe/')
    .then((res) => res.json())
    .then((data) => this.setState({shoe: data}))
  }

  render(){
    return (
      <div>
        <h1>Current Shoes</h1>
          {this.state.shoe.map(shoes => (
            <ul>
              {Object.keys(shoes).map((key, index) => (
                <li>{key}: {shoes[key]}</li>
              ))}
            </ul>
          ))}
      </div>
    );
  }
}

export default App;

