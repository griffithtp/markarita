import React from "react";
import { render } from "react-dom";
import { GoldenLayoutComponent } from "./lib/goldenLayout/goldenLayoutComponent";
import { WatchListPanel, NewsPanel, StockPricesPanel } from "./panels";
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
          <GoldenLayoutComponent
            htmlAttrs={{ style: { display: "flex", height: "calc(100vh - 2em)", width: "100%" } }}
            config={{
              content: [
                {
                  type: "row",
                  content: [
                    {
                      title: "Watchlist",
                      type: "react-component",
                      component: "watchlistPanel",
                      props: { value: "News Panel props.value" }
                    },
                    {
                      title: "News",
                      type: "react-component",
                      component: "newsPanel"
                    },
                    {
                      title: "Stocks",
                      type: "react-component",
                      component: "stockPricesPanel"
                    }
                  ]
                }
              ]
            }}
            registerComponents={(myLayout: any) => {
              myLayout.registerComponent("watchlistPanel", WatchListPanel);
              myLayout.registerComponent("newsPanel", NewsPanel);
              myLayout.registerComponent("stockPricesPanel", StockPricesPanel);
            }}
          />
        </AppContext.Provider>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
