const url = "https://api.pushshift.io/reddit/search/comment/";

export const getMessages = ({ username, subreddit, size }) => {
  const params = `?author=${username}&subreddit=${subreddit}&size=${size}`;

  return fetch(url + params)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
};
