import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";

function FormWithFormik() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleBlur,
    handleChange,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      campaigns: "0",
      weeklyOrMonthly: "",
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 500));

      if (values.email === "test@test.com") {
        return bag.setFieldError("email", "Bu mail adresi zaten kullanımda.");
      }

      console.log(values);
      bag.resetForm();
    },
    validationSchema,
  });

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={values.name}
          onChange={handleChange("name")}
          onBlur={handleBlur("name")}
          disabled={isSubmitting}
        />
        {errors.name && touched.name && (
          <div className="error">{errors.name}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={values.email}
          onChange={handleChange("email")}
          onBlur={handleBlur("email")}
          disabled={isSubmitting}
        />
        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={values.message}
          onChange={handleChange("message")}
          onBlur={handleBlur("message")}
          disabled={isSubmitting}
        />
        {errors.message && touched.message && (
          <div className="error">{errors.message}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">Campaigns</label>
        <input
          type="radio"
          name="campaigns"
          checked={values.campaigns === "0"}
          onChange={handleChange("campaigns")}
          value="0"
        />{" "}
        Hayır
        <input
          type="radio"
          name="campaigns"
          checked={values.campaigns === "1"}
          value="1"
          onChange={handleChange("campaigns")}
        />{" "}
        Evet
      </div>
      {values.campaigns === "1" && (
        <div>
          <label>Weekly/Monthly</label>
          <select
            id="weeklyOrMonthly"
            value={values.weeklyOrMonthly}
            onChange={handleChange}
          >
            <option value="">Seçiniz</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>

          {errors.weeklyOrMonthly && touched.weeklyOrMonthly && (
            <div className="error">{errors.weeklyOrMonthly}</div>
          )}
        </div>
      )}
      <div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormWithFormik;
