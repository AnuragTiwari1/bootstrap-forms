import { useCallback, useState } from "react";
import { EmailForm } from "./components/email-form";
import { TravelerForm } from "./components/traveller-form";
import { EmailFormData } from "./components/types";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"email" | "traveler">("email");
  const [isEmailFormSubmitted, setIsEmailFormSubmitted] =
    useState<boolean>(false);

  const handleEmailFormSubmit = useCallback((values: EmailFormData) => {
    console.log("the Email form values are >>>>>>", values);
    setIsEmailFormSubmitted(true);

    setActiveTab("traveler");
  }, []);

  return (
    <div className="container">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className={`nav-item ${activeTab === "traveler" ? "active" : ""}`}>
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
            className={`nav-link ${isEmailFormSubmitted ? "" : "disabled"} ${
              activeTab === "traveler" ? "active" : ""
            }`}
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
          isActive={activeTab === "email"}
          onSubmit={handleEmailFormSubmit}
          onSubmittedValueChange={() => {
            if (setIsEmailFormSubmitted) {
              setIsEmailFormSubmitted(false);
            }
          }}
        />

        <TravelerForm isActive={activeTab === "traveler"} onSubmit={() => {}} />
      </div>
    </div>
  );
};

export default App;
