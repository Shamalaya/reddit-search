import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import ListItem from "./ListItem";
function CommentList() {
  const messages = useSelector((store) => store.messages.data);

  return (
    <ListGroup>
      {messages.map((el) => {
        return <ListItem key={el.id} {...el} />;
      })}
    </ListGroup>
  );
}

export default CommentList;
