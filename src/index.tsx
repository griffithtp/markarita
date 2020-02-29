import React from "react";
import { render } from "react-dom";
import { GoldenLayoutComponent } from "./lib/goldenLayout/goldenLayoutComponent";
import { GoldenLayoutRegisterComponents } from "./lib/goldenLayout";

import { AppProvider } from "./appContext";
import MainHeader from "./components/mainHeader/mainHeader";

import "./styles.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

class App extends React.Component {

  state = {
    value: 123
  }

  render() {
    return (
      <AppProvider>
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
      </AppProvider>
    );
  }
}

render(<App />, document.getElementById("app"));
