const url = "https://api.pushshift.io/reddit/search/";

export const getMessages = ({
  searchTerm,
  username,
  subreddit,
  type,
  size,
  after,
  before,
}) => {
  if (after !== "") {
    after = Date.parse(after) / 1000;
  }
  if (before !== "") {
    before = Date.parse(before) / 1000;
  }
  const params = `${type}?q=${searchTerm}&author=${username}&subreddit=${subreddit}&size=${size}&after=${after}&before=${before}`;

  return fetch(url + params)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Network response was not OK");
      }
      return resp.json();
    })
    .catch((err) => {
      throw err;
    });
};
