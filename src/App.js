import React, { Component } from "react";
import "./App.css";
//import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Who Twote What </h1>
          <a
            className="App-link"
            href="https://thomaslodgewilliams.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello World{" "}
            <span role="img" aria-label="Hello">
              👋
            </span>
          </a>
          <p>
            A Twitter game to see how well you know your friends, or really any
            two Twitter users for that matter. I'm using this to learn{" "}
            <a href="https://reactjs.org/tutorial/tutorial.html">React.js</a>.
          </p>
          <FormContainer/>
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
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState(
      { [e.target.name]: e.target.value},
      () => console.log(this.state.user1),
      () => console.log(this.state.user2)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let suffix = this.state.user1 + '/' + this.state.user2;
    let link = 'base-url/' + suffix;
    this.setState({ link: link });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      user1: "",
      user2: "",
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <input
          inputType={"text"}
          title={"User1"}
          name={"user1"}
          value={this.state.user1}
          placeholder={"Enter Twitter Name"}
          onChange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        <input
          inputType={"text"}
          title={"User2"}
          name={"user2"}
          value={this.state.user2}
          placeholder={"Enter Twitter Name"}
          onChange={this.handleInput}
        />{" "}
        {/* About you */}
        <p>Link: {this.state.link}</p>
        <button
          class="button"
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}>
          Submit</button>{" "}
        {/*Submit */}
        <button
          class="button"
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}>
          Clear</button>{" "}
        {/* Clear the form */}
>>>>>>> Stashed changes
      </form>
    );
  }
}

export default App;
