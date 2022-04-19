import "./App.css";
import SearchForm from "./components/SearchForm";
import React from "react";
import { Container } from "react-bootstrap";
import CommentList from "./components/CommentList";
import { useSelector } from "react-redux";
import Error from "./components/Error";
import Loading from "./components/Loading";
function App() {
  const messages = useSelector((store) => store.messages.data);
  const isError = useSelector((store) => store.messages.isError);
  const isLoading = useSelector((store) => store.messages.isLoading);

  return (
    <Container>
      <h1 className="text-center mt-5 mb-5 display-4 fw-bold ">
        REDDIT SEARCH
      </h1>
      <SearchForm />
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        messages && <CommentList />
      )}
    </Container>
  );
}

export default App;
