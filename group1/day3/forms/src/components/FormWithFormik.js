import React from "react";
import { Formik } from "formik";
import validations from "./validations";

function FormWithFormik() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      onSubmit={(values) => {
        console.log("values", values);
      }}
      validationSchema={validations}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              value={values.name}
              onChange={handleChange("name")}
            />
          </div>
          <div>
            <label htmlFor="email">E-Mail</label>
            <input
              id="email"
              value={values.email}
              onChange={handleChange("email")}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={values.message}
              onChange={handleChange("message")}
            />
          </div>
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default FormWithFormik;
