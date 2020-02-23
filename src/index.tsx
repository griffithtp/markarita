import React from "react";
import { render } from "react-dom";
import { GoldenLayoutComponent } from "./lib/goldenLayout/goldenLayoutComponent";
import { GoldenLayoutRegisterComponents } from "./lib/goldenLayout";

import { AppContext } from "./appContext";
import MainHeader from "./components/mainHeader/mainHeader";

import "./styles.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

class App extends React.Component {
  state = {
    value: '',
    contextValue: {
      selectedCompany: '',
      companyList: [],
      setSelection: this.setSelection.bind(this)
    }
  };

  setSelection() {
    console.log("setSelection call");
    this.setState({ value: "set selection clicked" });
  }

  render() {
    return (
      <React.Fragment>
        <MainHeader>
          <div>
            <input
              value={this.state.value}
              onChange={e => {
                this.setState({ value: e.target.value });
              }}
            />
          </div>
        </MainHeader>
        selected: {this.state.contextValue.selectedStock}
        <AppContext.Provider value={this.state.contextValue}>
          <GoldenLayoutComponent
            htmlAttrs={{
              style: {
                display: "flex",
                height: "calc(100vh - 2em)",
                width: "100%"
              }
            }}
            registerComponents={GoldenLayoutRegisterComponents}
          />
        </AppContext.Provider>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
