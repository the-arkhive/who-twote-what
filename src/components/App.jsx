import React, { Component } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Game from "./components/Game";

export default class App extends Component {
  //SOURCE OF TRUTH!!!! AND DON'T FORGET IT//
  //================WARNING================//
  //--------NOW ENTERING TRUTH ZONE--------//
  //
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      answers: []
    };
  }
  //
  //==================NOTICE================//
  //-----------LEAVING TRUTH ZONE-----------//

  callBack = stateData => {
    //iterate through stateData to store each key value pair
    console.log("Set " + stateName + "to " + stateValue);
  };

  getTweets(user1, user2, num) {
    var Twitter = require("twitter");
    var config = require("./api-keys.js");
    var client = new Twitter(config);

    var params1 = {
      screen_name: user1,
      count: num
    };
    var params2 = {
      screen_name: user2,
      count: num
    };

    client.get("statuses/user_timeline", params1, searchedData);
    client.get("statuses/user_timeline", params2, searchedData);

    //function inside a function? probably not okay, but let's find out
    function searchedData(err, data, response) {
      var tweets = data.statuses;
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
        //move text to liftProps as array of strings
      }
      this.liftProps("tweets", tweets);
    }
  }

  render() {
    return (
      <div className="App">
        <Header callBackSource={this.callBack} />
        <Login />
        <Game />
        <Footer />
      </div>
    );
  }
}
