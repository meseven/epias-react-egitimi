import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";

function FormWithFormik() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    values,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "test",
      email: "testtt@test.com",
      message: "deneme",
      campaigns: "0",
      monthlyOrWeekly: "",
    },
    onSubmit: async (values, bag) => {
      // await new Promise((r) => setTimeout(r, 1000));
      console.log("values", values);

      if (values.email === "test@test.com") {
        return bag.setFieldError("email", "Bu mail adresi zaten kullanımda.");
      }

      // bag.resetForm();
    },
    validationSchema,
  });

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <pre>{JSON.stringify(values, null, 2)}</pre>

      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          disabled={isSubmitting}
          value={values.name}
          onChange={handleChange("name")}
          onBlur={handleBlur("name")}
          placeholder="İsim"
        />
        {errors.name && touched.name && (
          <div className="error">{errors.name}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">E-Mail</label>
        <input
          id="email"
          type="text"
          disabled={isSubmitting}
          value={values.email}
          onChange={handleChange("email")}
          onBlur={handleBlur("email")}
          placeholder="E-mail"
        />
        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          disabled={isSubmitting}
          value={values.message}
          onChange={handleChange("message")}
          onBlur={handleBlur("message")}
          placeholder="Message"
        />
        {errors.message && touched.message && (
          <div className="error">{errors.message}</div>
        )}
      </div>

      <div>
        <label htmlFor="campaigns">Kampanyalar</label>
        <input
          type="radio"
          name="campaigns"
          value="0"
          defaultChecked={values.campaigns === "0"}
          onChange={() => {
            setFieldValue("monthlyOrWeekly", "");
            setFieldValue("campaigns", "0");
          }}
        />{" "}
        Hayır
        <input
          type="radio"
          name="campaigns"
          value="1"
          defaultChecked={values.campaigns === "1"}
          onChange={handleChange("campaigns")}
        />{" "}
        Evet
        {errors.campaigns && <div className="error">{errors.campaigns}</div>}
      </div>

      {values.campaigns === "1" && (
        <div>
          <label htmlFor="">Aylık/Haftalık</label>
          <input
            type="radio"
            value="monthly"
            name="monthlyOrWeekly"
            onChange={handleChange("monthlyOrWeekly")}
          />{" "}
          Aylık
          <input
            type="radio"
            value="weekly"
            name="monthlyOrWeekly"
            onChange={handleChange("monthlyOrWeekly")}
          />{" "}
          Haftalık
          {errors.monthlyOrWeekly && (
            <div className="error">{errors.monthlyOrWeekly}</div>
          )}
        </div>
      )}

      <div>
        <button type="submit" disabled={isSubmitting}>
          Save
        </button>
      </div>
    </form>
  );
}

export default FormWithFormik;
