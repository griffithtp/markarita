import { newsapi as apiKey } from "../../../api-keys.json";

export function fetchTopHeadlines(country: string) {
  var url =
    "http://newsapi.org/v2/top-headlines?" +
    `country=${country}&` +
    `apiKey=${apiKey}`;
  var req = new Request(url);
  return fetch(req).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return {}
    }
  });
}
