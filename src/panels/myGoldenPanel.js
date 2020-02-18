
import React from "react";
import { AppContext } from "../appContext";

export class MyGoldenPanel extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      value: this.props.value || "blaa"
    };
  }
  
  setValue(e) {
    this.setState({ value: e.target.value });
  };

  setContainerTitle() {
    this.props.glContainer.setTitle(this.state.value);
  };

  render() {
    return (
      <div>
        <p>This is my panel</p>
        <input type="text" value={this.state.value} onChange={this.setValue.bind(this)} />
        <button onClick={this.setContainerTitle.bind(this)}>set title</button>
        <AppContext.Consumer>
          {value => {
            return <div>{value}</div>;
          }}
        </AppContext.Consumer>
      </div>
    );
  }
}
