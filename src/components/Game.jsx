import React from "react";

import "./Game.css";
import "./Header"

const Game = () => (
  <div className="Game">
    <Header />
    <Score />
    <Tweet />
    <Button
      callBackSource={this.props.callBackSource}
      title={this.props.user1}
      type={""}
      onChange={this.handleChange}
      />
    <Button callBackSource={this.props.callBackSource} />
  </div>
);

const Tweet = () => (
  <div className="Tweet" />
);

//At the end of any function just do the last line
literallyAnything = () => {
  //keyed array
  var stateData = [];
  stateData.push({'name': value})
  //do logic

  //Add necessary value to stateData

  this.props.callBackSource(stateData);
};

handleChange = (e) => {
  var selection = e.title;
  if (selection == currentTweet['user']) {
    score++
    currentTweet = this.props.tweets[currentTweetINDEX+1]
  }
}

export default Game;
