import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import "./Form.css";
import * as Yup from "yup";
import TextError from "../TextError/TextError";

const initialValues = {
  // These initia values are corsponding to the name of form attributes
  name: "Vaidik",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values) => {
  console.log(values);
};

// step 1: defining validation object shema for Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Rrequired!"),
  email: Yup.string().email("Invalid email format!").required("Rrequired!"),
  channel: Yup.string().required("Rrequired!"),
  address: Yup.string().required("Rrequired!"),
});
const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required bro!";
  }
  return error;
};
function TestForm() {
  // // console.log("Form values", formik.values);
  // // console.log("Form error", formik.errors);
  // // console.log("Visited fields", formik.touched);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <FastField name="address">
            {(props) => {
              console.log("Field Render");
              const { field, form, meta } = props;
              // console.log("Render props", props);
              return (
                <div>
                  <input id="address" {...field} />
                  {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                  ) : null}
                </div>
              );
            }}
          </FastField>
        </div>
        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field
            as="textarea"
            id="comments"
            name="comments"
            validate={validateComments}
          />
          <ErrorMessage name="comments">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook Profile</label>
          <Field type="text" id="facebook" name="social.facebook" />
        </div>
        <div className="form-control">
          <label htmlFor="twitter">Facebook Profile</label>
          <Field type="text" id="twitter" name="social.twitter" />
        </div>
        <div className="form-control">
          <label htmlFor="primaryPh">Primary Phone number</label>
          <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
        </div>
        <div className="form-control">
          <label htmlFor="secondaryPh">Secondary Phone number</label>
          <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
        </div>
        <div className="form-control">
          <label htmlFor="">List of phone numbers</label>
          <FieldArray name="phNumbers">
            {(fieldArayProps) => {
              // console.log("fieldArayProps",fieldArayProps)
              const { push, remove, form } = fieldArayProps;
              const { values } = form;
              const { phNumbers } = values;
              console.log("Form Errors: ", form.errors);
              return (
                <div>
                  {phNumbers.map((phNumber, index) => (
                    <div key={index}>
                      <Field name={`phNumbers[${index}]`} />
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => {
                            remove(index);
                          }}
                        >
                          -
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          push("");
                        }}
                      >
                        +
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default TestForm;
