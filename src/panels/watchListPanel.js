import React from "react";
import { AppContext } from "../appContext";

export class WatchListPanel extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      value: this.props.value || "blaa"
    };
  }

  setValue(e) {
    this.setState({ value: e.target.value });
  }

  setContainerTitle() {
    this.props.glContainer.setTitle(this.state.value);
  }

  render() {
    return (
      <div>
        <h2>Watchlist Panel</h2>
        <AppContext.Consumer>
          {value => {
            return (
              <div>
                {value.selectedCompany}
                <button onClick={value.setSelection}>set selection</button>
              </div>
            );
          }}
        </AppContext.Consumer>
      </div>
    );
  }
}
