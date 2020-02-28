import React from "react";
import { AppContext } from "../appContext";
import { fetchTopHeadlines } from "../services/newsapi";

interface Props {
  value: string;
  glContainer: any;
  articles: any;
}

interface State extends Partial<Props> {}

class NewsPanel extends React.Component<Props, State> {
  static contextType = AppContext;

  constructor(props: Props) {
    super(props);
    // this.props = props;
    this.state = {
      value: this.props.value || "blaa",
      articles: []
    };
  }

  componentDidMount() {
    this.onFetchNews();
  }

  setContainerTitle() {
    this.props.glContainer.setTitle(this.state.value);
  }

  onFetchNews = () => {
    fetchTopHeadlines("us").then(({ articles }: any) => {
      this.setState({ articles });
    });
  };

  render() {
    return (
      <div style={{ overflowY: "auto", height: "inherit" }}>
        <ul>
          <li>articles: {this.state.articles.length}</li>
          {this.state.articles.map((article: any, key: number) => {
            return <li key={key}>{article.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export { NewsPanel };
