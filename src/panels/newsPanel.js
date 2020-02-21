import React from "react";
import { AppContext } from "../appContext";
import { fetchTopHeadlines } from "../services/newsapi";

export class NewsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      value: this.props.value || "blaa",
      articles: []
    };
  }

  // setValue(e) {
  //   this.setState({ value: e.target.value });
  // }

  setContainerTitle() {
    this.props.glContainer.setTitle(this.state.value);
  }

  onFetchNews() {
    fetchTopHeadlines("us").then(({ articles }) => {
      console.log(articles)
    });
  }

  render() {
    return (
      <div>
        <h2>NEWS Panel</h2>
        <AppContext.Consumer>
          {value => {
            return <div>{value}</div>;
          }}
        </AppContext.Consumer>
        <button onClick={this.onFetchNews}>fetch news</button>
        <ul>
          {this.state.articles.map(article => {
            return <li>{article.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
