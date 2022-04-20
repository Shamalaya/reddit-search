import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import ListItem from "./ListItem";
import Sort from "./Sort";
import { selectSortedMessages } from "../features/message/messagesSlice";
function CommentList() {
  const messages = useSelector(selectSortedMessages);
  const messagesCount = messages.length;
  return (
    <>
      {messagesCount ? <Sort /> : null}
      <p className="text-center mt-5 mb-5">{messagesCount} results </p>
      <ListGroup>
        {messages.map((el) => {
          return <ListItem key={el.id} {...el} />;
        })}
      </ListGroup>
    </>
  );
}

export default CommentList;
