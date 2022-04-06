import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchMessages } from "../features/message/messagesSlice";
import { useDispatch } from "react-redux";
const SearchForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ username: "", subreddit: "", size: "20" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .max(20, "Must be between 3 and 20 characters")
          .min(3, "Must be between 3 and 20 characters")
          .required("Required"),
        subreddit: Yup.string()
          .max(20, "Must be between 3 and 20 characters")
          .min(3, "Must be between 3 and 20 characters"),
      })}
      onSubmit={(values, actions) => {
        dispatch(fetchMessages(values));
        actions.setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className="col-lg-2 offset-lg-5 ">
          <div className="form-group mb-3">
            <label htmlFor="username">Username</label>
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
          </div>
          <div className="form-group mb-3">
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
          </div>
          <div className="form-group mb-3">
            <label htmlFor="size">Number of comments</label>
            <Field as="select" name="size" aria-label="size">
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="500">500</option>
            </Field>

            <ErrorMessage name="subreddit" />
          </div>

          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default SearchForm;
