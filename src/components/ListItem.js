import React from "react";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import moment from "moment";

function ListItem({ body, subreddit, created_utc, permalink, score }) {
  return (
    <ListGroup.Item>
      <div className="d-flex flex-row">
        <a
          href={`https://www.reddit.com/r/${subreddit}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Reddit"
        >
          r/{subreddit}
        </a>
        <div
          className={score > 0 ? "ms-3 score-positive" : "ms-3 score-negative"}
        >
          {score}
        </div>
        <div className="ms-auto">
          {moment.unix(created_utc).format("DD/MM/YYYY, HH:mm:ss ")}
        </div>
      </div>
      <div>
        {" "}
        <a
          href={`https://www.reddit.com${permalink}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Reddit"
        >
          {body}
        </a>
      </div>
    </ListGroup.Item>
  );
}

ListItem.propTypes = {
  body: PropTypes.string,
  subreddit: PropTypes.string,
  created_utc: PropTypes.number,
  permalink: PropTypes.string,
  score: PropTypes.number,
};

export default ListItem;
