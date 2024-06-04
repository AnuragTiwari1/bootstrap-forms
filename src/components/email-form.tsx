import { EmailFormData, FormProps } from "./types";

export const EmailForm: React.FC<FormProps<EmailFormData>> = (props) => {
  const { isActive } = props;

  return (
    <div
      className={`tab-pane fade ${isActive ? "show active" : ""}`}
      role="tabpanel"
      aria-labelledby="email-tab"
    >
      <form
        id="emailForm"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("the form has been submitted");
        }}
      >
        <div className="form-group">
          <label htmlFor="email">Email Address*</label>
          <input type="email" className="form-control" id="email" required />
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number*</label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            pattern="^\+91\d{10}$"
            required
          />
          <div className="invalid-feedback">Mobile Number is not valid.</div>
        </div>
        <button type="submit" className="btn btn-success">
          Continue
        </button>
      </form>
    </div>
  );
};
