import moment from "moment";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/user";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";

const Onboard = () => {
  let navigate = useNavigate();

  const { user, refreshUser } = useContext(UserContext);
  const [birthdate, setBirthdate] = useState("");

  async function updateBirthdate() {
    user.set("birthdate_unix", moment(birthdate).unix());
    user.set("birthdate_label", birthdate);
    await user.save();
    await refreshUser();

    // const db = getFirestore();
    // await setDoc(doc(db, "accounts", account), {
    //   address: account,
    //   birthdate: moment(birthdate).unix(),
    //   birthdateLabel: birthdate,
    // });
    // await getUser();
    navigate("/dashboard");
  }
  return (
    <div className="container mt-5">
      <div className="col-md-4 offset-md-4 text-center mt-5">
        <h1>Welcome!</h1>
      </div>
      <div className="col-md-4 offset-md-4 mt-5">
        <div className="mb-3">
          <label className="form-label">Birthdate</label>
          <InputField
            placeholder="12/13/1991"
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
          className="btn btn-primary w-100">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Onboard;
