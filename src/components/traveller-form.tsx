import { FieldArray, Formik, useFormikContext } from "formik";
import { FormProps, TravelerFormData } from "./types";
import * as Yup from "yup";

const schema = Yup.object().shape({
  room: Yup.array().of(
    Yup.array().of(
      Yup.object().shape({
        firstName: Yup.string()
          .max(30, "Must be less than 30 characters")
          .required("This Field is required"),
        lastName: Yup.string()
          .max(30, "Must be less than 30 characters")
          .required("This Field is required"),
      })
    )
  ),
});

export const TravelerForm: React.FC<FormProps<TravelerFormData>> = (props) => {
  const { isActive, onSubmit, initialValues } = props;

  return (
    <div
      className={`tab-pane fade ${isActive ? "show active" : ""}`}
      role="tabpanel"
      aria-labelledby="traveller-tab"
    >
      <div className="container">
        <Formik
          initialValues={initialValues as TravelerFormData}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            onSubmit(values);
          }}
        >
          {({ handleSubmit }) => (
            <form
              id="travelerForm"
              className={`needs-validation`}
              noValidate
              onSubmit={handleSubmit}
            >
              <FieldArray name="room">{() => <Rooms />}</FieldArray>

              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const Rooms = () => {
  const { values, handleChange, handleBlur, errors, touched } =
    useFormikContext<TravelerFormData>();

  return values.room.map((e, i) => (
    <div className="room" key={`room${i + 1}`}>
      <h5>Room {i + 1}</h5>
      <div className="row">
        <span className="col-md-2">Pax Details</span>
        <span className="col"></span>
        <span className="col-md-2">Select Lead Guest</span>
      </div>
      <FieldArray name={`room.${i}`}>
        {() =>
          values.room[i].map((k, j) => (
            <div className="row my-4" key={`room${i + 1}_person${j + 1}`}>
              <div className="form-group col-md-2">
                <select
                  className="form-control"
                  required
                  name={`room.${i}.${j}.prefix`}
                  value={values.room[i][j].prefix}
                  onChange={handleChange}
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Master">Master</option>
                  <option value="Miss">Miss</option>
                </select>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className={`form-control ${
                    touched?.room?.[i]?.[j]?.firstName
                      ? typeof errors.room?.[i]?.[j].firstName === "string"
                        ? "is-invalid"
                        : "is-valid"
                      : ""
                  }`}
                  placeholder="First Name"
                  required
                  name={`room.${i}.${j}.firstName`}
                  value={values.room[i]?.[j].firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="invalid-feedback">
                  {errors?.room?.[i]?.[j]?.firstName}
                </div>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className={`form-control ${
                    touched?.room?.[i]?.[j]?.lastName
                      ? typeof errors.room?.[i]?.[j].lastName === "string"
                        ? "is-invalid"
                        : "is-valid"
                      : ""
                  }`}
                  id="lastName"
                  placeholder="Last Name"
                  required
                  name={`room.${i}.${j}.lastName`}
                  value={values.room[i][j].lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="invalid-feedback">
                  {errors?.room?.[i]?.[j]?.lastName}
                </div>
              </div>
              <div className="form-group col-md-2">
                <select
                  className="form-control"
                  required
                  name={`room.${i}.${j}.prefix`}
                  value={values.room[i][j].prefix}
                  onChange={handleChange}
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Master">Master</option>
                  <option value="Miss">Miss</option>
                </select>
              </div>
            </div>
          ))
        }
      </FieldArray>
    </div>
  ));
};
