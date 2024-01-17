import React from "react";
import { useFormik } from "formik";
import "./Form.css";
import * as Yup from "yup";

const initialValues = {
  // These initia values are corsponding to the naem of form attributes
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log(values);
};
const validate = (values) => {
  // values.name, values.email, values.channel
  // errors.name, errors.email, errors.channel
  // errors.name = 'This field is required'
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/i.test(values.email)
  ) {
    errors.email = "Invalid email format";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};
// step 1: defining validation object shema for Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Rrequired!"),
  email: Yup.string().email("Invalid email format!").required("Rrequired!"),
  channel: Yup.string().required("Rrequired!"),
});
function oldForm() {
  const formik = useFormik({
    // Step : 1 giving initial values
    initialValues,
    // step 2 :onChange and set values using formik constant in form
    // step 3 :specify handleOnSubmit in form tag
    onSubmit,
    validationSchema,
    // Validate the feilds using validate error object
    // validate,
  });
  // console.log("Form values", formik.values);
  // console.log("Form error", formik.errors);
  console.log("Visited fields", formik.touched);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default oldForm;
