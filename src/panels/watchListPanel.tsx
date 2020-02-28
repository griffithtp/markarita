import React from "react";
import { AppContext } from "../appContext";

interface Props {
  value: any;
  glContainer: any;
}

export class WatchListPanel extends React.Component<Props> {
  static contextType = AppContext;

  state = {
    value: this.props.value || "blaa"
  };

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
        {this.context.selectedStock}
      </div>
    );
  }
}
