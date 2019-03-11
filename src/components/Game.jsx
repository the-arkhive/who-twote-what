import React from "react";

import "./Game.css";

const Game = () => (
  <div className="Game">
    <Score />
    <Tweet />
    <Button
      callBackSource={this.props.callBackSource}
      title={this.props.user1}
      type={""}
      />
    <Button callBackSource={this.props.callBackSource} />
  </div>
);

const Tweet = user => <div className="Game" />;

//At the end of any function just do the last line
literallyAnything = () => {
  //keyed array
  var stateData = array;

  //do logic

  //Add necessary value to stateData

  this.props.callBackSource(stateData);
};

export default Game;
