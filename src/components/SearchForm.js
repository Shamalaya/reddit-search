import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchMessages } from "../features/message/messagesSlice";
import { useDispatch } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";
const SearchForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        searchTerm: "",
        username: "",
        subreddit: "",
        type: "",
        size: "20",
        after: "",
        before: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .max(20, "Must be between 3 and 20 characters")
          .min(3, "Must be between 3 and 20 characters"),
        subreddit: Yup.string()
          .max(20, "Must be between 3 and 20 characters")
          .min(3, "Must be between 3 and 20 characters"),
      }).test(
        "at-least-one-property",
        "you must provide at least one",
        (value) => !!(value.username || value.subreddit || value.searchTerm)
      )}
      onSubmit={(values, actions) => {
        dispatch(fetchMessages(values));
        actions.setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className="col-lg-6 offset-lg-3 ">
          <div className="form-group mb-2">
            <label htmlFor="searchTerm">Search Term</label>
            <Field
              name="searchTerm"
              className={
                formik.touched.searchTerm && formik.errors.searchTerm
                  ? "form-control is-invalid"
                  : "form-control"
              }
              type="text"
              aria-label="search term"
            />
            <ErrorMessage name="searchTerm" />
          </div>
          <Row>
            <Col>
              <div className="form-group mb-2">
                <label htmlFor="username">Username u/</label>
                <Field
                  name="username"
                  className={
                    formik.touched.username && formik.errors.username
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  type="text"
                  aria-label="username"
                />
                <ErrorMessage name="username" />
              </div>{" "}
            </Col>
            <Col>
              <div className="form-group mb-2">
                <label htmlFor="subreddit">Subreddit r/</label>

                <Field
                  name="subreddit"
                  className={
                    formik.touched.subreddit && formik.errors.subreddit
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  type="text"
                  aria-label="subreddit"
                />
                <ErrorMessage name="subreddit" />
              </div>
            </Col>
          </Row>
          <Row className="form-group mb-2 ">
            <label htmlFor="type">Search for</label>{" "}
            <div>
              <Field
                as="select"
                name="type"
                aria-label="search type"
                className="form-select"
              >
                <option value="comment">Comments</option>
                <option value="submission">Submissions</option>
              </Field>
            </div>
          </Row>
          <Row className="form-group mb-2">
            <label htmlFor="size">Number of comments</label>{" "}
            <div>
              <Field
                as="select"
                name="size"
                aria-label="size"
                className="form-select"
              >
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="500">500</option>
              </Field>
            </div>
          </Row>

          <Row className="mb-2">
            <Col>
              <div className="form-group mb-2">
                <label htmlFor="after">After</label>{" "}
                <div>
                  <Field
                    type="datetime-local"
                    name="after"
                    aria-label="After"
                    className="form-control mb-2"
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div className="form-group">
                <label htmlFor="before">Before</label>
                <div>
                  <Field
                    type="datetime-local"
                    name="before"
                    aria-label="Before"
                    className="form-control"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <div className="d-grid gap-2">
            <Button type="submit" size="lg">
              Search
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default SearchForm;
