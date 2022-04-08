import React from "react";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

function ListItem({ body, subreddit, created_utc }) {
  return (
    <ListGroup.Item>
      <Row>
        <Col>r/{subreddit}</Col>
      </Row>
      <Row>{body}</Row>
    </ListGroup.Item>
  );
}

ListItem.propTypes = {
  body: PropTypes.string,
  subreddit: PropTypes.string,
  created_utc: PropTypes.number,
};

export default ListItem;
