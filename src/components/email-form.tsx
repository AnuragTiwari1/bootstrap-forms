import { Formik } from "formik";
import { EmailFormData, FormProps } from "./types";

import * as Yup from "yup";

type EmailFormProps = FormProps<EmailFormData> & {
  onSubmittedValueChange: () => void;
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please provide valid email address")
    .required("This field is required"),
  mobile: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Please provide valid phone number"
    )
    .required("This field is required"),
});

export const EmailForm: React.FC<EmailFormProps> = (props) => {
  const { isActive, onSubmit, onSubmittedValueChange, initialValues } = props;

  return (
    <div
      className={`tab-pane fade ${isActive ? "show active" : ""}`}
      role="tabpanel"
      aria-labelledby="email-tab"
    >
      <Formik
        initialValues={initialValues as EmailFormData}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          onSubmit(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <form
            id="emailForm"
            className={`needs-validation`}
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="form-group row">
              <div className="col-md-2 offset-md-2">
                <label htmlFor="email">
                  Email Address<span className="text-danger"> * </span>
                </label>
              </div>
              <div className="col-md-5 ">
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  className={`form-control ${
                    touched.email
                      ? errors.email
                        ? "is-invalid"
                        : "is-valid"
                      : ""
                  }`}
                  required
                  onChange={(e) => {
                    handleChange(e);
                    onSubmittedValueChange();
                  }}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter your email"
                />
              </div>
              <div className="invalid-feedback">{errors.email}</div>
            </div>
            <div className="form-group mt-3">
              <div className="row">
                <div className="col-md-2 offset-md-2">
                  <label htmlFor="mobile">
                    Mobile Number<span className="text-danger"> * </span>
                  </label>
                </div>
                <div className="col-md-5">
                  <input
                    type="text"
                    className={`form-control ${
                      touched.mobile
                        ? errors.mobile
                          ? "is-invalid"
                          : "is-valid"
                        : ""
                    }`}
                    id="mobile"
                    required
                    onChange={(e) => {
                      handleChange(e);
                      onSubmittedValueChange();
                    }}
                    onBlur={handleBlur}
                    value={values.mobile}
                  />
                </div>
              </div>
              <div className="invalid-feedback">{errors.mobile}</div>
            </div>

            <div className="d-flex justify-content-end ">
              <button
                type="submit"
                className="btn btn-success mt-5 btn-lg float-right continuebtn"
              >
                Continue →
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
