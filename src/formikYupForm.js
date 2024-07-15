import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const FormikYupForm = () => (
  <div>
    <h1>Signup</h1>

    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <Field name="firstName" />
                {errors.firstName && touched.firstName ? (
                  <div className="text-danger">{errors.firstName}</div>
                ) : null}
              </div>
              <div className="col-4">
                <Field name="lastName" />
                {errors.lastName && touched.lastName ? (
                  <div className="text-danger">{errors.lastName}</div>
                ) : null}
              </div>{" "}
              <div className="col-4">
                <Field name="email" type="email" />
                {errors.email && touched.email ? (
                  <div className="text-danger">{errors.email}</div>
                ) : null}
              </div>
            </div>
            <button className="mt-3" type="submit">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);
