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
<<<<<<< Updated upstream
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
=======
      user1: "",
      user2: "",
      link: "",
      copySuccess: "",
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
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
  };

  copyToClipboard(e) {
    this.textArea.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      user1: "",
      user2: "",
      link: "",
    });
  };

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
        />

        <input
          inputType={"text"}
          title={"User2"}
          name={"user2"}
          value={this.state.user2}
          placeholder={"Enter Twitter Name"}
          onChange={this.handleInput}
        />

        <div>
          <textarea
            readonly
            type={"hidden"}
            ref={(textarea) => this.textArea = textarea}
            value={this.state.link}
          />
        </div>

        <button
          class="button"
          onClick={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}>
          Submit </button>

        <button
          class="button"
          onClick={this.copyToClipboard}
          type={"primary"}
          title={"Copy"}>
          Copy</button>

        <button
          class="button"
          onClick={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}>
          Clear</button>

>>>>>>> Stashed changes
      </form>
    );
  }
}

export default App;
