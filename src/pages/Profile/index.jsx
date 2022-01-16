import { useState } from "react";
import MetamaskButton from "../../components/MetamaskButton";
import PageTitle from "../../components/PageTitle";
import InputField from "../../components/InputField";
const Profile = () => {
  const [birthdate, setBirthdate] = useState("");
  return (
    <div className="container mt-5">
      <PageTitle
        title="Profile"
        description="Update information on your memint profile."
      />
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="mb-3">
            <label className="form-label">Birthdate</label>
            <InputField
              placeholder="12/13/1991"
              value={birthdate}
              onChange={setBirthdate}
              disabled
            />
            <div className="form-text">
              Once you enter your birthdate, you can't change it!
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <hr />
              <MetamaskButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
