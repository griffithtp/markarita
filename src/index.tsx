import React from "react";
import { render } from "react-dom";
import { GoldenLayoutComponent } from "./lib/goldenLayout/goldenLayoutComponent";
import { MyGoldenPanel } from "./components/myGoldenPanel";
import { AppContext } from "./appContext";
import MainHeader from "./components/mainHeader/mainHeader";

import "./styles.scss";
import "@fortawesome/fontawesome-free/css/all.min.css"

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
          <GoldenLayoutComponent //config from simple react example: https://golden-layout.com/examples/#qZXEyv
            htmlAttrs={{ style: { display: "flex", height: "calc(100vh - 2em)", width: "100%" } }}
            config={{
              content: [
                {
                  type: "row",
                  content: [
                    {
                      title: "A react component",
                      type: "react-component",
                      component: "testItem",
                      props: { value: "I'm on the left" }
                    },
                    {
                      title: "Another react component",
                      type: "react-component",
                      component: "testItem"
                    }
                  ]
                }
              ]
            }}
            registerComponents={(myLayout: any) => {
              myLayout.registerComponent("testItem", MyGoldenPanel);
            }}
          />
        </AppContext.Provider>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
