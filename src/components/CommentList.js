import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import ListItem from "./ListItem";
import Sort from "./Sort";
import { selectSortedMessages } from "../features/message/messagesSlice";
function CommentList() {
  const messages = useSelector(selectSortedMessages);

  return (
    <>
      <Sort />
      <p className="text-center">{messages.length} results </p>
      <ListGroup>
        {messages.map((el) => {
          return <ListItem key={el.id} {...el} />;
        })}
      </ListGroup>
    </>
  );
}

export default CommentList;
