import "./App.css";
import SearchForm from "./components/SearchForm";
import React from "react";
import { Container } from "react-bootstrap";
import CommentList from "./components/CommentList";
import { useSelector } from "react-redux";

function App() {
  const messages = useSelector((store) => store.messages.data);
  console.log(messages);
  return (
    <Container>
      <SearchForm />
      {messages && <CommentList />}
    </Container>
  );
}

export default App;
