const url = "https://api.pushshift.io/reddit/search/comment/";

export const getMessages = ({ username, subreddit, size }) => {
  const params = `?author=${username}&subreddit=${subreddit}&size=${size}`;

  return fetch(url + params)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Network response was not OK");
      }
      return resp.json();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
