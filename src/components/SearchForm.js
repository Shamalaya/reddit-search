import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchForm = () => {
  return (
    <Formik
      initialValues={{ username: "", subreddit: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .max(20, "Must be between 3 and 20 characters")
          .min(3, "Must be between 3 and 20 characters")
          .required("Required"),
        subreddit: Yup.string()
          .max(3, "Must be between 3 and 20 characters")
          .min(3, "Must be between 3 and 20 characters"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));

          setSubmitting(false);
        }, 400);
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
            <label htmlFor="subreddit">Subreddit</label>

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

            <Field as="select" name="color">
              <option value="red">Red</option>

              <option value="green">Green</option>

              <option value="blue">Blue</option>
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
