import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Who Twote What </h1>
          <p>
            A Twitter game to see how well you know your friends, or really any
            two Twitter users for that matter. I'm using this to learn{" "}
            <a href="https://reactjs.org/tutorial/tutorial.html">React.js</a>.
          </p>
          <NameForm Name="user1: "/>
          <NameForm Name="user2: "/>
          <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello World{" "}
            <span role="img" aria-label="Hello">
              👋
            </span>
          </a>
        </header>
      </div>
    );
  }
}

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      name: this.props.Name,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          {this.state.name}
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <p>{this.state.value}</p>
        </label>
      </form>
    );
  }
}

export default App;
