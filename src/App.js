import "./App.css";
import SearchForm from "./components/SearchForm";
import React from "react";
import { Container } from "react-bootstrap";
import CommentList from "./components/CommentList";
import { useSelector } from "react-redux";
import Error from "./components/Error";
function App() {
  const messages = useSelector((store) => store.messages.data);
  const isError = useSelector((store) => store.messages.isError);

  return (
    <Container>
      <h1 className="text-center mt-5 mb-5 display-2 ">REDDIT SEARCH</h1>
      <SearchForm />
      {isError ? <Error /> : null}
      {messages && <CommentList />}
    </Container>
  );
}

export default App;
