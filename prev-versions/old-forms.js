import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

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
          <FormContainer/>
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

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user1: "",
      user2: "",
      link: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //handles submit
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  handleChange(event) {
    const suffix = this.state.user1 + '-' + this.state.user2;
    const link = 'base-url' + suffix;
    this.setState({[event.target.name]: event.target.value});
    this.setState({link: link});
    
  }

  render() {
    return(
      <div className="FormContainer" onSubmit={this.handleSubmit}>
        <label>
          <input
            name={"user1"}
            value={this.state.user1}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            name={"user2"}
            value={this.state.user2}
            onChange={this.handleChange}
          />
        </label>

        <p {...this.state.link} />
      </div>
    );
  }
}

/* class NameForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    
  }

  //handles dynamic changes of input
  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const user = this.props.value;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {this.props.name + ": "}
          <input
            type="text"
            value={user}
            onChange={this.handleChange}
          />

        </label>
      </form>
    );
  }
} */

export default App;
