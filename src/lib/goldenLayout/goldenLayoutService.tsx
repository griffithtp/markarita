import { WatchListPanel, NewsPanel, StockPricesPanel } from "../../panels";

export const GoldenLayoutRegisterComponents = (myLayout: any) => {
  myLayout.registerComponent("watchlistPanel", WatchListPanel);
  myLayout.registerComponent("newsPanel", NewsPanel);
  myLayout.registerComponent("stockPricesPanel", StockPricesPanel);
};

export const GoldenLayoutDefaultConfig = () => {
  return {
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
  };
};
