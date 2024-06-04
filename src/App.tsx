import { useCallback, useState } from "react";
import { EmailForm } from "./components/email-form";
import { TravelerForm } from "./components/traveller-form";
import { EmailFormData, TravelerFormData } from "./components/types";

type AppFormState = {
  userInfo: EmailFormData;
  travelerInfo: TravelerFormData;
};

const initialFormState: AppFormState = {
  userInfo: { email: "", mobile: "" },
  travelerInfo: {
    room: [
      [
        { firstName: "", lastName: "", isLeadContact: true, prefix: "Mr" },
        { firstName: "", lastName: "", isLeadContact: false, prefix: "Master" },
        { firstName: "", lastName: "", isLeadContact: false, prefix: "Master" },
      ],
      [
        { firstName: "", lastName: "", isLeadContact: false, prefix: "Mr" },
        { firstName: "", lastName: "", isLeadContact: false, prefix: "Master" },
        { firstName: "", lastName: "", isLeadContact: false, prefix: "Master" },
      ],
    ],
  },
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"email" | "traveler">("email");
  const [isEmailFormSubmitted, setIsEmailFormSubmitted] =
    useState<boolean>(false);

  const [formState, setFormState] = useState<AppFormState>(initialFormState);

  const handleEmailFormSubmit = useCallback((values: EmailFormData) => {
    console.log("the Email form values are >>>>>>", values);
    setIsEmailFormSubmitted(true);
    setFormState((prevState) => ({ ...prevState, userInfo: values }));

    setActiveTab("traveler");
  }, []);

  return (
    <div className="container mt-5 ">
      <div className="row ">
        <div className="col-md-10 bg-light offset-md-1">
          <div className=" card border m-3  p-5">
            <h4 className="text-primary mb-4">Book In 2 Simple Steps</h4>
            <ul className="nav nav-tabs mb-5" id="myTab" role="tablist">
              <li
                className={`nav-item ${
                  activeTab === "traveler" ? "active" : ""
                }`}
              >
                <button
                  className="nav-link active"
                  role="tab"
                  aria-controls="email-tab"
                  aria-selected={activeTab === "email"}
                  onClick={() => setActiveTab("email")}
                >
                  Email Address
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    isEmailFormSubmitted ? "" : "disabled"
                  } ${activeTab === "traveler" ? "active" : ""}`}
                  role="tab"
                  aria-controls="traveler-tab"
                  aria-selected={activeTab === "traveler"}
                  onClick={() => setActiveTab("traveler")}
                >
                  Traveller(s) Info
                </button>
              </li>
            </ul>

            <div className="tab-content">
              <EmailForm
                initialValues={formState.userInfo}
                isActive={activeTab === "email"}
                onSubmit={handleEmailFormSubmit}
                onSubmittedValueChange={() => {
                  if (setIsEmailFormSubmitted) {
                    setIsEmailFormSubmitted(false);
                  }
                }}
              />

              <TravelerForm
                initialValues={formState.travelerInfo}
                isActive={activeTab === "traveler"}
                onSubmit={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
