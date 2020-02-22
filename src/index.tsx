import React from "react";
import { render } from "react-dom";
import { GoldenLayoutComponent } from "./lib/goldenLayout/goldenLayoutComponent";
import {
  GoldenLayoutRegisterComponents,
} from "./lib/goldenLayout";

import { AppContext } from "./appContext";
import MainHeader from "./components/mainHeader/mainHeader";

import "./styles.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

class App extends React.Component {
  state = { contextValue: "default value" };
  render() {
    return (
      <React.Fragment>
        <MainHeader>
          <div>
            change context value:
            <input
              value={this.state.contextValue}
              onChange={e => {
                this.setState({ contextValue: e.target.value });
              }}
            />
          </div>
        </MainHeader>
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
