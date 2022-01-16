import { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useMoralis } from "react-moralis";

import InputField from "../../components/InputField";
import PageTitle from "../../components/PageTitle";
import { toast } from "react-toastify";

const Onboard = () => {
  let navigate = useNavigate();

  const [birthdate, setBirthdate] = useState("");
  const { setUserData, isUserUpdating } = useMoralis();

  async function updateBirthdate() {
    var date = moment(birthdate);
    if (!date.isValid()) {
      return toast.error("Please provide a valid birthdate.");
    }
    await setUserData({
      birthdate_unix: moment(birthdate).unix(),
      birthdate_label: birthdate,
    });
    navigate("/dashboard");
  }
  return (
    <div className="container mt-5">
      <PageTitle
        title="Welcome!"
        description="We need a little more information from you."
      />
      <div className="col-md-4 offset-md-4">
        <div className="mb-3">
          <label className="form-label">Birthdate</label>
          <InputField
            placeholder="12/13/1991"
            mask="99/99/9999"
            value={birthdate}
            onChange={setBirthdate}
          />
          <div className="form-text">
            Once you enter your birthdate, you can't change it!
          </div>
        </div>
        <button
          onClick={updateBirthdate}
          type="button"
          className="btn btn-primary w-100"
          disabled={isUserUpdating}>
          {isUserUpdating ? "Creating Account..." : "Go to Dashboard"}
        </button>
      </div>
    </div>
  );
};

export default Onboard;
