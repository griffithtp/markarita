
import React from "react";
import { AppContext } from "../appContext";

export class StockPricesPanel extends React.Component {
  static contextType = AppContext;

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
        <h2>Stock Prices Panel</h2>
        {this.context.selectedStock}
      </div>
    );
  }
}
