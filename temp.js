class ParentComponent extends Component {
  constructor(props){
    super(props)
    state = { 
      language: "",
    };
  }

  //basic state lift parent sync function
  stateChanger(stateName, stateValue) {
    this.setState(
      {[stateName]: stateValue},
      () => console.log("Changed: " + stateName + ',' + stateValue),
    );
  }

  render() {
    return (
      <div>
        <ChildElement onLiftState={this.stateChanger} />
      </div>
    );
  }
}


export class ChildElement extends Component {
  //basic state lift child function
  liftProps = (stateName, stateValue) => {
    this.props.onLiftState(stateName, stateValue);
  };

  render() {
    return (
      <div>
        <SubChild onChange={this.liftProps(NAME, VALUE)} />
      </div>
    );
  }
}
