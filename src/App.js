import React, { Component } from "react";
import "./App.css";
import "./api-keys.js"
//import logo from './logo.svg';


class App extends Component {
  //SOURCE OF TRUTH!!!! AND DON'T FORGET IT//
  //================WARNING================//
  //--------NOW ENTERING TRUTH ZONE--------//
  //
  constructor(props){
    super(props);

    this.state = {
      user1: "",
      user2: "",
      link: "",
      tweets: [
        'tweet0',
        'tweet1',
        'tweet2',
        'tweet3',
        'tweet4',
        'tweet5',
        'tweet6',
        'tweet7',
        'tweet8',
        'tweet9'
      ],
      currentTweet: '',
      currentTweetI: 0,
      isLoggedIn: false,


    };
  }
  //
  //==================NOTICE================//
  //-----------LEAVING TRUTH ZONE-----------//

  //state lifting and changing 
  //for parent
  stateChanger(stateName, stateValue) {
    this.setState(
      { [stateName]: stateValue},
      () => console.log("Changed: " + stateName + ',' + stateValue),
    );
  }

  render() {
    //IS LOGGED IN WILL BE DETERMINED BY URL PROCESSING
    //CHANGE COPY BUTTON TO PLAY BUTTON WOULD CHANGE LOGIN STATE



    if (!this.state.isLoggedIn) {
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
              Hello World
              <span role="img" aria-label="Hello">
                👋
              </span>
            </a>
            <p>
              A Twitter game to see how well you know your friends, or really any
              two Twitter users for that matter. I'm using this to learn 
              <a href="https://reactjs.org/tutorial/tutorial.html">React.js</a>.
            </p>
          </header>

          <div classname="Content">
            <FormContainer user1={this.state.user1} user2={this.state.user2} />
          </div>
        </div>
      );
    } else {
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
              Conditional Rendering Working
              <span role="img" aria-label="Hello">
                👋
              </span>
            </a>
            <p>
              A Twitter game to see how well you know your friends, or really any
              two Twitter users for that matter. I'm using this to learn 
              <a href="https://reactjs.org/tutorial/tutorial.html">React.js</a>.
            </p>
          </header>

          <div className="Content">
            <GameContainer
              user1={this.state.user1}
              user2={this.state.user2}
              tweets={this.state.tweets}
              onLiftState={this.stateChanger}/>
          </div>
          
        </div>
      )
      //game page
      //two buttons with usernames on them
      //one tweet box
      //either button cycles through the tweet in the box
      //long term assign which user for tweets
      //button handler also checks correctness

    }
  }
}

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormPlay = this.handleFormPlay.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.liftProps = this.liftProps.bind(this);
  }

  liftProps = (stateName, stateValue) => {
    this.props.onLiftState(stateName, stateValue);
  };

  //consider making this it's own file, standardize your form handling
  //make classes for the buttons and inputs and such
  //Get all output control at top so logic can be done with th values of the inputs


  handleInput(e) {
    e.preventDefault();
    this.liftProps(e.target.propName, e.target.value)    
  }


  //Submit Handlers
  handleFormSubmit(e) {
    e.preventDefault();
    let suffix = this.props.user1 + '/' + this.props.user2;

    //might need to swap these to use liftProps
    this.props.link = 'base-url/' + suffix;
  }
  handleClearForm(e) {
    e.preventDefault();
    this.props.user1 = "";
    this.props.user2 = "";
  }
  handleFormPlay(e) {
    e.preventDefault();
    this.props.onLiftState("isLoggedIn", true);
  }
  //end submit handlers

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <input
          inputType={"text"}
          title={"User1"}
          name={"user1"}
          propName={"user1"}
          value={this.props.user1}
          placeholder={"Enter Twitter Name"}
          onChange={this.handleInput}
        />

        <input
          inputType={"text"}
          title={"User2"}
          name={"user2"}
          propName={"user2"}
          value={this.props.user2}
          placeholder={"Enter Twitter Name"}
          onChange={this.handleInput}
        />

        <p>Link: {this.state.link}</p>

        <button
          class="button"
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}>
          Submit
        </button>

        <button
          class="button"
          action={this.handleClearForm}
          type={"primary"}
          title={"Clear"}>
          Clear
        </button>

        <button
          class="button"
          propName={"isLoggedIn"}
          value={true}
          action={this.handleInput}
          type={"secondary"}
          title={"PLAY"}>
          PLAY
        </button>

      </form>
    );
  }
}

class GameContainer extends Component {
  constructor (props){
    super(props)

    this.liftProps = this.liftProps.bind(this);
    this.getTweets = this.getTweets.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }
  
  liftProps(stateName, stateValue){
    //storeProps(stateName, stateValue);
    this.props.onLiftState(stateName, stateValue);
  }


  handleSelection(e){
    //button value has user check against current tweet
  }

  /*//might not need this at all, in fact hopefully will not
  storeProps(stateName, stateValue){
    //wont work, will reset every time it's called
    //array needs to be declared outside of function
    var storedProps = array[stateName]=stateValue;
    for (var key in storedProps) {
      console.log("key: " + key + " | value: " + storedProps[key]);
    }
  }*/

  //trigger on isLoggedIn
  getTweets(user1, user2, num) {
    var Twitter = require('twitter')
    var config = require('./api-keys.js')
    var client = new Twitter(config)

    var params1 = {
      screen_name: user1,
      count: num
    }
    var params2 = {
      screen_name: user2,
      count: num
    }

    client.get('statuses/user_timeline', params1, searchedData);
    client.get('statuses/user_timeline', params2, searchedData);

    //function inside a function? probably not okay, but let's find out
    function searchedData(err, data, response) {
      var tweets = data.statuses
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
        //move text to liftProps as array of strings
      }
      this.liftProps('tweets', tweets)
    }

  }

  render() {
    getTweets(this.props.user1, this.props.user2, 10)

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
              Game Page Working
              <span role="img" aria-label="Hello">
                👋
              </span>
            </a>
          </header>

          <div className="Content">
            <tweet
            >
              {this.props.currentTweet}
            </tweet>
            <button
              class="button"
              action={this.handleSelection}
              type={"primary"}
              title={this.props.user1}>
              {this.props.user1}
            </button>
            <button
              class="button"
              action={this.handleSelection}
              type={"primary"}
              title={this.props.user2}>
              {this.props.user2}
            </button>
          </div>
        </div>
      )

    }
  
}

export default App;
