import { newsapi as apiKey } from "../../../api-keys.json";

import MockTopHeadlines from "./mockdata/topheadlines";

export function fetchTopHeadlines(country: string) {
  return new Promise(resolve => {
    resolve(MockTopHeadlines);
  });
  var url =
    "http://newsapi.org/v2/top-headlines?" +
    `country=${country}&` +
    `apiKey=${apiKey}`;
  var req = new Request(url);
  return fetch(req).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return {};
    }
  });
}
