import { FormProps, TravelerFormData } from "./types";

export const TravelerForm: React.FC<FormProps<TravelerFormData>> = (props) => {
  const { isActive } = props;

  return (
    <div
      className={`tab-pane fade ${isActive ? "show active" : ""}`}
      role="tabpanel"
      aria-labelledby="traveller-tab"
    >
      <form id="travellerForm">
        <div id="roomContainer" />
        <div className="room" id="room1">
          <h5>Room 1</h5>
          <div className="form-row">
            <div className="form-group col-md-2">
              <label htmlFor="title1">Title</label>
              <select className="form-control" id="title1" required>
                <option>Mr</option>
                <option>Master</option>
              </select>
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="firstName1">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName1"
                required
              />
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="lastName1">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName1"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-2">
              <label htmlFor="title2">Title</label>
              <select className="form-control" id="title2" required>
                <option>Master</option>
              </select>
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="firstName2">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName2"
                required
              />
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="lastName2">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName2"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-2">
              <label htmlFor="title3">Title</label>
              <select className="form-control" id="title3" required>
                <option>Master</option>
              </select>
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="firstName3">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName3"
                required
              />
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="lastName3">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName3"
                required
              />
            </div>
          </div>
        </div>
        <div className="room" id="room2">
          <h5>Room 2</h5>
          <div className="form-row">
            <div className="form-group col-md-2">
              <label htmlFor="title4">Title</label>
              <select className="form-control" id="title4" required>
                <option>Mr</option>
              </select>
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="firstName4">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName4"
                required
              />
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="lastName4">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName4"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-2">
              <label htmlFor="title5">Title</label>
              <select className="form-control" id="title5" required>
                <option>Mr</option>
              </select>
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="firstName5">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName5"
                required
              />
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="lastName5">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName5"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-2">
              <label htmlFor="title6">Title</label>
              <select className="form-control" id="title6" required>
                <option>Master</option>
              </select>
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="firstName6">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName6"
                required
              />
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="lastName6">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName6"
                required
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
